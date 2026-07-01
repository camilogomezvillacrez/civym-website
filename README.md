# CIVYM S.A.S. - Sitio Web

Sitio web profesional para CIVYM S.A.S. (Consultoría en Ingeniería de Vías y Movilidad) construido con Next.js, TypeScript, Tailwind CSS e integración con Google Sheets.

---

## 🚀 Inicio rápido (opción fácil — sin Terminal)

1. **Abre la carpeta del proyecto** en el Explorador de archivos.
2. **Haz doble clic** en `start-dev.bat`.
3. Se abrirá una ventana de Terminal; espera a que vea "Servidor iniciado en http://localhost:3000".
4. **Abre tu navegador** en: http://localhost:3000

Eso es todo. El formulario de contacto guardará envíos localmente en `data/submissions.json` hasta que configures Google Sheets.

---

## 🛠️ Inicio rápido (opción con Terminal/PowerShell)

Si prefieres más control o si `start-dev.bat` no funciona:

```powershell
cd "C:\Users\Usuario\Desktop\Proyecto Pipe"
pnpm install
pnpm dev
```

Abre: http://localhost:3000

---

## 📋 Estructura del proyecto

```
Proyecto Pipe/
├── app/                    # Páginas y rutas (Next.js App Router)
│   ├── layout.tsx         # Layout raíz (Navbar, Footer)
│   ├── page.tsx           # Página de inicio
│   ├── api/contact/       # API para formulario
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Servicios, Proyectos, Contacto
│   └── common/            # Button (componentes reutilizables)
├── constants/             # Datos estáticos (servicios, proyectos)
├── types/                 # Tipos TypeScript
├── public/images/         # Imágenes organizadas por sección
├── data/                  # Datos locales (submissions.json)
├── lib/                   # Utilidades (googleSheets.ts)
├── start-dev.bat          # Archivo para ejecutar con doble clic
├── .env.local.example     # Referencia de variables de entorno
├── package.json           # Dependencias
├── tsconfig.json          # Configuración TypeScript
├── tailwind.config.cjs    # Configuración Tailwind
└── README.md              # Este archivo
```

---

## 🎨 Características implementadas

✓ **Hero profesional** con CTA visible  
✓ **Servicios** con iconos y mejor visual  
✓ **Proyectos** con tarjetas atractivas  
✓ **Formulario de contacto** con validación y feedback visual  
✓ **Navbar responsive** con menú mobile  
✓ **Footer completo** con enlaces y contacto  
✓ **Colores CIVYM**: amarillo (#FFCB42), gris (#5E5E5E)  
✓ **Totalmente responsivo** (mobile-first)  

---

## 🔌 Configurar Google Sheets (guardar contactos en hoja)

Por defecto, los envíos se guardan en `data/submissions.json`. Si quieres usarGoogle Sheets:

### Paso 1: Crear un proyecto en Google Cloud

1. Ve a https://console.cloud.google.com
2. Crea un nuevo proyecto (ej. "CIVYM Website")
3. Ve a **APIs & Services > Library**
4. Busca "Google Sheets API" y haz clic en **Enable**

### Paso 2: Crear una Service Account

1. Ve a **APIs & Services > Credentials**
2. Haz clic en **Create Credentials > Service Account**
3. Rellena el nombre (ej. "civym-website") y crea
4. Haz clic en la cuenta creada y ve a la pestaña **Keys**
5. Haz clic en **Add Key > Create new key > JSON**
6. Se descargará un archivo JSON

### Paso 3: Crear la hoja de cálculo

1. Ve a https://sheets.google.com
2. Crea una nueva hoja (ej. "CIVYM - Contactos")
3. En la primera fila, agrega estos encabezados:
   - A1: `Fecha`
   - B1: `Nombre`
   - C1: `Correo`
   - D1: `Mensaje`
4. Copia el ID de la hoja (está en la URL: `docs.google.com/spreadsheets/d/**AQUI_ESTA_EL_ID**/edit`)

### Paso 4: Compartir la hoja con la Service Account

1. Abre el JSON descargado con un editor de texto
2. Copia el valor de `"client_email"` (ej: `civym-website@project-id.iam.gserviceaccount.com`)
3. En tu hoja de Google Sheets, haz clic en **Compartir**
4. Pega el email y dale permiso de **Editor**

### Paso 5: Configurar las variables de entorno

1. En la raíz del proyecto, crea un archivo `.env.local` (o copia `.env.local.example` y renómbralo)
2. Abre el JSON del Service Account y cópialo completamente
3. En `.env.local`, pega:

```
GOOGLE_SERVICE_ACCOUNT_KEY="<TODO_EL_JSON_DEL_SERVICE_ACCOUNT_AQUI>"
GOOGLE_SHEET_ID="<EL_ID_DE_TU_HOJA>"
GOOGLE_SHEET_NAME="Sheet1"
```

Nota: Si el JSON tiene saltos de línea, reemplázalos con `\n` o pégalo como una sola línea.

### Paso 6: Reiniciar el servidor

Si tenías `pnpm dev` ejecutándose, detén el servidor (Ctrl+C) y vuelve a ejecutar:

```powershell
pnpm dev
```

Prueba el formulario: los envíos deberían aparecer en tu hoja de Google Sheets.

---

## 📧 Archivos importantes

- `app/api/contact/route.ts` — Endpoint que recibe y procesa envíos del formulario
- `lib/googleSheets.ts` — Helper para conectar con Google Sheets API
- `data/submissions.json` — Almacenamiento local de contactos (fallback)
- `constants/services.ts` — Lista de servicios
- `constants/proyectos.ts` — Lista de proyectos (reemplaza con tus datos)
- `components/sections/ContactoSection.tsx` — Formulario con validación cliente

---

## 🚢 Desplegar en Vercel (publicar en internet)

1. Sube tu código a un repositorio Git (GitHub, GitLab, etc.)
2. Ve a https://vercel.com y crea una cuenta
3. Importa tu repositorio
4. En **Environment Variables**, agrega:
   - `GOOGLE_SERVICE_ACCOUNT_KEY`
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`
5. Haz clic en **Deploy**

Tu sitio estará en vivo en una URL tipo: `https://civym-website.vercel.app`

---

## 📝 Próximos pasos sugeridos

- [ ] Reemplazar placeholders por imágenes reales en `public/images/`
- [ ] Actualizar lista de proyectos en `constants/proyectos.ts`
- [ ] Configurar Google Sheets y probar formulario
- [ ] Añadir reCAPTCHA para anti-spam (opcional)
- [ ] Configurar envío de emails (opcional)
- [ ] Desplegar en Vercel o servidor propio

---

## 🤝 Soporte

Si hay errores al ejecutar `start-dev.bat` o `pnpm dev`:

1. Verifica que Node.js esté instalado: abre PowerShell y ejecuta `node -v`
2. Si no aparece una versión, instala Node.js desde https://nodejs.org/
3. Cierra y reabre PowerShell después de instalar Node.js
4. Intenta de nuevo: `pnpm dev`

---

**© 2024 CIVYM S.A.S.** · Consultoría en Ingeniería de Vías y Movilidad


