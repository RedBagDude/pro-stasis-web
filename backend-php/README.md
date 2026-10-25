# Backend API en PHP para Pro-Stasis

Este backend está diseñado específicamente para alojarse en servidores web compartidos (cPanel, Plesk, Apache, Nginx, Hostinger, SiteGround, IONOS, etc.), donde solo se admite **PHP** y no Node.js.

## Características

- **Sin base de datos externa:** Guarda todos los mensajes de contacto en `api/data/messages.json`.
- **Seguro:** La carpeta `data/` incluye un archivo `.htaccess` que impide descargar los mensajes desde un navegador.
- **Doble compatibilidad de URLs:**
  - Si el servidor tiene `mod_rewrite` activo: `POST /api/contact`, `GET /api/health`, etc.
  - Si no tiene reescritura de URLs: `POST /api/contact.php`, `GET /api/health.php`, etc.

## Estructura para subir al hosting

En tu hosting (normalmente dentro de la carpeta `public_html/`), la estructura debe quedar de la siguiente manera:

```
public_html/
├── index.html                 <-- La web Angular compilada (dist/frontend/browser/index.html)
├── styles-XXXX.css            <-- Estilos de Angular
├── main-XXXX.js               <-- Javascript de Angular
├── assets/                    <-- Imágenes de Pro-Stasis
└── api/                       <-- La carpeta que está aquí en backend-php/api/
    ├── index.php              <-- Enrutador principal de la API
    ├── .htaccess              <-- Reescritura de URLs para Apache
    ├── contact.php            <-- Endpoint directo de contacto
    ├── health.php             <-- Endpoint directo de salud
    ├── products.php           <-- Endpoint directo de productos
    ├── grips.php              <-- Endpoint directo de patrones de agarre
    └── data/
        ├── .htaccess          <-- Protección de seguridad
        ├── messages.json      <-- Mensajes guardados (Darle permisos 0664 o 0775 en cPanel)
        ├── products.json      <-- Ficha técnica de productos
        └── grips.json         <-- Ficha técnica de agarres
```

## Permisos requeridos en el servidor

Desde el Administrador de archivos de cPanel o por FTP:

- La carpeta `api/data/` debe tener permisos de escritura (`755` o `775`).
- El archivo `api/data/messages.json` debe tener permisos de escritura (`644` o `664`).