# Pro-Stasis — Web Corporativa y Biomecatrónica

Estructura modular optimizada para hosting web en producción:
- **Frontend**: Angular (v22+) + TypeScript + Tailwind CSS (Bilingüe ES/EN).
- **Backend API**: PHP (Compatible con cualquier hosting Apache/cPanel sin necesidad de Node.js).
- **Almacenamiento**: Archivos locales JSON (`backend-php/api/data/messages.json`), **sin necesidad de bases de datos externas**.

---

## Estructura del proyecto

```text
pagina_web/
├── frontend/                      ← Aplicación web con Angular (TypeScript)
│   ├── public/assets/images/      ← TODAS las fotos e imágenes de la web
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/        ← Los componentes (1 archivo .ts por sección)
│   │   │   └── services/          ← TranslationService y ApiService
│   │   ├── styles.css             ← Estilos CSS globales y efectos glow
│   │   └── index.html             ← HTML base (título del navegador, fuentes)
│   └── tailwind.config.js         ← Paleta de colores (brand-red, etc.)
│
└── backend-php/                   ← Backend API en PHP (datos y servidor)
    └── api/
        ├── index.php              ← Enrutador principal de endpoints
        ├── .htaccess              ← Reescritura limpia de URLs
        └── data/
            ├── content_es.json    ← TODOS LOS TEXTOS en Español
            ├── content_en.json    ← TODOS LOS TEXTOS en Inglés
            ├── products.json      ← Ficha técnica de prótesis
            ├── grips.json         ← Modos de agarre y telemetría
            └── messages.json      ← Mensajes recibidos del formulario
```

---

## Cómo probar el Frontend en local

```bash
cd frontend
npm start
```
La web se abre en: `http://localhost:4200`

---

## Cómo subirlo al Hosting de tu dominio

1. Compila el frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Sube el contenido de `frontend/dist/frontend/browser/` a la carpeta raíz de tu hosting (`public_html/`).
3. Sube la carpeta `backend-php/api/` a `public_html/api/`.
4. ¡Listo! La web y el formulario de contacto funcionarán automáticamente en tu dominio.
