# pro-stasis-web

Web corporativa de **NEXO Robotics** — *Tecnología que devuelve posibilidades*.

Sitio estático de una sola página para una empresa de prótesis robóticas y exoesqueletos (La Palma, Islas Canarias). El contenido original se reorganizó en una estructura modular **sin alterar su funcionalidad**: el diseño, las interacciones y el contenido son comparables byte a byte con el archivo original (ver [Checklist QA](#checklist-qa)).

---

## Stack

| Capa | Tecnología | Dónde vive |
|---|---|---|
| Marcado | HTML5 semántico | `src/partials/` (parciales) + `src/index.template.html` |
| Estilos | Tailwind CSS v3 (CDN Play) + CSS propio | HTML (clases utilitarias) + `src/styles/main.css` |
| Configuración de Tailwind | Objeto `tailwind.config` | `src/config/tailwind.config.js` |
| Iconografía | Lucide (CDN) | `<i data-lucide="...">` en parciales |
| Interacción | JavaScript clásico (sin frameworks) | `src/scripts/*.js` |
| Build | Node puro, **0 dependencias** | `tools/build.js` |

## Estructura del proyecto

```
pro-stasis-web/
├── index.html                  ← GENERADO por tools/build.js (no editar a mano)
├── package.json
├── README.md
├── .gitignore
│
├── src/
│   ├── index.template.html     ← esqueleto con directivas @@include
│   ├── partials/
│   │   ├── head.html           ← <head> completo (meta, fuentes, CDNs, link CSS)
│   │   ├── header.html         ← barra de navegación fija
│   │   ├── hero.html           ← #inicio (incluye tarjetas métricas 01/02/03)
│   │   ├── technology.html     ← #tecnologia
│   │   ├── products.html       ← #productos + #exoesqueletos (mismo <section>)
│   │   ├── about.html          ← #empresa + equipo (mismo <section>)
│   │   ├── collaboration.html  ← #colaboracion
│   │   ├── impact.html         ← #impacto
│   │   ├── roadmap.html        ← #roadmap
│   │   ├── gallery.html        ← galería
│   │   ├── contact.html        ← #contacto + formulario
│   │   ├── footer.html         ← pie de página
│   │   └── scripts.html        ← referencias a los scripts externos
│   ├── styles/
│   │   └── main.css            ← tech-grid, hud-line, glow, scrollbar…
│   ├── scripts/
│   │   ├── main.js             ← lucide.createIcons()
│   │   ├── grip-selector.js    ← setGrip() — selector de patrones de agarre
│   │   └── contact-form.js     ← handleContactSubmit() — formulario de contacto
│   └── config/
│       └── tailwind.config.js  ← paleta brand + fuentes (objeto tal cual)
│
├── tools/
│   └── build.js                ← ensambla template + partiales → index.html
│
└── docs/
    └── original-v1.html        ← copia del archivo único original (referencia QA)
```

## Uso

Requisitos: Node.js ≥ 18 (para el build) y un navegador moderno.

```bash
# Regenerar index.html a partir de src/
npm run build          # equivalente a: node tools/build.js

# Servir en local (opcional)
npx serve .
```

Después de editar cualquier archivo de `src/`, ejecuta `npm run build` y recarga el navegador. **El flujo de trabajo consiste en editar `src/` y nunca `index.html`** (es un artefacto generado y está en `.gitignore`).

> Los CDNs (Tailwind Play, Lucide, Google Fonts) requieren conexión a internet.

## Convenciones

Son las reglas que este proyecto se impone a sí mismo. Si surge una excepción, se documenta aquí.

### Archivos y carpetas

- Nombres en `kebab-case`: `grip-selector.js`, `index.template.html`.
- Un parcial `<nombre>.html` toma su nombre del `id` de ancla de la sección que contiene (`hero.html` ↔ `#inicio`, `technology.html` ↔ `#tecnologia`, …).
- Los nombres de archivo van en singular e intentan describir el contenido, no la forma.

### HTML

- **1 parcial = 1 `<section>` de nivel superior** (o `header`/`footer` del documento).
- Los sub-bloques internos **no** se extraen a otro parcial para no romper el flujo del documento (p. ej. `#exoesqueletos` vive dentro de `products.html` porque comparte el contenedor).
- Los parciales **nunca** contienen `<html>`, `<body>` ni estructura del documento: eso lo posee `src/index.template.html`.
- Cada parcial se abre y cierra con los comentarios `<!-- BEGIN: Nombre -->` / `<!-- END: Nombre -->` heredados del original: son el límite natural de cada módulo.
- Se preservan siempre: `data-purpose` (marcadores semánticos), todos los `id` de ancla y los atributos `aria-label` de los enlaces de solo icono.
- El formato del marcado (indentación heredada) se respeta tal cual; se normaliza solo al editar un parcial por primera vez y sin mezclar el cambio de formato con cambios de contenido.

### Plantilla y build

- `index.html` se genera y **no se edita nunca a mano**: es resultado de `src/index.template.html`.
- Las directivas de inclusión son una única línea de la forma `@@include <ruta>` (1 por línea, rutas relativas a la raíz del repo). El build **falla con error** si falta un parcial o queda una directiva sin resolver.
- El orden de inclusión en la plantilla debe reflejar el orden visual del documento.

### CSS

- Todo CSS propio vive en `src/styles/`; se carga con `<link>` desde `head.html`.
- Los bloques se delimitan con comentarios `/* == Nombre del bloque == */`.
- Cualquier estilo nuevo se añade al final, en su propio bloque, sin tocar los existentes.

### Tailwind

- Colores, tipografías y `darkMode` se definen **solo** en `src/config/tailwind.config.js` (paleta `brand`).
- Las clases arbitrarias que ya existen (`bg-[#070709]/85`, `blur-[130px]`, …) se copian tal cual: no se refactorizan a tokens mientras el build dependa del CDN Play.
- El script de configuración debe cargarse inmediatamente después del CDN de Tailwind, en `<head>`, como objeto global (`tailwind.config = {...}`).

### JavaScript

- Scripts clásicos (no módulos): las invocaciones llegan por atributos (`onclick`, `onsubmit`) y por el CDN de Lucide, así que el orden y el punto de ejecución de los `<script>` emulan exactamente los del archivo original (al final de `<body>`, sin `defer` ni `async`).
- **1 archivo = 1 funcionalidad**, y el archivo lo declara con un comentario de cabecera.
- Las funciones que se invocan desde atributos HTML se exponen explícitamente: `window.nombreFuncion = nombreFuncion;` al final del archivo (declaración redundante pero deliberada: hace visible la interfaz global).
- No se introducen frameworks ni bundlers; cualquier dependencia nueva debe justificarse en este README.

### Iconos

- Se usan `<i data-lucide="nombre-icono">` en los parciales; Lucide los reemplaza por `<svg>` en runtime vía `lucide.createIcons()` (`src/scripts/main.js`).
- Si un icono desaparece de la librería (p. ej. `linkedin`, `youtube`, `instagram` deprecados en builds recientes) se conserva su marcado original: se documentó el pendiente, pero corregirlo entra por el flujo normal de issues, no como hotfix silencioso.

### Idioma

- Contenido y comentarios de código: **español**.
- `README.md`: español.

### Git

- Commits con **Conventional Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- Los cambios de contenido visual/funcional nunca se mezclan en un commit con reorganización arbitraria de archivos.

## Checklist QA

Comprobaciones recursivas tras cualquier cambio (automatizable con Playwright o manual con el navegador):

| # | Comprobación | Resultado esperado |
|---|---|---|
| 1 | `npm run build` sin errores | `index.html generado correctamente.` |
| 2 | Cargar `index.html` | Fondo `#070709`, tipografía Space Grotesk en el `h1` |
| 3 | Iconografía | 53 iconos Lucide renderizados; solo `linkedin`/`youtube`/`instagram` quedan pendientes (deprecados upstream, igual que en el original) |
| 4 | Selector de agarres | Los 5 botones actualizan `#grip-name` y `#grip-desc` |
| 5 | Formulario | Al enviar con campos válidos: `#form-feedback` visible y campos vacíos |
| 6 | Anclas | Existen: `inicio`, `tecnologia`, `productos`, `exoesqueletos`, `empresa`, `colaboracion`, `impacto`, `roadmap`, `contacto` |

Última verificación completa: ejecutada con Playwright contra `docs/original-v1.html` e `index.html` — resultados idénticos en ambos.

## Licencia

© 2025 NEXO Robotics. Todos los derechos reservados. (TODO: definir licencia si el proyecto se publica.)

## Preguntas frecuentes y criterios de mantenimiento

¿Por qué no debo editar index.html? Porque es un artefacto generado a partir de src y está en .gitignore; los cambios deben realizarse en los parciales, estilos, scripts o configuración y después regenerarlo.

¿Qué ocurre si falta un parcial o queda una directiva sin resolver? El build falla con error, así que conviene revisar las rutas relativas y el orden de inclusión definido en la plantilla.

¿Cómo se mantiene la equivalencia con el sitio original? Se conservan los id de ancla, los atributos data-purpose y los aria-label de enlaces de solo icono; docs/original-v1.html sirve como referencia para las comprobaciones.

¿Puedo dividir un sub-bloque en otro parcial? No por defecto: cada parcial equivale a una sección superior y los sub-bloques que comparten contenedor permanecen juntos para no romper el flujo del documento.

¿Qué revisar tras un cambio? Ejecutar el build y repetir el checklist QA; recordar que los CDNs requieren conexión y que ciertos iconos pueden quedar pendientes si están deprecados upstream.

¿Se pueden añadir dependencias? No se introducen frameworks ni bundlers sin justificarlo en este README; el build actual usa Node puro y cero dependencias, y toda excepción a las convenciones debe quedar documentada aquí.
