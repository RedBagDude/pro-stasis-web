# Backend API en PHP para Pro-Stasis

Este backend está diseñado específicamente para alojarse en servidores web compartidos (cPanel, Plesk, Apache, Nginx, Hostinger, Siteground, IONOS, etc.) donde únicamente se admite **PHP** y no Node.js.

## Características

- **Sin base de datos externa:** Guarda todos los mensajes de contacto en `api/data/messages.json`.
- **Seguro:** La carpeta `data/` cuenta con un `.htaccess` que impide que nadie pueda descargar los mensajes desde un navegador.
- **Doble compatibilidad de URLs:**
  - Si el servidor tiene `mod_rewrite` activo: `POST /api/contact`, `GET /api/health`, etc.
  - Si no tiene reescritura: `POST /api/contact.php`, `GET /api/health.php`, etc.

## Estructura para subir al Hosting

En tu hosting (normalmente dentro de la carpeta `public_html/`), la estructura debe quedar así:

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

En el Administrador de Archivos de tu cPanel o por FTP:
- La carpeta `api/data/` debe tener permisos de escritura (`755` o `775`).
- El archivo `api/data/messages.json` debe tener permisos de escritura (`644` o `664`).

## Notas de mantenimiento y recomendaciones de uso

Cada vez que se regenere la web Angular conviene volver a copiar los archivos compilados a la raíz del hosting (index.html, estilos, javascript y assets) sin mover la carpeta api de su ubicación, ya que el enrutador y los endpoints dependen de esa estructura para responder.

Los mensajes de contacto se acumulan en messages.json, por lo que es recomendable revisarlos y vaciarlos periódicamente; ese archivo debe permanecer siempre dentro de data/ para que el .htaccess siga impidiendo su descarga desde el navegador.

Si la API deja de responder después de una subida o migración, revisa primero los permisos de escritura de la carpeta data y del archivo de mensajes, porque sin ellos el backend no puede guardar los envíos del formulario.

La doble compatibilidad de rutas permite usar la API tanto en servidores con reescritura activa como en los que no la tienen; en este segundo caso basta con apuntar a los endpoints directos terminados en .php, que ofrecen las mismas respuestas.

Al trasladar el proyecto a otro hosting, sube juntos el enrutador principal, los endpoints directos y los archivos de datos, y verifica luego que el formulario de contacto y el resto de rutas respondan correctamente.
