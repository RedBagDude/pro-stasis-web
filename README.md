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

## Cómo subirlo al Hosting de tu dominio (Producción)

He preparado un empaquetador automático que compila y reúne todo (Frontend + Backend PHP + .htaccess de seguridad) en un solo archivo:

```bash
npm run pack
```

Esto generará automáticamente:
1. La carpeta lista para subir: [`dist_public_html/`](file:///c:/Users/hassa/Desktop/pagina_web/dist_public_html)
2. El archivo ZIP para subir en 1 clic: [`dist_public_html.zip`](file:///c:/Users/hassa/Desktop/pagina_web/dist_public_html.zip) (ocupa solo ~545 KB)

### Pasos para subirlo a tu Hosting (cPanel / Plesk / Hostinger / etc.):

**Opción A — Subida rápida por cPanel / Administrador de archivos (Recomendada):**
1. Entra al panel de tu hosting y abre el **Administrador de Archivos** (File Manager).
2. Entra en la carpeta `public_html/` de tu dominio.
3. Sube el archivo `dist_public_html.zip`.
4. Haz clic derecho sobre el archivo subido y pulsa **Extraer (Extract)**.
5. ¡Listo! Abre tu dominio en el navegador (ej. `https://tudominio.com`).

**Opción B — Subida por FTP (FileZilla):**
1. Conecta FileZilla a tu servidor.
2. Abre la carpeta `public_html/` en el panel remoto.
3. Arrastra y sube todos los archivos que hay dentro de la carpeta local `dist_public_html/`.
4. ¡Listo! Todo quedará funcionando en producción con backend PHP y base de datos JSON local.

## Edición de textos, imágenes y mensajes del formulario
Los textos visibles se concentran en content_es.json y content_en.json, por lo que cualquier cambio editorial debe aplicarse en ambos archivos para conservar la experiencia bilingüe.
Las fichas de prótesis y los modos de agarre se mantienen en products.json y grips.json; conviene revisar que su estructura siga siendo coherente con lo que muestran las secciones correspondientes del frontend.
Las imágenes y fotografías deben colocarse dentro de frontend/public/assets/images, que es la ubicación prevista para todos los recursos visuales de la web.
Los mensajes enviados desde el formulario se guardan en messages.json, sin depender de una base de datos externa; por ello, ese archivo forma parte del funcionamiento cotidiano del backend PHP.
Al actualizar contenido, es recomendable comprobar que los textos nuevos mantengan el mismo tono y nivel de detalle en español e inglés, y que no se introduzcan referencias a datos que no existan en los archivos JSON.
Para producción, el paquete generado ya incluye Frontend, Backend PHP y las reglas de seguridad del hosting, de modo que las ediciones deben realizarse sobre el proyecto y no directamente sobre una copia publicada.
Si se modifican textos, fichas o imágenes, conviene revisar después la carpeta resultante del empaquetado para confirmar que los cambios están presentes antes de subirla.
La revisión final debe centrarse en la coherencia entre contenido, imágenes y datos técnicos mostrados al usuario, ya que el proyecto no usa una base de datos externa que centralice esas validaciones.
