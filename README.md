# maxiaringoli-portfolio

Portfolio profesional público de Maxi Aringoli.

## Objetivo

Presentar servicios de ingeniería de software, desarrollo Full Stack, automatización, integraciones e infraestructura a clientes y proyectos de Argentina y del exterior.

## Stack

- React 19
- Vite 8
- TypeScript 7
- CSS nativo
- PHP 8.1 + PDO para analytics
- MySQL 8 para eventos

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El resultado estático se genera en `dist/` y puede ser servido directamente por Nginx.

## Analytics

El portfolio incluye una analítica propia y minimalista para medir visitas y clics relevantes sin cookies, fingerprinting ni servicios externos.

Documentación: [`docs/analytics.md`](docs/analytics.md)

## Flujo Git

- `main`: producción (`maxiaringoli.com.ar`)
- `develop`: integración / futuro ambiente de portfolio
- `feature/*`: desarrollo de funcionalidades

Los cambios deben ingresar mediante pull request.
