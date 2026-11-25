/**
 * ============================================================================
 * TRAZO // DIBUJO TÉCNICO — LÓGICA INTERACTIVA Y DIAGRAMAS SVG
 * Módulos:
 *   1. Datos de láminas técnicas (Galería + Modal Lightbox)
 *   2. Datos cronológicos (Línea de tiempo de la Historia del Dibujo Técnico)
 *   3. Datos de disciplinas (Pestañas de Aplicaciones Reales)
 *   4. Controladores de UI: Navbar móvil, Scroll-Spy, Tablero Hero, Filtros, Modal
 * ============================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. CATÁLOGO DE LÁMINAS TÉCNICAS (8 LÁMINAS EN 4 CATEGORÍAS)
   -------------------------------------------------------------------------- */
const CATEGORY_LABELS = {
  geometria: 'Geometría Descriptiva',
  diedrico: 'Vistas Ortogonales (Sistema Diédrico)',
  isometrica: 'Perspectiva Isométrica',
  arquitectonicos: 'Planos Arquitectónicos',
};

const PLATES_DATA = [
  {
    id: 'LAM-01',
    image: 'img/lam-01-tangencias.jpg',
    category: 'geometria',
    title: 'Enlace de Tangencias y Empalmes',
    scale: 'Escala 1:1',
    format: 'UNE A4',
    projection: 'Plano 2D',
    description:
      'Construcción geométrica de arcos tangentes exteriores e interiores entre circunferencias de distinto radio mediante lugares geométricos.',
    normative: 'ISO 128-20 (Líneas auxiliares tipo B y ejes tipo G) / UNE 1032.',
    instruments: 'Compás de precisión con adaptador, regla milimetrada, escuadra y cartabón, estilógrafos 0.2 / 0.5 mm.',
    dimensioning: 'Acotación radial normalizada (R32, R18, R45), distancia entre centros (84.0 mm) y puntos de tangencia T1–T4.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de tangencias entre circunferencias">
        <defs>
          <marker id="m1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 2 L9 5 L0 8 z" fill="#0284C7"/>
          </marker>
        </defs>
        <!-- Ejes de centros -->
        <g stroke="#EA580C" stroke-width="1" stroke-dasharray="10 3 2 3">
          <line x1="40" y1="145" x2="320" y2="145"/>
          <line x1="110" y1="55" x2="110" y2="220"/>
          <line x1="250" y1="65" x2="250" y2="220"/>
        </g>
        <!-- Construcciones auxiliares (arcos de suma/resta de radios) -->
        <g fill="none" stroke="#94A3B8" stroke-width="0.9" stroke-dasharray="4 3">
          <circle cx="110" cy="145" r="76"/>
          <circle cx="250" cy="145" r="64"/>
          <line x1="110" y1="145" x2="180" y2="79"/>
          <line x1="250" y1="145" x2="180" y2="79"/>
        </g>
        <!-- Circunferencias principales y arco de enlace -->
        <circle cx="110" cy="145" r="46" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="2.2"/>
        <circle cx="250" cy="145" r="34" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="2.2"/>
        <path d="M 137 108 A 56 56 0 0 1 224 122" fill="none" stroke="#0284C7" stroke-width="2.4"/>
        <path d="M 110 191 L 250 179" fill="none" stroke="#0F172A" stroke-width="2"/>
        <!-- Puntos de tangencia -->
        <g fill="#EA580C">
          <circle cx="180" cy="79" r="3"/>
          <circle cx="137" cy="108" r="3.2"/>
          <circle cx="224" cy="122" r="3.2"/>
        </g>
        <!-- Cotas -->
        <line x1="110" y1="205" x2="250" y2="205" stroke="#0284C7" stroke-width="1.1" marker-start="url(#m1)" marker-end="url(#m1)"/>
        <rect x="163" y="197" width="34" height="14" fill="#FFFFFF"/>
        <text x="180" y="207" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="600">84.0</text>
        <text x="66" y="96" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0F172A">R32</text>
        <text x="275" y="106" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0F172A">R24</text>
        <text x="172" y="68" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#EA580C">O3 (R56)</text>
        <text x="122" y="102" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155">T1</text>
        <text x="228" y="116" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155">T2</text>
      </svg>
    `,
  },
  {
    id: 'LAM-02',
    image: 'img/lam-02-geometria-descriptiva.jpg',
    category: 'geometria',
    title: 'Sección Plana y Verdadera Magnitud',
    scale: 'Escala 1:2',
    format: 'UNE A3',
    projection: 'Sistema Diédrico',
    description:
      'Determinación de la sección producida por un plano proyectante vertical sobre una pirámide recta y su abatimiento sobre el plano horizontal.',
    normative: 'ISO 5456-2 (Representaciones ortográficas) / Convenio de línea de tierra.',
    instruments: 'Juego de escuadras (45°/60°), compás de bigotera, portaminas 2H y HB.',
    dimensioning: 'Trazas del plano (α₁, α₂), ángulos de pendiente (42°), proyección vertical/horizontal y polígono abatido (VM).',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometría descriptiva: sección plana de pirámide">
        <!-- Línea de tierra LT -->
        <line x1="25" y1="130" x2="335" y2="130" stroke="#0F172A" stroke-width="1.8"/>
        <line x1="30" y1="134" x2="46" y2="134" stroke="#0F172A" stroke-width="1.5"/>
        <line x1="314" y1="134" x2="330" y2="134" stroke="#0F172A" stroke-width="1.5"/>
        <text x="24" y="124" font-family="JetBrains Mono, monospace" font-size="9" fill="#334155">L</text>
        <text x="326" y="124" font-family="JetBrains Mono, monospace" font-size="9" fill="#334155">T</text>

        <!-- Alzado pirámide (sobre LT) -->
        <polygon points="75,130 155,130 115,42" fill="none" stroke="#0F172A" stroke-width="2"/>
        <line x1="115" y1="42" x2="115" y2="130" stroke="#EA580C" stroke-width="1" stroke-dasharray="8 3 2 3"/>

        <!-- Planta pirámide (bajo LT) -->
        <rect x="75" y="160" width="80" height="72" fill="none" stroke="#0F172A" stroke-width="1.8"/>
        <line x1="75" y1="160" x2="155" y2="232" stroke="#334155" stroke-width="1.2"/>
        <line x1="155" y1="160" x2="75" y2="232" stroke="#334155" stroke-width="1.2"/>

        <!-- Plano proyectante α2 y α1 -->
        <line x1="60" y1="112" x2="175" y2="55" stroke="#0284C7" stroke-width="1.8"/>
        <line x1="60" y1="112" x2="60" y2="245" stroke="#0284C7" stroke-width="1.4" stroke-dasharray="5 3"/>
        <text x="172" y="52" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="700">α₂</text>
        <text x="44" y="242" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="700">α₁</text>

        <!-- Proyectantes verticales y sección en planta -->
        <g stroke="#94A3B8" stroke-width="0.9" stroke-dasharray="3 3">
          <line x1="91" y1="97" x2="91" y2="217"/>
          <line x1="138" y1="73" x2="138" y2="213"/>
        </g>
        <polygon points="91,175 138,181 138,213 91,217" fill="rgba(234,88,12,0.16)" stroke="#EA580C" stroke-width="1.8"/>

        <!-- Abatimiento a Verdadera Magnitud (derecha) -->
        <path d="M 138 73 A 90 90 0 0 1 235 130" fill="none" stroke="#0284C7" stroke-width="1" stroke-dasharray="4 3"/>
        <line x1="235" y1="130" x2="235" y2="213" stroke="#94A3B8" stroke-width="0.9" stroke-dasharray="3 3"/>
        <polygon points="215,172 280,172 280,218 215,218" fill="rgba(2,132,199,0.12)" stroke="#0284C7" stroke-width="2"/>
        <text x="247" y="198" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0284C7" font-weight="700">V.M.</text>
        <text x="248" y="162" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155">SECCIÓN ABATIDA</text>
      </svg>
    `,
  },
  {
    id: 'LAM-03',
    image: 'img/lam-03-vistas-ortogonales.jpg',
    category: 'diedrico',
    title: 'Soporte Mecánico Ranurado (3 Vistas)',
    scale: 'Escala 1:1',
    format: 'UNE A3',
    projection: 'ISO-E (1.er Diedro)',
    description:
      'Representación diédrica completa (Alzado, Planta y Perfil Izquierdo) de un soporte industrial con taladro pasante y aristas ocultas.',
    normative: 'ISO 128-30 (Vistas básicas) e ISO 5456-2 (Proyección europea).',
    instruments: 'Escuadra, cartabón, escalímetro 1:1, lápices calibrados 0.3 / 0.5 / 0.7 mm.',
    dimensioning: 'Acotación en paralelo desde plano de referencia base: largo 90 mm, alto 64 mm, Ø20 pasante y nervio de 12 mm.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vistas ortogonales de soporte mecánico">
        <!-- Ejes de cuadrantes diédricos -->
        <line x1="200" y1="15" x2="200" y2="245" stroke="#94A3B8" stroke-width="0.9"/>
        <line x1="20" y1="135" x2="340" y2="135" stroke="#94A3B8" stroke-width="0.9"/>
        <!-- Línea de 45° para abatimiento de perfil -->
        <line x1="200" y1="135" x2="295" y2="230" stroke="#0284C7" stroke-width="1" stroke-dasharray="4 3"/>

        <!-- ALZADO (superior izquierda) -->
        <g transform="translate(50, 34)">
          <path d="M 0 80 L 0 48 L 42 48 L 42 10 L 116 10 L 116 80 Z" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="2"/>
          <!-- Taladro oculto en alzado -->
          <line x1="68" y1="10" x2="68" y2="48" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="90" y1="10" x2="90" y2="48" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="79" y1="2" x2="79" y2="56" stroke="#EA580C" stroke-width="1" stroke-dasharray="8 2 2 2"/>
          <text x="58" y="-6" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7" font-weight="600">ALZADO</text>
        </g>

        <!-- PERFIL IZQUIERDO (superior derecha) -->
        <g transform="translate(226, 34)">
          <rect x="0" y="10" width="66" height="70" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="2"/>
          <line x1="0" y1="48" x2="66" y2="48" stroke="#0F172A" stroke-width="1.6"/>
          <line x1="22" y1="10" x2="22" y2="48" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="44" y1="10" x2="44" y2="48" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="33" y1="2" x2="33" y2="86" stroke="#EA580C" stroke-width="1" stroke-dasharray="8 2 2 2"/>
          <text x="33" y="-6" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7" font-weight="600">PERFIL IZQ.</text>
        </g>

        <!-- PLANTA (inferior izquierda) -->
        <g transform="translate(50, 156)">
          <rect x="0" y="0" width="116" height="66" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="2"/>
          <line x1="42" y1="0" x2="42" y2="66" stroke="#0F172A" stroke-width="1.6"/>
          <circle cx="79" cy="33" r="11" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="62" y1="33" x2="96" y2="33" stroke="#EA580C" stroke-width="1" stroke-dasharray="6 2 2 2"/>
          <line x1="79" y1="16" x2="79" y2="50" stroke="#EA580C" stroke-width="1" stroke-dasharray="6 2 2 2"/>
          <text x="58" y="82" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7" font-weight="600">PLANTA</text>
        </g>
      </svg>
    `,
  },
  {
    id: 'LAM-04',
    image: 'img/lam-04-corte-brida.jpg',
    category: 'diedrico',
    title: 'Brida de Acoplamiento — Corte A-A',
    scale: 'Escala 2:1',
    format: 'UNE A3',
    projection: 'ISO-E + Corte Total',
    description:
      'Plano de taller de una brida cilíndrica con vista frontal y sección longitudinal A-A con rayado normalizado a 45°.',
    normative: 'ISO 128-40 (Cortes y secciones) e ISO 128-50 (Rayado de materiales metálicos).',
    instruments: 'Compás de precisión, plantilla de círculos, rayador paralelo, estilógrafo 0.35 / 0.7 mm.',
    dimensioning: 'Cotas funcionales de diámetro (Ø80, Ø52, Ø24 H7), círculo primitivo de 4 taladros Ø10 y tolerancia superficial Ra 1.6.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Brida mecánica con corte longitudinal A-A">
        <defs>
          <pattern id="hatch-lam04" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#0284C7" stroke-width="1.1"/>
          </pattern>
        </defs>
        <!-- Vista frontal izquierda -->
        <g transform="translate(95, 130)">
          <circle cx="0" cy="0" r="66" fill="none" stroke="#0F172A" stroke-width="2.1"/>
          <circle cx="0" cy="0" r="46" fill="none" stroke="#EA580C" stroke-width="1.1" stroke-dasharray="8 3 2 3"/>
          <circle cx="0" cy="0" r="24" fill="rgba(2,132,199,0.06)" stroke="#0F172A" stroke-width="1.8"/>
          <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
          <!-- 4 taladros -->
          <circle cx="0" cy="-46" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <circle cx="0" cy="46" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <circle cx="-46" cy="0" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <circle cx="46" cy="0" r="6" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <!-- Plano de corte A-A -->
          <line x1="0" y1="-82" x2="0" y2="82" stroke="#EA580C" stroke-width="1.4" stroke-dasharray="10 3 2 3"/>
          <text x="-12" y="-76" font-family="JetBrains Mono, monospace" font-size="10" fill="#EA580C" font-weight="700">A</text>
          <text x="-12" y="84" font-family="JetBrains Mono, monospace" font-size="10" fill="#EA580C" font-weight="700">A</text>
        </g>

        <!-- Corte A-A derecha -->
        <g transform="translate(225, 64)">
          <!-- Parte superior maciza rayada -->
          <polygon points="0,0 24,0 24,42 54,42 54,52 0,52" fill="url(#hatch-lam04)" stroke="#0F172A" stroke-width="2"/>
          <!-- Parte inferior maciza rayada -->
          <polygon points="0,80 54,80 54,90 24,90 24,132 0,132" fill="url(#hatch-lam04)" stroke="#0F172A" stroke-width="2"/>
          <!-- Taladros en brida -->
          <rect x="0" y="14" width="24" height="12" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <rect x="0" y="106" width="24" height="12" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <!-- Agujero central pasante -->
          <line x1="0" y1="52" x2="0" y2="80" stroke="#0F172A" stroke-width="1.4"/>
          <line x1="54" y1="52" x2="54" y2="80" stroke="#0F172A" stroke-width="1.4"/>
          <!-- Eje central -->
          <line x1="-14" y1="66" x2="72" y2="66" stroke="#EA580C" stroke-width="1.1" stroke-dasharray="9 3 2 3"/>
          <text x="27" y="-12" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0284C7" font-weight="700">CORTE A-A</text>
          <text x="64" y="69" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0F172A">Ø24 H7</text>
        </g>
      </svg>
    `,
  },
  {
    id: 'LAM-05',
    image: 'img/lam-05-isometrica-bloque.jpg',
    category: 'isometrica',
    title: 'Bloque Escalonado con Chaflán',
    scale: 'Escala 1:1',
    format: 'UNE A4',
    projection: 'Axonométrica Isométrica',
    description:
      'Construcción en perspectiva isométrica (ejes a 120°) con plano inclinado en chaflán y elipse isométrica inscrita en rombo de referencia.',
    normative: 'ISO 5456-3 (Representación axonométrica isométrica sin coeficiente de reducción).',
    instruments: 'Cartabón de 30°/60°, plantilla de elipses isométricas (35°16′), portaminas 0.5 mm.',
    dimensioning: 'Cotas alineadas paralelas a los ejes X, Y, Z: base 80×60 mm, altura 55 mm y chaflán de 25×25 mm.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perspectiva isométrica de bloque escalonado">
        <!-- Ejes isométricos -->
        <g stroke="#94A3B8" stroke-width="0.9" stroke-dasharray="5 3">
          <line x1="180" y1="210" x2="180" y2="30"/>
          <line x1="180" y1="210" x2="310" y2="135"/>
          <line x1="180" y1="210" x2="50" y2="135"/>
        </g>
        <!-- Caras con sombreado técnico -->
        <polygon points="180,210 278,154 278,105 242,84 180,120" fill="rgba(2,132,199,0.09)"/>
        <polygon points="180,210 92,159 92,110 180,161" fill="rgba(15,23,42,0.06)"/>
        <polygon points="180,120 242,84 154,34 92,70" fill="rgba(234,88,12,0.07)"/>

        <!-- Contornos principales -->
        <g fill="none" stroke="#0F172A" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round">
          <polygon points="180,210 278,154 278,105 242,84 242,118 180,154 180,210"/>
          <path d="M 180 210 L 92 159 L 92 70 L 154 34 L 242 84"/>
          <path d="M 92 70 L 148 102 L 180 154"/>
          <path d="M 148 102 L 210 66"/>
          <path d="M 180 154 L 180 120 L 242 84"/>
          <!-- Elipse isométrica superior -->
          <ellipse cx="164" cy="70" rx="18" ry="10.4" stroke="#0284C7" stroke-width="1.8"/>
        </g>

        <!-- Cotas isométricas -->
        <line x1="180" y1="216" x2="278" y2="160" stroke="#EA580C" stroke-width="1.1"/>
        <text x="236" y="200" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#EA580C" font-weight="600">80.0</text>
        <text x="115" y="200" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0284C7" font-weight="600">60.0</text>
        <text x="292" y="132" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0F172A" font-weight="600">H = 55</text>
      </svg>
    `,
  },
  {
    id: 'LAM-06',
    image: 'img/lam-06-valvula-explosiva.jpg',
    category: 'isometrica',
    title: 'Conjunto Explosivo de Válvula',
    scale: 'Escala 1:2',
    format: 'UNE A2',
    projection: 'Isométrica Explosiva',
    description:
      'Despiece axonométrico secuencial de cuerpo, junta tórica, vástago roscado y volante superior alineados sobre eje de montaje.',
    normative: 'ISO 6433 (Designación de elementos en planos de conjunto) e ISO 5456-3.',
    instruments: 'Software CAD paramétrico / tablero paralelo, estilógrafo técnico y plantilla de elipses.',
    dimensioning: 'Marcas de posición en globos numerados (1–4) y línea de eje de ensamblaje continua.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vista explosiva isométrica de conjunto mecánico">
        <!-- Eje de ensamblaje -->
        <line x1="180" y1="22" x2="180" y2="238" stroke="#EA580C" stroke-width="1.2" stroke-dasharray="9 3 2 3"/>

        <!-- Componente 4: Tapa superior -->
        <g transform="translate(180, 48)">
          <ellipse cx="0" cy="0" rx="44" ry="20" fill="rgba(2,132,199,0.08)" stroke="#0F172A" stroke-width="2"/>
          <path d="M -44 0 L -44 12 A 44 20 0 0 0 44 12 L 44 0" fill="none" stroke="#0F172A" stroke-width="2"/>
          <ellipse cx="0" cy="0" rx="14" ry="6.5" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.6"/>
        </g>

        <!-- Componente 3: Junta tórica -->
        <ellipse cx="180" cy="98" rx="30" ry="13" fill="none" stroke="#EA580C" stroke-width="3"/>

        <!-- Componente 2: Eje / pistón -->
        <g transform="translate(180, 125)">
          <ellipse cx="0" cy="0" rx="16" ry="7.5" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
          <path d="M -16 0 L -16 32 A 16 7.5 0 0 0 16 32 L 16 0" fill="rgba(15,23,42,0.06)" stroke="#0F172A" stroke-width="1.8"/>
        </g>

        <!-- Componente 1: Carcasa inferior -->
        <g transform="translate(180, 194)">
          <ellipse cx="0" cy="0" rx="52" ry="23" fill="rgba(2,132,199,0.08)" stroke="#0F172A" stroke-width="2.1"/>
          <path d="M -52 0 L -52 24 A 52 23 0 0 0 52 24 L 52 0" fill="rgba(2,132,199,0.05)" stroke="#0F172A" stroke-width="2.1"/>
          <ellipse cx="0" cy="0" rx="22" ry="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.6"/>
        </g>

        <!-- Globos numerados ISO 6433 -->
        <g font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700" fill="#0F172A">
          <line x1="224" y1="48" x2="275" y2="48" stroke="#334155" stroke-width="1"/>
          <circle cx="286" cy="48" r="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
          <text x="286" y="51" text-anchor="middle">04</text>

          <line x1="210" y1="98" x2="275" y2="98" stroke="#334155" stroke-width="1"/>
          <circle cx="286" cy="98" r="10" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.5"/>
          <text x="286" y="101" text-anchor="middle">03</text>

          <line x1="196" y1="142" x2="275" y2="142" stroke="#334155" stroke-width="1"/>
          <circle cx="286" cy="142" r="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
          <text x="286" y="145" text-anchor="middle">02</text>

          <line x1="232" y1="200" x2="275" y2="200" stroke="#334155" stroke-width="1"/>
          <circle cx="286" cy="200" r="10" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
          <text x="286" y="203" text-anchor="middle">01</text>
        </g>
      </svg>
    `,
  },
  {
    id: 'LAM-07',
    image: 'img/lam-07-planta-arquitectonica.jpg',
    category: 'arquitectonicos',
    title: 'Vivienda Modular — Planta Acotada',
    scale: 'Escala 1:50',
    format: 'UNE A2',
    projection: 'Planta Arquitectónica',
    description:
      'Distribución en planta a +1.20 m de nivel con muros portantes, tabiquería interior, abatimientos de puertas y ejes estructurales.',
    normative: 'ISO 7519 (Dibujos de construcción y arquitectura) y Código Técnico CTE.',
    instruments: 'Escalímetro arquitectónico (1:50 / 1:100), rotuladores técnicos 0.1 / 0.4 / 0.8 mm, plantilla sanitaria.',
    dimensioning: 'Cadenas de cotas exteriores a ejes y vanos (4.20 m × 6.40 m), superficies útiles (m²) y símbolo de Norte.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plano arquitectónico de planta acotada">
        <!-- Ejes estructurales con burbujas -->
        <g stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="6 3">
          <line x1="65" y1="36" x2="65" y2="225"/>
          <line x1="185" y1="36" x2="185" y2="225"/>
          <line x1="295" y1="36" x2="295" y2="225"/>
          <line x1="40" y1="60" x2="320" y2="60"/>
          <line x1="40" y1="196" x2="320" y2="196"/>
        </g>
        <g font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="700" fill="#0284C7">
          <circle cx="65" cy="24" r="9" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>
          <text x="65" y="27" text-anchor="middle">A</text>
          <circle cx="185" cy="24" r="9" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>
          <text x="185" y="27" text-anchor="middle">B</text>
          <circle cx="295" cy="24" r="9" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>
          <text x="295" y="27" text-anchor="middle">C</text>
        </g>

        <!-- Muros exteriores gruesos -->
        <rect x="65" y="60" width="230" height="136" fill="rgba(2,132,199,0.03)" stroke="#0F172A" stroke-width="4.5"/>
        <!-- Tabiques interiores -->
        <line x1="185" y1="60" x2="185" y2="148" stroke="#0F172A" stroke-width="2.5"/>
        <line x1="185" y1="128" x2="295" y2="128" stroke="#0F172A" stroke-width="2.5"/>

        <!-- Ventanas (doble línea en muro) -->
        <rect x="98" y="57.5" width="54" height="5" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>
        <rect x="292.5" y="80" width="5" height="36" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.2"/>

        <!-- Puerta principal con arco de abatimiento -->
        <rect x="112" y="193.5" width="32" height="5" fill="#FFFFFF"/>
        <line x1="112" y1="196" x2="112" y2="164" stroke="#EA580C" stroke-width="1.5"/>
        <path d="M 112 164 A 32 32 0 0 1 144 196" fill="none" stroke="#EA580C" stroke-width="1" stroke-dasharray="3 2"/>

        <!-- Puerta interior -->
        <rect x="182.5" y="152" width="5" height="28" fill="#FFFFFF"/>
        <line x1="185" y1="152" x2="213" y2="152" stroke="#EA580C" stroke-width="1.4"/>
        <path d="M 213 152 A 28 28 0 0 1 185 180" fill="none" stroke="#EA580C" stroke-width="1" stroke-dasharray="3 2"/>

        <!-- Textos de estancias -->
        <g font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155" text-anchor="middle">
          <text x="125" y="122" font-weight="700" fill="#0F172A">ESTAR / TALLER</text>
          <text x="125" y="134">24.60 m²</text>
          <text x="240" y="92" font-weight="700" fill="#0F172A">DORMITORIO</text>
          <text x="240" y="104">12.40 m²</text>
          <text x="240" y="160" font-weight="700" fill="#0F172A">BAÑO</text>
          <text x="240" y="172">5.20 m²</text>
        </g>

        <!-- Cota exterior inferior -->
        <line x1="65" y1="220" x2="295" y2="220" stroke="#0284C7" stroke-width="1.1"/>
        <line x1="65" y1="215" x2="65" y2="225" stroke="#0284C7" stroke-width="1.2"/>
        <line x1="295" y1="215" x2="295" y2="225" stroke="#0284C7" stroke-width="1.2"/>
        <rect x="155" y="213" width="50" height="14" fill="#FFFFFF"/>
        <text x="180" y="223" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#0284C7" font-weight="600">8.40 m</text>
      </svg>
    `,
  },
  {
    id: 'LAM-08',
    image: 'img/lam-08-seccion-constructiva.svg',
    category: 'arquitectonicos',
    title: "Sección Constructiva A-A' y Cubierta",
    scale: 'Escala 1:25',
    format: 'UNE A1',
    projection: 'Corte Vertical Arquitectónico',
    description:
      'Detalle constructivo transversal desde cimentación por zapata corrida hasta cercha de cubierta inclinada, con cotas de nivel.',
    normative: 'ISO 128-40 / Simbología de materiales constructivos (hormigón, tierra, aislamiento).',
    instruments: 'Escalímetro 1:25, escuadra de 45°, software BIM/CAD para capas constructivas.',
    dimensioning: 'Cotas altimétricas acumuladas (+0.00, +2.85, +4.25 m), pendiente de cubierta (22%) y espesores de forjado.',
    svg: `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sección constructiva arquitectónica">
        <!-- Terreno -->
        <line x1="24" y1="196" x2="336" y2="196" stroke="#334155" stroke-width="1.6"/>
        <rect x="24" y="196" width="312" height="34" fill="rgba(51,65,85,0.06)"/>

        <!-- Zapatas de cimentación -->
        <rect x="66" y="196" width="46" height="24" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.8"/>
        <rect x="248" y="196" width="46" height="24" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.8"/>

        <!-- Solera y muros cortados -->
        <rect x="82" y="184" width="196" height="12" fill="rgba(2,132,199,0.12)" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="82" y="96" width="14" height="88" fill="#0F172A"/>
        <rect x="264" y="96" width="14" height="88" fill="#0F172A"/>

        <!-- Cercha de cubierta inclinada -->
        <polygon points="62,96 180,44 298,96" fill="rgba(234,88,12,0.08)" stroke="#0F172A" stroke-width="2.2" stroke-linejoin="round"/>
        <line x1="180" y1="44" x2="180" y2="96" stroke="#334155" stroke-width="1.5"/>
        <line x1="126" y1="70" x2="180" y2="96" stroke="#334155" stroke-width="1.3"/>
        <line x1="234" y1="70" x2="180" y2="96" stroke="#334155" stroke-width="1.3"/>

        <!-- Marcadores de nivel altimétrico -->
        <g font-family="JetBrains Mono, monospace" font-size="9" fill="#0284C7" font-weight="600">
          <line x1="28" y1="184" x2="78" y2="184" stroke="#0284C7" stroke-width="1" stroke-dasharray="3 2"/>
          <polygon points="44,184 39,176 49,176" fill="#0284C7"/>
          <text x="26" y="172">+0.00</text>

          <line x1="28" y1="96" x2="78" y2="96" stroke="#0284C7" stroke-width="1" stroke-dasharray="3 2"/>
          <polygon points="44,96 39,88 49,88" fill="#0284C7"/>
          <text x="26" y="84">+2.85</text>

          <line x1="180" y1="44" x2="322" y2="44" stroke="#EA580C" stroke-width="1" stroke-dasharray="3 2"/>
          <text x="282" y="39" fill="#EA580C">+4.25 m</text>
        </g>

        <text x="180" y="146" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#334155">PENDIENTE CUBIERTA: 22%</text>
      </svg>
    `,
  },
];

/* --------------------------------------------------------------------------
   2. HITOS HISTÓRICOS (SECCIÓN C: LÍNEA DEL TIEMPO)
   -------------------------------------------------------------------------- */
const HISTORY_ERAS = [
  {
    eraTag: 'HITO 01 // ~3000 a.C. – 300 a.C.',
    image: 'img/hist-01-antiguedad.svg',
    title: 'Antigüedad: Egipto, Mesopotamia y Grecia',
    description:
      'Nacen las primeras plantas arquitectónicas grabadas en piedra y papiro para construir templos, canales y tumbas monumentales. En Grecia, la geometría euclidiana y la proporción áurea (φ ≈ 1.618) convierten el trazado en una ciencia deductiva.',
    facts: [
      'Plano de la estatua de Gudea de Lagash (2120 a.C.): planta arquitectónica a escala grabada en diorita con regla graduada.',
      'Papiros egipcios con retículas modulares para mantener proporciones constantes en arquitectura y relieve.',
      'Euclides compila los "Elementos", base axiomática de la regla y el compás que aún rige la geometría descriptiva.',
    ],
    caption: 'FIG. H1 — MÓDULO ÁUREO (φ) Y PLANTA DE TEMPLO CLÁSICO CON RETÍCULA PROPORCIONAL',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de rectángulo áureo y planta clásica">
        <!-- Rectángulo áureo y espiral -->
        <rect x="30" y="34" width="210" height="130" fill="none" stroke="#0F172A" stroke-width="2"/>
        <line x1="160" y1="34" x2="160" y2="164" stroke="#0284C7" stroke-width="1.4"/>
        <line x1="160" y1="114" x2="240" y2="114" stroke="#0284C7" stroke-width="1.4"/>
        <line x1="190" y1="114" x2="190" y2="164" stroke="#0284C7" stroke-width="1.4"/>
        <path d="M 30 164 A 130 130 0 0 1 160 34 A 80 80 0 0 1 240 114 A 50 50 0 0 1 190 164 A 30 30 0 0 1 160 134" fill="none" stroke="#EA580C" stroke-width="2.2"/>
        <!-- Columnas en planta (escala modular) -->
        <g fill="rgba(2,132,199,0.2)" stroke="#0F172A" stroke-width="1.4">
          <circle cx="278" cy="52" r="7"/><circle cx="312" cy="52" r="7"/><circle cx="346" cy="52" r="7"/>
          <circle cx="278" cy="100" r="7"/><circle cx="346" cy="100" r="7"/>
          <circle cx="278" cy="148" r="7"/><circle cx="312" cy="148" r="7"/><circle cx="346" cy="148" r="7"/>
        </g>
        <rect x="295" y="75" width="34" height="50" fill="none" stroke="#334155" stroke-width="1.5"/>
        <text x="135" y="206" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="600">φ = (1 + √5) / 2 ≈ 1.618</text>
        <text x="312" y="182" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155">PLANTA PERÍPTERA</text>
      </svg>
    `,
  },
  {
    eraTag: 'HITO 02 // Siglos XV – XVI',
    image: 'img/hist-02-renacimiento.jpg',
    title: 'Renacimiento: Brunelleschi y Leonardo da Vinci',
    description:
      'Filippo Brunelleschi formula las leyes matemáticas de la perspectiva cónica central, unificando el ojo del observador con la arquitectura. Leonardo da Vinci consolida el dibujo técnico-analítico moderno con vistas cortadas, despieces y estudios de engranajes.',
    facts: [
      'Invención de la perspectiva lineal (punto de fuga y línea de horizonte) para representar profundidad exacta.',
      'Leonardo introduce el sombreado descriptivo y vistas transparentes o seccionadas en sus códices de ingeniería.',
      'Leon Battista Alberti publica "De Pictura" (1435), primer tratado geométrico sobre proyección cónica.',
    ],
    caption: 'FIG. H2 — PROYECCIÓN CÓNICA CENTRAL CON PUNTO DE FUGA (PF) Y LÍNEA DE HORIZONTE (LH)',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de perspectiva cónica renacentista">
        <!-- Línea de horizonte LH -->
        <line x1="20" y1="88" x2="360" y2="88" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="8 4"/>
        <text x="26" y="81" font-family="JetBrains Mono, monospace" font-size="9" fill="#0284C7" font-weight="700">L.H.</text>
        <!-- Punto de fuga central PF -->
        <circle cx="190" cy="88" r="4" fill="#EA580C"/>
        <text x="190" y="75" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9.5" fill="#EA580C" font-weight="700">P.F.</text>

        <!-- Rayos proyectantes al punto de fuga -->
        <g stroke="#94A3B8" stroke-width="1">
          <line x1="190" y1="88" x2="38" y2="215"/>
          <line x1="190" y1="88" x2="342" y2="215"/>
          <line x1="190" y1="88" x2="108" y2="215"/>
          <line x1="190" y1="88" x2="272" y2="215"/>
        </g>

        <!-- Volumen arquitectónico fugado -->
        <polygon points="75,55 128,72 128,162 75,188" fill="rgba(2,132,199,0.1)" stroke="#0F172A" stroke-width="2"/>
        <polygon points="305,55 252,72 252,162 305,188" fill="rgba(15,23,42,0.06)" stroke="#0F172A" stroke-width="2"/>
        <line x1="128" y1="72" x2="252" y2="72" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
        <line x1="128" y1="162" x2="252" y2="162" stroke="#334155" stroke-width="1.2"/>
        <!-- Pavimento en retícula perspectiva -->
        <line x1="65" y1="194" x2="315" y2="194" stroke="#334155" stroke-width="1.1"/>
        <line x1="94" y1="170" x2="286" y2="170" stroke="#334155" stroke-width="1.1"/>
        <line x1="115" y1="152" x2="265" y2="152" stroke="#334155" stroke-width="1.1"/>
      </svg>
    `,
  },
  {
    eraTag: 'HITO 03 // 1795 – Siglo XIX',
    image: 'img/hist-03-industrial.svg',
    title: 'Revolución Industrial: Gaspard Monge',
    description:
      'El matemático francés Gaspard Monge sistematiza la Geometría Descriptiva (1795), permitiendo representar con rigor absoluto cualquier sólido 3D sobre dos planos ortogonales abatidos. Este avance hizo posible la fabricación en serie y la ingeniería ferroviaria y naval.',
    facts: [
      'Creación del Sistema Diédrico Ortogonal: proyección simultánea sobre Plano Vertical (PV) y Plano Horizontal (PH).',
      'Separación definitiva entre diseño en oficina técnica y fabricación en taller mediante planos acotados.',
      'Desarrollo de proyecciones axonométricas estandarizadas por William Farish (perspectiva isométrica, 1822).',
    ],
    caption: 'FIG. H3 — DIEDRO DE MONGE: PROYECCIÓN ORTOGONAL SOBRE PLANOS PV Y PH',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diedro de Monge con planos horizontal y vertical">
        <!-- Plano Vertical (PV) -->
        <polygon points="85,36 270,36 270,140 85,140" fill="rgba(2,132,199,0.08)" stroke="#0F172A" stroke-width="1.8"/>
        <!-- Plano Horizontal (PH) -->
        <polygon points="85,140 270,140 330,208 145,208" fill="rgba(234,88,12,0.07)" stroke="#0F172A" stroke-width="1.8"/>
        <!-- Línea de Tierra -->
        <line x1="85" y1="140" x2="270" y2="140" stroke="#0F172A" stroke-width="2.6"/>

        <!-- Punto P en el espacio y sus proyecciones p' y p -->
        <circle cx="210" cy="102" r="4.5" fill="#EA580C"/>
        <text x="219" y="101" font-family="JetBrains Mono, monospace" font-size="10" fill="#EA580C" font-weight="700">A (3D)</text>

        <!-- Proyección vertical a' -->
        <line x1="210" y1="102" x2="178" y2="78" stroke="#0284C7" stroke-width="1.3" stroke-dasharray="4 3"/>
        <circle cx="178" cy="78" r="3.5" fill="#0284C7"/>
        <text x="163" y="75" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="700">a'</text>

        <!-- Proyección horizontal a -->
        <line x1="210" y1="102" x2="210" y2="174" stroke="#0284C7" stroke-width="1.3" stroke-dasharray="4 3"/>
        <circle cx="210" cy="174" r="3.5" fill="#0284C7"/>
        <text x="219" y="180" font-family="JetBrains Mono, monospace" font-size="10" fill="#0284C7" font-weight="700">a</text>

        <!-- Enlace perpendicular a LT -->
        <polyline points="178,78 178,140 210,174" fill="none" stroke="#334155" stroke-width="1.1" stroke-dasharray="3 3"/>

        <text x="100" y="54" font-family="JetBrains Mono, monospace" font-size="10" fill="#0F172A" font-weight="700">PV</text>
        <text x="155" y="198" font-family="JetBrains Mono, monospace" font-size="10" fill="#0F172A" font-weight="700">PH</text>
        <text x="64" y="144" font-family="JetBrains Mono, monospace" font-size="9" fill="#334155">LT</text>
      </svg>
    `,
  },
  {
    eraTag: 'HITO 04 // Siglo XX – Actualidad',
    image: 'img/hist-04-digital-cad.svg',
    title: 'Era Moderna y Digital: ISO, CAD y BIM',
    description:
      'En 1917 nace el estándar alemán DIN y posteriormente las normas ISO unifican el dibujo técnico mundial. Desde los años 80, el restirador y las copias heliográficas ceden paso al CAD 2D/3D, al gemelo digital y al modelado paramétrico BIM.',
    facts: [
      'Normalización global ISO 128 / ISO 5457 (formatos serie A basados en relación √2).',
      'Transición de Sketchpad (Ivan Sutherland, 1963) al CAD paramétrico moderno y manufactura CAM/CNC.',
      'Metodología BIM (Building Information Modeling): planos 2D generados dinámicamente desde modelos 3D con datos de obra.',
    ],
    caption: 'FIG. H4 — MALLA PARAMÉTRICA CAD/BIM Y EXTRACCIÓN AUTOMÁTICA DE PLANOS',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wireframe CAD paramétrico y ejes XYZ">
        <!-- Retícula digital -->
        <g stroke="#CBD5E1" stroke-width="0.8">
          <line x1="40" y1="185" x2="340" y2="185"/>
          <line x1="70" y1="210" x2="155" y2="140"/>
          <line x1="150" y1="210" x2="235" y2="140"/>
          <line x1="230" y1="210" x2="315" y2="140"/>
        </g>
        <!-- Sólido wireframe CAD con nodos paramétricos -->
        <polygon points="120,160 220,160 275,118 175,118" fill="rgba(2,132,199,0.08)" stroke="#0284C7" stroke-width="1.6"/>
        <polygon points="120,82 220,82 275,40 175,40" fill="rgba(2,132,199,0.12)" stroke="#0F172A" stroke-width="2"/>
        <line x1="120" y1="82" x2="120" y2="160" stroke="#0F172A" stroke-width="2"/>
        <line x1="220" y1="82" x2="220" y2="160" stroke="#0F172A" stroke-width="2"/>
        <line x1="275" y1="40" x2="275" y2="118" stroke="#0F172A" stroke-width="2"/>
        <line x1="175" y1="40" x2="175" y2="118" stroke="#0284C7" stroke-width="1.3" stroke-dasharray="4 3"/>

        <!-- Vértices de control paramétrico -->
        <g fill="#EA580C">
          <rect x="117" y="79" width="6" height="6"/>
          <rect x="217" y="79" width="6" height="6"/>
          <rect x="272" y="37" width="6" height="6"/>
          <rect x="172" y="37" width="6" height="6"/>
          <rect x="217" y="157" width="6" height="6"/>
        </g>

        <!-- Tríada de ejes XYZ -->
        <g transform="translate(56, 175)" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700">
          <line x1="0" y1="0" x2="0" y2="-32" stroke="#0284C7" stroke-width="1.8"/>
          <text x="-4" y="-37" fill="#0284C7">Z</text>
          <line x1="0" y1="0" x2="30" y2="0" stroke="#EA580C" stroke-width="1.8"/>
          <text x="34" y="4" fill="#EA580C">X</text>
          <line x1="0" y1="0" x2="18" y2="-16" stroke="#0F172A" stroke-width="1.8"/>
          <text x="21" y="-17" fill="#0F172A">Y</text>
        </g>
        <text x="285" y="198" font-family="JetBrains Mono, monospace" font-size="9" fill="#0284C7" font-weight="600">MODELO BIM // IFC</text>
      </svg>
    `,
  },
];

/* --------------------------------------------------------------------------
   3. APLICACIONES DEL DIBUJO TÉCNICO (SECCIÓN D: PESTAÑAS INTERACTIVAS)
   -------------------------------------------------------------------------- */
const APPLICATIONS_DATA = {
  arquitectura: {
    badge: 'DISCIPLINA 01 // CONSTRUCCIÓN Y ESPACIO',
    image: 'img/app-01-arquitectura.svg',
    title: 'Arquitectura y Urbanismo',
    description:
      'Traduce la concepción espacial del edificio y su entorno urbano en documentación ejecutiva: planos de localización, plantas acotadas, alzados de fachada, secciones constructivas y detalles de carpintería y estructura.',
    standards: 'ISO 7519, ISO 8560, normas urbanísticas locales y estándares BIM (ISO 19650).',
    scales: '1:500 / 1:200 (Urbanismo) · 1:100 / 1:50 (Plantas) · 1:20 / 1:5 (Detalles constructivos).',
    deliverables: ['Planos de Planta', 'Alzados y Fachadas', 'Secciones Constructivas', 'Renders Estructurales', 'Planos de Instalaciones'],
    blueprintCode: 'ARQ-SEC-01 // ESC. 1:50',
    blueprintLabel: 'ALZADO Y CORTE ESQUEMÁTICO DE EDIFICACIÓN',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plano arquitectónico de alzado y estructura">
        <!-- Cota de nivel terreno -->
        <line x1="22" y1="205" x2="358" y2="205" stroke="#0F172A" stroke-width="2"/>
        <!-- Estructura de edificio de 2 niveles -->
        <rect x="64" y="64" width="252" height="141" fill="rgba(2,132,199,0.05)" stroke="#0F172A" stroke-width="2.2"/>
        <!-- Forjado intermedio y cubierta -->
        <rect x="56" y="132" width="268" height="8" fill="#334155"/>
        <rect x="52" y="56" width="276" height="10" fill="#0F172A"/>
        <!-- Pilares estructurales -->
        <line x1="148" y1="66" x2="148" y2="205" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="6 3"/>
        <line x1="232" y1="66" x2="232" y2="205" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="6 3"/>
        <!-- Ventanales -->
        <rect x="82" y="82" width="52" height="36" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
        <rect x="164" y="82" width="52" height="36" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
        <rect x="246" y="82" width="52" height="36" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
        <!-- Acceso planta baja -->
        <rect x="164" y="152" width="52" height="53" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.8"/>
        <line x1="190" y1="152" x2="190" y2="205" stroke="#EA580C" stroke-width="1.2"/>
        <!-- Cotas verticales -->
        <line x1="34" y1="60" x2="34" y2="205" stroke="#0284C7" stroke-width="1.2"/>
        <text x="24" y="136" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#0284C7" font-weight="700" transform="rotate(-90 24 136)">H = 6.20 m</text>
      </svg>
    `,
  },
  mecanica: {
    badge: 'DISCIPLINA 02 // MANUFACTURA Y PRECISIÓN',
    image: 'img/app-02-mecanica.svg',
    title: 'Ingeniería Mecánica e Industrial',
    description:
      'Define piezas fabricadas por mecanizado, fundición o conformado. Incorpora ajustes y tolerancias dimensionales y geométricas (GD&T), acabado superficial, despieces de motores, transmisiones y engranajes.',
    standards: 'ISO 1101 (Tolerancias geométricas GD&T), ISO 286 (Ajustes eje-agujero), ISO 2203 (Engranajes).',
    scales: '2:1 / 5:1 (Piezas pequeñas) · 1:1 (Tamaño real) · 1:5 / 1:10 (Conjuntos y bastidores).',
    deliverables: ['Planos de Despiece', 'Tolerancias GD&T', 'Trenes de Engranajes', 'Listas de Materiales (BOM)', 'Planos de Soldadura'],
    blueprintCode: 'MEC-ENG-02 // ESC. 1:1',
    blueprintLabel: 'RUEDA DENTADA NORMALIZADA Y CHAVETERO',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plano mecánico de engranaje con tolerancias">
        <!-- Ejes principales -->
        <g stroke="#EA580C" stroke-width="1.1" stroke-dasharray="9 3 2 3">
          <line x1="50" y1="125" x2="245" y2="125"/>
          <line x1="145" y1="30" x2="145" y2="220"/>
        </g>
        <!-- Engranaje esquemático -->
        <circle cx="145" cy="125" r="72" fill="none" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="10 6"/>
        <circle cx="145" cy="125" r="62" fill="rgba(2,132,199,0.06)" stroke="#0284C7" stroke-width="1.4" stroke-dasharray="6 3"/>
        <circle cx="145" cy="125" r="52" fill="none" stroke="#0F172A" stroke-width="2"/>
        <!-- Eje interior con chavetero -->
        <circle cx="145" cy="125" r="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.2"/>
        <rect x="139" y="96" width="12" height="10" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>

        <!-- Cuadro de tolerancia GD&T (concentricidad) -->
        <g transform="translate(244, 62)" font-family="JetBrains Mono, monospace" font-size="9.5">
          <line x1="-54" y1="38" x2="0" y2="12" stroke="#0284C7" stroke-width="1.2"/>
          <rect x="0" y="0" width="98" height="24" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <line x1="24" y1="0" x2="24" y2="24" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="72" y1="0" x2="72" y2="24" stroke="#0F172A" stroke-width="1.2"/>
          <circle cx="12" cy="12" r="5.5" fill="none" stroke="#0284C7" stroke-width="1.3"/>
          <circle cx="12" cy="12" r="2.3" fill="none" stroke="#0284C7" stroke-width="1.3"/>
          <text x="48" y="16" text-anchor="middle" fill="#0F172A" font-weight="700">0.02</text>
          <text x="85" y="16" text-anchor="middle" fill="#EA580C" font-weight="700">A</text>
        </g>

        <text x="246" y="135" font-family="JetBrains Mono, monospace" font-size="9" fill="#0F172A">Z = 24 DIENTES</text>
        <text x="246" y="152" font-family="JetBrains Mono, monospace" font-size="9" fill="#0284C7">MÓDULO m = 2.5</text>
        <text x="246" y="169" font-family="JetBrains Mono, monospace" font-size="9" fill="#334155">ØEJE = 22 H7</text>
      </svg>
    `,
  },
  civil: {
    badge: 'DISCIPLINA 03 // INFRAESTRUCTURA Y TERRITORIO',
    image: 'img/app-03-civil.svg',
    title: 'Ingeniería Civil',
    description:
      'Representa grandes obras de infraestructura vinculadas al terreno natural: levantamientos topográficos con curvas de nivel, perfiles longitudinales de carreteras, puentes, presas y trazado de redes hidráulicas.',
    standards: 'Normativa topográfica y cartográfica nacional, Eurocódigos estructurales e ISO 128.',
    scales: '1:5000 / 1:1000 (Topografía y carreteras) · 1:200 / 1:100 (Obras de paso y puentes).',
    deliverables: ['Planos Topográficos', 'Perfiles Longitudinales', 'Puentes y Viaductos', 'Redes Hidráulicas', 'Movimiento de Tierras'],
    blueprintCode: 'CIV-TOP-03 // ESC. 1:500',
    blueprintLabel: 'CURVAS DE NIVEL TOPOGRÁFICAS Y TRAZADO VIAL',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plano topográfico con curvas de nivel y puente">
        <!-- Curvas de nivel topográficas -->
        <g fill="none" stroke="#0284C7" stroke-width="1.2" opacity="0.75">
          <path d="M 24 88 Q 105 42, 185 84 T 356 64"/>
          <path d="M 24 114 Q 112 68, 195 108 T 356 94"/>
          <path d="M 24 142 Q 118 96, 204 134 T 356 125" stroke-width="1.8"/>
          <path d="M 24 172 Q 124 132, 210 162 T 356 156"/>
        </g>
        <!-- Cotas de altitud en curvas -->
        <text x="58" y="65" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7">+120m</text>
        <text x="58" y="118" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7">+115m</text>
        <text x="58" y="168" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0284C7">+110m</text>

        <!-- Trazado vial con puente sobre cauce -->
        <path d="M 30 214 C 120 214, 155 110, 240 110 C 300 110, 326 146, 356 146" fill="none" stroke="#0F172A" stroke-width="10" stroke-opacity="0.16"/>
        <path d="M 30 214 C 120 214, 155 110, 240 110 C 300 110, 326 146, 356 146" fill="none" stroke="#EA580C" stroke-width="1.8" stroke-dasharray="8 4"/>
        <!-- Estribos de obra de paso -->
        <rect x="195" y="96" width="52" height="28" fill="none" stroke="#0F172A" stroke-width="2"/>
        <text x="221" y="88" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#0F172A" font-weight="700">PK 0+420 // PUENTE</text>
      </svg>
    `,
  },
  electronica: {
    badge: 'DISCIPLINA 04 // SISTEMAS Y PRODUCTO',
    image: 'img/app-04-electronica.svg',
    title: 'Diseño Electrónico y de Producto',
    description:
      'Combina esquemas unifilares/multifilares de circuitos electrónicos y diseño de placas PCB con el diseño industrial de carcasas ergonómicas, ensamblajes compactos y prototipado rápido 3D (STL/STEP).',
    standards: 'IEC 60617 (Simbología gráfica eléctrica y electrónica), IPC-2221 (Diseño PCB) e ISO 128.',
    scales: 'Esquemas lógicos (sin escala) · 2:1 / 4:1 (Ruteado PCB) · 1:1 (Carcasas y ergonomía).',
    deliverables: ['Esquemas Electrónicos', 'Layouts de PCB', 'Estudios Ergonómicos', 'Vistas de Moldeo', 'Prototipos 3D (STEP)'],
    blueprintCode: 'ELC-PCB-04 // IEC 60617',
    blueprintLabel: 'ESQUEMA DE CIRCUITO Y ENCAPSULADO DE PRODUCTO',
    svg: `
      <svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Esquema electrónico IEC y diseño de placa PCB">
        <!-- Contorno PCB -->
        <rect x="34" y="34" width="312" height="178" rx="8" fill="rgba(2,132,199,0.04)" stroke="#0F172A" stroke-width="2"/>
        <!-- Taladros de montaje PCB -->
        <circle cx="50" cy="50" r="5" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.5"/>
        <circle cx="330" cy="50" r="5" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.5"/>
        <circle cx="50" cy="196" r="5" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.5"/>
        <circle cx="330" cy="196" r="5" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.5"/>

        <!-- Microcontrolador IC1 -->
        <rect x="148" y="84" width="84" height="68" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
        <text x="190" y="122" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#0F172A" font-weight="700">MCU IC1</text>

        <!-- Pistas PCB ortogonales y a 45° -->
        <g fill="none" stroke="#0284C7" stroke-width="2" stroke-linecap="round">
          <polyline points="148,100 105,100 88,82 72,82"/>
          <polyline points="148,120 96,120 96,148"/>
          <polyline points="232,102 278,102 296,84"/>
          <polyline points="232,132 282,132 282,166 254,166"/>
        </g>

        <!-- Símbolo de resistencia IEC -->
        <rect x="74" y="148" width="44" height="14" fill="#FFFFFF" stroke="#EA580C" stroke-width="1.8"/>
        <text x="96" y="176" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#EA580C">R1 10kΩ</text>

        <!-- Símbolo de condensador -->
        <line x1="296" y1="74" x2="296" y2="94" stroke="#0F172A" stroke-width="2.2"/>
        <line x1="305" y1="74" x2="305" y2="94" stroke="#0F172A" stroke-width="2.2"/>
        <line x1="305" y1="84" x2="322" y2="84" stroke="#0284C7" stroke-width="1.8"/>
        <text x="302" y="110" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8.5" fill="#334155">C1 100nF</text>
      </svg>
    `,
  },
};

/* --------------------------------------------------------------------------
   4. INICIALIZACIÓN Y CONTROLADORES DE INTERACCIÓN
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollSpy();
  initHeroBoard();
  initGalleryAndModal();
  initTimeline();
  initApplicationsTabs();
});

/* --- Menú hamburguesa responsivo --- */
function initMobileNav() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuToggle || !mobileMenu) return;

  const setMenuState = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    mobileMenu.hidden = !open;
  };

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setMenuState(false);
    }
  });
}

/* --- Resaltado automático de sección activa en la barra superior --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const isMatch = link.dataset.section === activeId;
          link.classList.toggle('is-active', isMatch);
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* --- Tablero SVG interactivo del Hero --- */
function initHeroBoard() {
  const heroSvg = document.getElementById('hero-svg');
  const toggleGuides = document.getElementById('toggle-guides');
  const toggleDims = document.getElementById('toggle-dims');
  const replayBtn = document.getElementById('replay-hero-svg');

  if (!heroSvg) return;

  toggleGuides?.addEventListener('click', () => {
    const active = toggleGuides.classList.toggle('is-active');
    toggleGuides.setAttribute('aria-pressed', String(active));
    heroSvg.classList.toggle('hide-guides', !active);
  });

  toggleDims?.addEventListener('click', () => {
    const active = toggleDims.classList.toggle('is-active');
    toggleDims.setAttribute('aria-pressed', String(active));
    heroSvg.classList.toggle('hide-dims', !active);
  });

  replayBtn?.addEventListener('click', () => {
    heroSvg.classList.remove('is-animating');
    // Forzar reflow para reiniciar la animación CSS de trazado
    void heroSvg.getBoundingClientRect();
    heroSvg.classList.add('is-animating');
  });
}

/* --- Galería de Láminas, Filtros y Modal Lightbox --- */
function initGalleryAndModal() {
  const gridEl = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const countAllEl = document.getElementById('count-all');

  const modalEl = document.getElementById('plate-modal');
  const modalCanvas = document.getElementById('modal-canvas');
  const modalCode = document.getElementById('modal-code');
  const modalScale = document.getElementById('modal-scale');
  const modalCat = document.getElementById('modal-cat');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalNorm = document.getElementById('modal-norm');
  const modalTools = document.getElementById('modal-tools');
  const modalDims = document.getElementById('modal-dims');
  const modalFormat = document.getElementById('modal-format');
  const modalProj = document.getElementById('modal-proj');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalPrevBtn = document.getElementById('modal-prev');
  const modalNextBtn = document.getElementById('modal-next');
  const modalGridBtn = document.getElementById('modal-toggle-grid');
  const modalViewImgBtn = document.getElementById('modal-view-img');
  const modalViewSvgBtn = document.getElementById('modal-view-svg');

  if (!gridEl || !modalEl) return;

  const urlCat = new URLSearchParams(window.location.search).get('cat');
  let currentFilter = urlCat && CATEGORY_LABELS[urlCat] ? urlCat : 'all';
  let visiblePlates = [...PLATES_DATA];
  let activeModalIndex = 0;
  let modalViewMode = 'image';
  let lastFocusedTrigger = null;

  if (countAllEl) {
    countAllEl.textContent = String(PLATES_DATA.length);
  }

  filterBtns.forEach((b) => {
    b.classList.toggle('is-active', (b.dataset.filter || 'all') === currentFilter);
  });

  const renderGallery = () => {
    visiblePlates =
      currentFilter === 'all'
        ? [...PLATES_DATA]
        : PLATES_DATA.filter((plate) => plate.category === currentFilter);

    gridEl.innerHTML = '';

    visiblePlates.forEach((plate, index) => {
      const card = document.createElement('article');
      card.className = 'plate-card';
      card.innerHTML = `
        <div class="plate-card__preview plate-card__preview--img">
          <img src="${plate.image}" alt="${plate.title}" loading="lazy" />
          <span class="plate-card__scale">${plate.scale}</span>
        </div>
        <div class="plate-card__body">
          <div class="plate-card__meta">
            <span>${plate.id}</span>
            <span>${CATEGORY_LABELS[plate.category]}</span>
          </div>
          <h3 class="plate-card__title">${plate.title}</h3>
          <p class="plate-card__desc">${plate.description}</p>
          <button type="button" class="plate-card__btn" data-plate-index="${index}">
            <span>Inspeccionar lámina</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  };

  const renderModalMedia = (plate) => {
    if (!plate) return;
    if (modalViewMode === 'svg') {
      modalCanvas.innerHTML = plate.svg
        .replace(/id="(m1|hatch-lam04)"/g, 'id="$1-modal"')
        .replace(/url\(#(m1|hatch-lam04)\)/g, 'url(#$1-modal)');
    } else {
      modalCanvas.innerHTML = `<img src="${plate.image}" alt="${plate.title} — ${plate.scale}" />`;
    }

    if (modalViewImgBtn && modalViewSvgBtn) {
      const isImg = modalViewMode === 'image';
      modalViewImgBtn.classList.toggle('is-active', isImg);
      modalViewImgBtn.setAttribute('aria-pressed', String(isImg));
      modalViewSvgBtn.classList.toggle('is-active', !isImg);
      modalViewSvgBtn.setAttribute('aria-pressed', String(!isImg));
    }
  };

  const populateModal = (index) => {
    const plate = visiblePlates[index];
    if (!plate) return;
    activeModalIndex = index;

    modalCode.textContent = plate.id;
    modalScale.textContent = plate.scale.toUpperCase();
    modalCat.textContent = CATEGORY_LABELS[plate.category].toUpperCase();
    modalTitle.textContent = plate.title;
    modalDesc.textContent = plate.description;
    modalNorm.textContent = plate.normative;
    modalTools.textContent = plate.instruments;
    modalDims.textContent = plate.dimensioning;
    modalFormat.textContent = plate.format;
    modalProj.textContent = plate.projection;
    renderModalMedia(plate);
  };

  const openModal = (index, triggerEl) => {
    lastFocusedTrigger = triggerEl || null;
    populateModal(index);
    modalEl.hidden = false;
    document.body.classList.add('modal-open');
    modalCloseBtn.focus();
  };

  const closeModal = () => {
    modalEl.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter || 'all';
      filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderGallery();
    });
  });

  gridEl.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-plate-index]');
    if (!btn) return;
    const idx = Number(btn.dataset.plateIndex);
    openModal(idx, btn);
  });

  modalViewImgBtn?.addEventListener('click', () => {
    modalViewMode = 'image';
    renderModalMedia(visiblePlates[activeModalIndex]);
  });

  modalViewSvgBtn?.addEventListener('click', () => {
    modalViewMode = 'svg';
    renderModalMedia(visiblePlates[activeModalIndex]);
  });

  modalPrevBtn?.addEventListener('click', () => {
    const prevIndex = (activeModalIndex - 1 + visiblePlates.length) % visiblePlates.length;
    populateModal(prevIndex);
  });

  modalNextBtn?.addEventListener('click', () => {
    const nextIndex = (activeModalIndex + 1) % visiblePlates.length;
    populateModal(nextIndex);
  });

  modalGridBtn?.addEventListener('click', () => {
    const showGrid = modalCanvas.classList.toggle('no-grid');
    const isGridVisible = !showGrid;
    modalGridBtn.classList.toggle('is-active', isGridVisible);
    modalGridBtn.setAttribute('aria-pressed', String(isGridVisible));
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalEl.addEventListener('click', (event) => {
    if (event.target.dataset.closeModal === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (modalEl.hidden) return;
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft') {
      modalPrevBtn?.click();
    } else if (event.key === 'ArrowRight') {
      modalNextBtn?.click();
    }
  });

  renderGallery();
}

/* --- Línea de Tiempo Interactiva + Archivo Completo (Historia) --- */
function initTimeline() {
  const nodes = document.querySelectorAll('.timeline-node');
  const stageEl = document.getElementById('timeline-stage');
  const prevBtn = document.getElementById('timeline-prev');
  const nextBtn = document.getElementById('timeline-next');
  const progressEl = document.getElementById('timeline-progress');
  const archiveGridEl = document.getElementById('era-archive-grid');

  if (!stageEl || nodes.length === 0) return;

  const urlEra = Number(new URLSearchParams(window.location.search).get('era'));
  let activeEra = !Number.isNaN(urlEra) && urlEra >= 0 && urlEra < HISTORY_ERAS.length ? urlEra : 0;

  const renderEra = (index) => {
    activeEra = index;
    const data = HISTORY_ERAS[index];
    if (!data) return;

    nodes.forEach((node, idx) => {
      const selected = idx === index;
      node.classList.toggle('is-active', selected);
      node.setAttribute('aria-selected', String(selected));
    });

    stageEl.innerHTML = `
      <div>
        <span class="timeline-era-tag">${data.eraTag}</span>
        <h3 class="timeline-stage__title">${data.title}</h3>
        <p class="timeline-stage__desc">${data.description}</p>
        <ul class="timeline-facts">
          ${data.facts.map((fact) => `<li>${fact}</li>`).join('')}
        </ul>
      </div>
      <div class="timeline-diagram">
        <img src="${data.image}" alt="${data.title}" loading="lazy" />
        <div class="timeline-diagram__caption">${data.caption}</div>
      </div>
    `;

    if (progressEl) {
      progressEl.textContent = `HITO 0${index + 1} / 0${HISTORY_ERAS.length}`;
    }
  };

  if (archiveGridEl) {
    archiveGridEl.innerHTML = HISTORY_ERAS.map(
      (era, idx) => `
        <article class="era-archive-card">
          <img class="era-archive-card__img" src="${era.image}" alt="${era.title}" loading="lazy" />
          <div class="era-archive-card__body">
            <span class="timeline-era-tag">${era.eraTag}</span>
            <h3>${era.title}</h3>
            <p>${era.description}</p>
            <button type="button" class="btn btn--secondary btn--sm" data-jump-era="${idx}">
              Ver en línea de tiempo ↑
            </button>
          </div>
        </article>
      `
    ).join('');

    archiveGridEl.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-jump-era]');
      if (!btn) return;
      renderEra(Number(btn.dataset.jumpEra));
      document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      renderEra(Number(node.dataset.era));
    });
  });

  prevBtn?.addEventListener('click', () => {
    const prev = (activeEra - 1 + HISTORY_ERAS.length) % HISTORY_ERAS.length;
    renderEra(prev);
  });

  nextBtn?.addEventListener('click', () => {
    const next = (activeEra + 1) % HISTORY_ERAS.length;
    renderEra(next);
  });

  renderEra(activeEra);
}

/* --- Pestañas de Aplicaciones Reales + Comparativa (Aplicaciones) --- */
function initApplicationsTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panelEl = document.getElementById('app-panel');
  const overviewGridEl = document.getElementById('apps-overview-grid');

  if (!panelEl || tabBtns.length === 0) return;

  const urlTab = new URLSearchParams(window.location.search).get('tab');
  const initialTab = urlTab && APPLICATIONS_DATA[urlTab] ? urlTab : 'arquitectura';

  const renderApplication = (key) => {
    const app = APPLICATIONS_DATA[key];
    if (!app) return;

    tabBtns.forEach((btn) => {
      const isSelected = btn.dataset.app === key;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-selected', String(isSelected));
    });

    panelEl.innerHTML = `
      <div class="app-layout">
        <div>
          <span class="app-layout__badge">${app.badge}</span>
          <h3 class="app-layout__title">${app.title}</h3>
          <p class="app-layout__desc">${app.description}</p>

          <div class="app-specs-grid">
            <div class="app-spec-box">
              <h4>Normativas Clave</h4>
              <p>${app.standards}</p>
            </div>
            <div class="app-spec-box">
              <h4>Escalas Habituales</h4>
              <p>${app.scales}</p>
            </div>
          </div>

          <div class="app-deliverables" aria-label="Documentos habituales">
            ${app.deliverables.map((item) => `<span class="deliverable-pill">▸ ${item}</span>`).join('')}
          </div>
        </div>

        <div class="app-blueprint">
          <img src="${app.image}" alt="${app.title} — diagrama técnico" loading="lazy" />
          <div class="app-blueprint__foot">
            <span>${app.blueprintCode}</span>
            <span>${app.blueprintLabel}</span>
          </div>
        </div>
      </div>
    `;
  };

  if (overviewGridEl) {
    overviewGridEl.innerHTML = Object.entries(APPLICATIONS_DATA)
      .map(
        ([key, app]) => `
        <article class="app-overview-card">
          <div class="app-overview-card__media">
            <img src="${app.image}" alt="${app.title}" loading="lazy" />
          </div>
          <div class="app-overview-card__body">
            <span class="app-layout__badge">${app.blueprintCode}</span>
            <h3>${app.title}</h3>
            <p class="app-overview-card__meta"><strong>Escalas:</strong> ${app.scales}</p>
            <p class="app-overview-card__meta"><strong>Normativa:</strong> ${app.standards}</p>
            <button type="button" class="btn btn--secondary btn--sm" data-jump-app="${key}">
              Inspeccionar disciplina ↑
            </button>
          </div>
        </article>
      `
      )
      .join('');

    overviewGridEl.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-jump-app]');
      if (!btn) return;
      renderApplication(btn.dataset.jumpApp);
      document.getElementById('aplicaciones')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      renderApplication(btn.dataset.app);
    });

    btn.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const offset = event.key === 'ArrowRight' ? 1 : -1;
      const targetBtn = tabBtns[(index + offset + tabBtns.length) % tabBtns.length];
      targetBtn.focus();
      renderApplication(targetBtn.dataset.app);
    });
  });

  renderApplication(initialTab);
}
