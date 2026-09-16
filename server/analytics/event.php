<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'method_not_allowed']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);

if ($contentLength > 2048) {
    respond(413, ['error' => 'payload_too_large']);
}

$raw = file_get_contents('php://input');

if ($raw === false || $raw === '') {
    respond(400, ['error' => 'invalid_payload']);
}

$data = json_decode($raw, true);

if (!is_array($data)) {
    respond(400, ['error' => 'invalid_payload']);
}

$allowedEvents = [
    'page_view',
    'whatsapp_click',
    'linkedin_click',
    'github_click',
    'project_click',
];

$eventName = $data['event_name'] ?? null;
$eventValue = $data['event_value'] ?? null;
$source = $data['source'] ?? null;

if (!is_string($eventName) || !in_array($eventName, $allowedEvents, true)) {
    respond(400, ['error' => 'invalid_event']);
}

if ($eventValue !== null && (!is_string($eventValue) || strlen($eventValue) > 150)) {
    respond(400, ['error' => 'invalid_event_value']);
}

if ($source !== null && (!is_string($source) || strlen($source) > 50)) {
    respond(400, ['error' => 'invalid_source']);
}

try {
    $envLines = file(
        '/etc/maxiaringoli-portfolio/analytics.env',
        FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES
    );

    if ($envLines === false) {
        throw new RuntimeException('Environment unavailable');
    }

    $env = [];

    foreach ($envLines as $line) {
        [$key, $value] = array_pad(explode('=', $line, 2), 2, '');
        $env[trim($key)] = trim($value);
    }

    $required = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];

    foreach ($required as $key) {
        if (!isset($env[$key]) || $env[$key] === '') {
            throw new RuntimeException('Environment incomplete');
        }
    }

    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
        $env['DB_HOST'],
        $env['DB_PORT'],
        $env['DB_NAME']
    );

    $pdo = new PDO(
        $dsn,
        $env['DB_USER'],
        $env['DB_PASSWORD'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $statement = $pdo->prepare(
        'INSERT INTO portfolio_events (event_name, event_value, source)
         VALUES (:event_name, :event_value, :source)'
    );

    $statement->execute([
        ':event_name' => $eventName,
        ':event_value' => $eventValue,
        ':source' => $source,
    ]);
} catch (Throwable $e) {
    error_log('Portfolio analytics error');
    respond(500, ['error' => 'internal_error']);
}

respond(201, ['ok' => true]);
