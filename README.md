# TRAZO.DT — Plataforma Educativa y Visual de Dibujo Técnico

Sitio web educativo e interactivo dedicado al **Dibujo Técnico**, diseñado bajo una estética **Blueprint (Plano Técnico)** inspirada en tableros de dibujo profesional, láminas normalizadas y cajetines técnicos ISO.

El proyecto está construido íntegramente con **HTML5, CSS3 y JavaScript moderno (ES6+)** sin dependencias de compilación ni *frameworks* externos, permitiendo su ejecución directa en cualquier navegador web.

---

## 1. Identidad Visual y Diseño (UI/UX)

- **Estética Blueprint:** Papel técnico claro (`#F8FAFC`) con cuadrícula milimetrada sutil (`10px` menor / `50px` mayor), líneas estructurales en gris pizarra (`#334155`) y marcos con marcas de registro en las esquinas.
- **Paleta de colores:**
  - Fondo papel técnico: `#F8FAFC`
  - Superficie de láminas y tarjetas: `#FFFFFF`
  - Texto principal: `#0F172A`
  - Líneas estructurales: `#334155`
  - Acento cian técnico: `#0284C7`
  - Acento naranja ingeniería: `#EA580C`
- **Tipografía:**
  - `JetBrains Mono` para títulos, etiquetas técnicas, cotas, escalas y cajetines.
  - `Inter` para párrafos explicativos y lectura general.
- **Accesibilidad y Responsividad:**
  - Barra de navegación fija (*sticky navbar*) con logotipo geométrico SVG, indicador `ISO-E` y menú hamburguesa responsivo para dispositivos móviles.
  - Atributos ARIA (`role="tablist"`, `role="tabpanel"`, `role="dialog"`, `aria-modal`, `aria-pressed`, `aria-live`), navegación por teclado (`Escape`, `←`, `→`) y soporte para `prefers-reduced-motion`.

---

## 2. Arquitectura Multipágina y Segmentos

El sitio se organiza en **5 páginas dedicadas** interconectadas, además de parámetros de consulta (`query strings`) y anclas para acceder directamente a cada segmento:

| Página | Archivo | Propósito y Segmentos Incluidos | Parámetros / Anclas |
| :--- | :--- | :--- | :--- |
| **01 // Inicio** | `index.html` | Hero principal, tablero SVG animado e interactivo (*Ejes*, *Cotas*, *Redibujar*), los **3 Pilares del Dibujo Técnico** (*Precisión*, *Normalización*, *Representación Espacial*) y directorio visual de acceso a todas las secciones. | `#pilares`, `#explorar` |
| **02 // Galería** | `galeria.html` | Archivo de **8 láminas normalizadas** con filtros interactivos por categoría y **Modal Lightbox** con alternancia entre **Lámina multimedia** y **Esquema SVG**, control de cuadrícula y cajetín ISO completo. | `?cat=geometria`, `?cat=diedrico`, `?cat=isometrica`, `?cat=arquitectonicos` |
| **03 // Historia** | `historia.html` | **Línea de tiempo interactiva** y archivo cronológico detallado en 4 hitos: *Antigüedad*, *Renacimiento*, *Revolución Industrial* y *Era Moderna y Digital*. | `?era=0`, `?era=1`, `?era=2`, `?era=3`, `#archivo-historico` |
| **04 // Aplicaciones** | `aplicaciones.html` | **Pestañas interactivas** y panorama comparativo por especialidad: *Arquitectura y Urbanismo*, *Ingeniería Mecánica e Industrial*, *Ingeniería Civil* y *Diseño Electrónico y de Producto*. | `?tab=arquitectura`, `?tab=mecanica`, `?tab=civil`, `?tab=electronica`, `#comparativa-disciplinas` |
| **05 // Normativa** | `normativa.html` | Guía de referencia técnica: **Alfabeto de líneas** (`ISO 128-20`), **Formatos de papel serie A** (`ISO 5457` con diagrama proporcional √2) y **Estructura del cajetín** (`ISO 7200`). | `#tipos-linea`, `#formatos`, `#cajetin` |

---

## 3. Estructura de Archivos del Proyecto

```text
Proyecto dibujo tecnico/
├── index.html                          # Página principal (Inicio, tablero SVG animado, pilares y portal)
├── galeria.html                        # Galería de láminas con filtros y modal lightbox
├── historia.html                       # Línea de tiempo interactiva y archivo histórico por época
├── aplicaciones.html                   # Pestañas por disciplina y matriz comparativa
├── normativa.html                      # Referencia de tipos de línea, formatos ISO serie A y cajetín
├── styles.css                          # Sistema de diseño Blueprint, cuadrícula milimetrada y estilos responsivos
├── app.js                              # Catálogo de datos, diagramas SVG y controladores de UI
├── README.md                           # Documentación técnica del proyecto
└── img/                                # Recursos multimedia (17 láminas e ilustraciones)
    ├── lam-01-tangencias.jpg           # Geometría Descriptiva: Enlace de tangencias y empalmes
    ├── lam-02-geometria-descriptiva.jpg# Geometría Descriptiva: Sección plana y verdadera magnitud
    ├── lam-03-vistas-ortogonales.jpg   # Sistema Diédrico: Soporte mecánico ranurado (3 vistas)
    ├── lam-04-corte-brida.jpg          # Sistema Diédrico: Brida de acoplamiento — Corte A-A
    ├── lam-05-isometrica-bloque.jpg    # Perspectiva Isométrica: Bloque escalonado con chaflán
    ├── lam-06-valvula-explosiva.jpg    # Perspectiva Isométrica: Conjunto explosivo de válvula
    ├── lam-07-planta-arquitectonica.jpg# Planos Arquitectónicos: Vivienda modular (Escala 1:50)
    ├── lam-08-seccion-constructiva.svg # Planos Arquitectónicos: Sección constructiva A-A' (Escala 1:25)
    ├── hist-01-antiguedad.svg          # Historia: Antigüedad (Egipto, Mesopotamia y Grecia)
    ├── hist-02-renacimiento.jpg        # Historia: Renacimiento (Brunelleschi y Leonardo da Vinci)
    ├── hist-03-industrial.svg          # Historia: Revolución Industrial (Gaspard Monge)
    ├── hist-04-digital-cad.svg         # Historia: Era Moderna y Digital (ISO, CAD y BIM)
    ├── app-01-arquitectura.svg         # Aplicación: Arquitectura y Urbanismo
    ├── app-02-mecanica.svg             # Aplicación: Ingeniería Mecánica e Industrial
    ├── app-03-civil.svg                # Aplicación: Ingeniería Civil
    ├── app-04-electronica.svg          # Aplicación: Diseño Electrónico y de Producto
    └── norma-formatos-iso.svg          # Normativa: Diagrama proporcional de formatos A0–A5 (ISO 5457)
```

---

## 4. Arquitectura Técnica del Código

### `styles.css`
- **Variables CSS (`:root`):** Centraliza la paleta Blueprint, tipografías (`--font-mono`, `--font-sans`), radios y sombras.
- **Fondo milimetrado:** Generado mediante capas `linear-gradient` en `body` (`50px` para líneas mayores y `10px` para líneas menores).
- **Animación vectorial:** Las clases `.hero-svg.is-animating .draw-line` animan `stroke-dashoffset` progresivamente con retardos escalonados (`.delay-1` a `.delay-4`) para simular el trazado en tiempo real.

### `app.js`
Organizado en cuatro bloques principales sin dependencias externas:
1. **`PLATES_DATA`:** Arreglo de 8 láminas con metadatos normalizados (`id`, `category`, `title`, `scale`, `format`, `projection`, `normative`, `instruments`, `dimensioning`, `image` y esquema `svg`).
2. **`HISTORY_ERAS`:** Arreglo cronológico de 4 hitos con descripción, hitos clave, imagen y pie de figura.
3. **`APPLICATIONS_DATA`:** Diccionario por disciplina (`arquitectura`, `mecanica`, `civil`, `electronica`) con estándares, escalas habituales, entregables e ilustración técnica.
4. **Controladores de UI:**
   - `initMobileNav()`: Gestión accesible del menú hamburguesa móvil.
   - `initScrollSpy()`: Resaltado automático de sección activa con `IntersectionObserver`.
   - `initHeroBoard()`: Controles interactivos de capas (*Ejes*, *Cotas*) y reinicio de animación (*Redibujar*).
   - `initGalleryAndModal()`: Filtrado reactivo por categoría, lectura de `?cat=`, renderizado de tarjetas y modal lightbox con cambio de vista (*Lámina* / *Esquema SVG*), alternancia de cuadrícula y navegación por teclado.
   - `initTimeline()`: Control de línea de tiempo, lectura de `?era=` y generación del archivo completo de épocas.
   - `initApplicationsTabs()`: Control de pestañas con soporte de teclado (`ArrowLeft` / `ArrowRight`), lectura de `?tab=` y generación de la comparativa por especialidad.

---

## 5. Normativas Técnicas Cubiertas

- **ISO 128 / UNE-EN ISO 128:** Principios generales de representación, tipos de línea (A, B, E/F, G, H), cortes y rayados.
- **ISO 129-1:** Principios generales de acotación e indicaciones dimensionales.
- **ISO 5456:** Métodos de proyección ortogonal (Primer Diedro `ISO-E`) y axonométrica isométrica.
- **ISO 5457:** Formatos de papel serie A (`A0` a `A5`) y disposición de márgenes.
- **ISO 7200:** Campos de datos en cuadros de rotulación (cajetín técnico).
- **ISO 1101 / ISO 286 / ISO 2203:** Tolerancias geométricas (GD&T), ajustes y representación de engranajes.
- **ISO 7519 / ISO 19650:** Dibujos de construcción, arquitectura y modelado BIM.
- **IEC 60617 / IPC-2221:** Simbología gráfica eléctrica/electrónica y diseño de placas PCB.

---

## 6. Ejecución Local

No requiere instalación de paquetes ni servidor obligatorio:

1. Clona o descarga el repositorio.
2. Abre directamente `index.html` en tu navegador web favorito (Chrome, Edge, Firefox, Safari).
3. *(Opcional)* Si prefieres servirlo mediante HTTP local, puedes usar cualquier servidor estático desde la raíz del proyecto, por ejemplo:
   ```bash
   python -m http.server 8080
   ```
   y abrir `http://localhost:8080`.
