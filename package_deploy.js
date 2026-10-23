const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const frontendDir = path.join(rootDir, 'frontend');
const distBrowserDir = path.join(frontendDir, 'dist', 'frontend', 'browser');
const backendApiDir = path.join(rootDir, 'backend-php', 'api');
const targetDeployDir = path.join(rootDir, 'dist_public_html');
const zipFile = path.join(rootDir, 'dist_public_html.zip');

console.log('1/4 Compilando frontend Angular en producción...');
execSync('npm.cmd run build', { cwd: frontendDir, stdio: 'inherit' });

console.log('\n2/4 Preparando carpeta lista para producción (dist_public_html)...');
if (fs.existsSync(targetDeployDir)) {
  fs.rmSync(targetDeployDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDeployDir, { recursive: true });

// Copiar todo el frontend compilado (browser)
fs.cpSync(distBrowserDir, targetDeployDir, { recursive: true });

// Copiar .htaccess raíz para soporte SPA en Apache/cPanel
const rootHtaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. No interferir con las peticiones a la API en PHP
  RewriteRule ^api/ - [L]

  # 2. Si el archivo o carpeta existe físicamente (imágenes, js, css, etc.), servirlo
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # 3. Cualquier otra ruta redirigirla a index.html (SPA de Angular)
  RewriteRule ^ index.html [L]
</IfModule>
`;
fs.writeFileSync(path.join(targetDeployDir, '.htaccess'), rootHtaccess, 'utf8');

// Copiar backend-php/api dentro de dist_public_html/api
const targetApiDir = path.join(targetDeployDir, 'api');
fs.cpSync(backendApiDir, targetApiDir, { recursive: true });

// Asegurar permisos en mensajes.json inicial
const messagesJson = path.join(targetApiDir, 'data', 'messages.json');
if (!fs.existsSync(messagesJson)) {
  fs.writeFileSync(messagesJson, '[]', 'utf8');
}

console.log('\n3/4 Generando archivo ZIP para subir en 1 clic (dist_public_html.zip)...');
if (fs.existsSync(zipFile)) {
  fs.rmSync(zipFile, { force: true });
}
try {
  // Comprimir con PowerShell de forma nativa en Windows
  execSync(`powershell -Command "Compress-Archive -Path '${targetDeployDir}\\*' -DestinationPath '${zipFile}' -Force"`, { stdio: 'inherit' });
  console.log(`✓ Archivo ZIP generado con éxito: ${zipFile}`);
} catch (e) {
  console.log('! No se pudo generar el zip automáticamente, pero la carpeta dist_public_html/ está 100% lista.');
}

console.log('\n4/4 ¡Listo para subir!');
console.log('------------------------------------------------------------');
console.log('Tienes dos formas sencillas de subirlo a tu hosting:');
console.log('A) Subir el archivo dist_public_html.zip a public_html/ en tu cPanel y pulsar "Extraer".');
console.log('B) O copiar el contenido de la carpeta dist_public_html/ a public_html/ vía FTP (FileZilla).');
console.log('------------------------------------------------------------\n');
