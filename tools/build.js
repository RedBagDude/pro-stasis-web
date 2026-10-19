/**
 * tools/build.js — ensambla el sitio.
 * Lee src/index.template.html, sustituye cada directiva `@@include <ruta>`
 * por el contenido del parcial referenciado y escribe el index.html final.
 * Node puro, sin dependencias.
 *
 * Uso: node tools/build.js   (o npm run build)
 */
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const templatePath = path.join(root, 'src', 'index.template.html');
const template = fs.readFileSync(templatePath, 'utf8');

const output = template.replace(/^@@include (.+?)\s*$/gm, (directive, rel) => {
  const partialPath = path.join(root, rel);
  if (!fs.existsSync(partialPath)) {
    throw new Error(`Parcial no encontrado: ${rel} (directiva: ${directive})`);
  }
  return fs.readFileSync(partialPath, 'utf8').replace(/\r\n/g, '\n').replace(/\s+$/, '');
});

if (output.includes('@@include ')) {
  throw new Error('Directivas @@include sin resolver en la plantilla.');
}

fs.writeFileSync(path.join(root, 'index.html'), output, 'utf8');
console.log('index.html generado correctamente.');
