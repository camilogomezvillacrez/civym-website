# CIVYM S.A.S. — sitio web

Sitio de la firma de consultoría en ingeniería de vías y movilidad (Antioquia, Colombia).

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS para estilos, GSAP (ScrollTrigger) para animaciones
- Gestor de paquetes: **pnpm** (no usar npm ni yarn — hay `pnpm-lock.yaml`)

## Flujo de trabajo

1. Hacer el cambio.
2. Probarlo en local (`pnpm dev`, http://localhost:3000).
3. Antes de subir algo al sitio en vivo, **preguntar primero** ("¿Subo esto al sitio en vivo?"). Nunca hacer `git push` sin confirmación explícita.
4. Al hacer push a `main`, Vercel despliega automáticamente — no hay que hacer nada más ahí.

## Formulario de contacto / cotización

- **No usar servicios externos de pago** para guardar los datos ni enviar el correo (nada de Resend, SendGrid, Service Account de Google Cloud, credenciales JSON).
- El backend es un **Google Apps Script** (`doPost` + `SpreadsheetApp` + `MailApp`), documentado en [docs/google-apps-script.gs](docs/google-apps-script.gs). Se despliega como Web App desde script.google.com y su URL `/exec` va en la variable de entorno `FORM_WEBHOOK_URL` (local: `.env.local`; producción: variables de entorno de Vercel).
- [app/api/contact/route.ts](app/api/contact/route.ts) es solo un proxy: valida los campos y reenvía el POST a `FORM_WEBHOOK_URL`.

## Pendientes conocidos

- El número de WhatsApp en [components/layout/WhatsAppButton.tsx](components/layout/WhatsAppButton.tsx) es un placeholder (`573001234567`) — reemplazar por el número real del negocio.
