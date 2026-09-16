# Analytics mínima del portfolio

## Arquitectura

```text
React -> POST /api/event -> Nginx -> PHP 8.1 FPM -> PDO -> MySQL 8
```

La analítica es deliberadamente mínima y no debe bloquear ninguna navegación o acción del usuario.

No se usan cookies, sesiones de tracking, fingerprinting, geolocalización, Google Analytics ni librerías externas.

## Backend

Endpoint público:

```text
POST /api/event
```

Fuente versionada:

```text
server/analytics/event.php
```

Ruta de despliegue en el VPS:

```text
/var/www/portfolio-api/event.php
```

PHP-FPM usa:

```text
/run/php/php8.1-fpm.sock
```

Configuración Nginx:

```nginx
location = /api/event {
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME /var/www/portfolio-api/event.php;
    fastcgi_pass unix:/run/php/php8.1-fpm.sock;
}
```

## Base de datos

Base:

```text
portfolio_db
```

Tabla:

```sql
CREATE TABLE portfolio_events (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(50) NOT NULL,
    event_value VARCHAR(150) NULL,
    source VARCHAR(50) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_event_name (event_name),
    INDEX idx_created_at (created_at)
);
```

Usuario de aplicación:

```text
portfolio_app@localhost
```

Permisos previstos exclusivamente sobre `portfolio_db.*`:

```text
SELECT, INSERT
```

## Credenciales

Las credenciales no se versionan.

Archivo en el VPS:

```text
/etc/maxiaringoli-portfolio/analytics.env
```

Variables esperadas:

```text
DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
```

No documentar ni copiar el valor real de `DB_PASSWORD` al repositorio.

## Eventos permitidos

- `page_view`
- `whatsapp_click`
- `linkedin_click`
- `github_click`
- `project_click`

`event_value` es opcional y admite hasta 150 bytes.

`source` es opcional y admite hasta 50 bytes.

El payload completo está limitado a 2048 bytes.

No se almacena IP ni otro dato personal adicional.

## Frontend

`src/analytics.ts` expone `trackEvent()` y realiza un `POST` fire-and-forget a `/api/event`.

Los errores de analítica se descartan en el cliente para que nunca impidan abrir WhatsApp, LinkedIn, GitHub ni ejecutar otra navegación.

`page_view` se dispara una vez desde `main.tsx`, fuera del ciclo de render de React, evitando duplicados provocados por `StrictMode` en desarrollo.

## Consultas básicas

Eventos por tipo:

```sql
SELECT event_name, COUNT(*) AS total
FROM portfolio_events
GROUP BY event_name
ORDER BY total DESC;
```

Visitas por día:

```sql
SELECT DATE(created_at) AS day, COUNT(*) AS total
FROM portfolio_events
WHERE event_name = 'page_view'
GROUP BY DATE(created_at)
ORDER BY day DESC;
```

Proyectos más clickeados:

```sql
SELECT event_value, COUNT(*) AS total
FROM portfolio_events
WHERE event_name = 'project_click'
GROUP BY event_value
ORDER BY total DESC;
```

Origen de clics:

```sql
SELECT event_name, source, COUNT(*) AS total
FROM portfolio_events
WHERE event_name <> 'page_view'
GROUP BY event_name, source
ORDER BY total DESC;
```

## Mantenimiento

- Mantener `server/analytics/event.php` como fuente versionada del endpoint desplegado.
- No ampliar permisos de `portfolio_app` salvo necesidad explícita.
- No versionar `analytics.env` ni credenciales.
- Validar siempre `php -l` antes de actualizar el endpoint en el VPS.
- Validar `nginx -t` antes de cualquier recarga de Nginx.
- Mantener la lista de eventos del frontend sincronizada con la whitelist del endpoint PHP.
- Limpiar eventos de prueba usando un usuario administrativo; `portfolio_app` no tiene permiso `DELETE`.
