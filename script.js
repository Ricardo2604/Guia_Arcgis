// =====================================================================
    // SISTEMA DE IDIOMAS
    // =====================================================================
    var currentLang = 'es';

    var TRANSLATIONS = {
        es: {
            // Sidebar
            'sidebar-title': 'Manual ArcGIS Pro',
            'sidebar-subtitle': 'Guía de Referencia Interna',
            'nav-inicio': 'Interfaz y Paneles',
            'nav-crear-capas': 'Creación de Capas',
            'nav-edicion': 'Dibujo y Edición',
            'nav-datos': 'Crear Shapefiles',
            'nav-dominios': 'Dominios y Atributos',
            'nav-exportar': 'KMZ y Exportación',
            'nav-paquetes': 'Empaquetado (.mpkx)',
            'nav-appeit': 'APPEIT (PDF)',
            // Section: appeit
            'appeit-h1': 'ArcGIS Pro APPEIT (Reportes PDF)',
            'appeit-intro-h3': '¿Qué es esta herramienta?',
            'appeit-intro-p': '<strong>APPEIT</strong> es una herramienta creada por la <strong>NTIA</strong> que funciona dentro de ArcGIS Pro. Su propósito es identificar si tu proyecto de banda ancha cruza zonas protegidas o áreas ambientales antes de la construcción.',
            'appeit-install-header': 'Descarga e Instalación',
            'appeit-install-li1': 'Descarga el archivo <code>.ppkx</code> desde el enlace oficial de la NTIA.',
            'appeit-download-btn': 'Descargar Archivo',
            'appeit-install-li2': 'Guárdalo en tu <strong>disco local</strong> (evita OneDrive o Google Drive para mejor rendimiento).',
            'appeit-install-li3': 'En ArcGIS Pro, busca el panel <strong>Catalog &gt; Tasks</strong> y haz doble clic en <i>APPEIT User Instructions</i>.',
            'appeit-welcome-caption': 'Panel de bienvenida de la tarea.',
            'appeit-steps-h3': 'Uso de la Herramienta Paso a Paso',
            'appeit-step12-h4': 'Carga de Proyecto',
            'appeit-step12-p': 'Inicia la tarea y selecciona tu archivo (línea de cable o polígono de área). Haz clic en <strong>Run</strong>.',
            'appeit-step46-h4': 'Parámetros e Identidad',
            'appeit-step46-p': 'Ingresa el <strong>Project ID</strong>. Si es una línea, define el <strong>Buffer</strong>.',
            'appeit-step7-h4': 'Análisis y Resultados CSV',
            'appeit-step7-p': 'Ejecuta el análisis. Al finalizar, te mostrará la ruta de guardado del CSV.',
            'appeit-step8-h4': 'Generar Reporte PDF',
            'appeit-step8-p': 'Selecciona el reporte en "Input Report" y presiona <strong>Run</strong>.',
            'appeit-final-report-h3': '¿Qué contiene el reporte final?',
            'appeit-final-report-p': 'El documento PDF resultante es un informe detallado que consolida todos los hallazgos geográficos y ambientales. Se divide principalmente en tres secciones:',
            'appeit-rep-p1-badge': 'Página 1',
            'appeit-rep-p1-t': 'Identificación del Proyecto',
            'appeit-rep-p1-d': 'Contiene el logo de la NTIA, el nombre oficial del reporte, el Nombre e ID del proyecto analizado y las fechas exactas de ejecución y exportación.',
            'appeit-rep-p2-badge': 'Página 2',
            'appeit-rep-p2-t': 'Tabla de Hallazgos',
            'appeit-rep-p2-d': 'Muestra el listado de capas afectadas organizadas por categorías (EPA, Infraestructura, Humedales). Detalla el nombre del área y los códigos de Recursos relacionados.',
            'appeit-rep-p3-badge': 'Página 3',
            'appeit-rep-p3-t': 'Recursos y Mitigación (BMP)',
            'appeit-rep-p3-d': 'Proporciona enlaces directos a las <strong>Mejores Prácticas de Gestión (BMP)</strong> para cada área de recurso afectada (Ej: Recursos Biológicos, Calidad del Aire, Salud Humana).',
            // Section: inicio
            'inicio-h1': 'Interfaz y Paneles Principales',
            'inicio-explorer-title': 'Explorador Interactivo',
            'inicio-explorer-hint': 'Haz clic en las zonas de la imagen',
            // Section: crear-capas
            'crear-capas-h1': 'Creación Detallada de Capas (Feature Classes)',
            'crear-capas-alert-h4': 'Diferencia Importante',
            'crear-capas-alert-p': 'Las capas no se crean desde el panel de <strong>Contents</strong>. Para crear una capa nueva, debes usar el panel de <strong>Catalog</strong> (a la derecha).',
            'crear-capas-card-h3': 'Proceso Paso a Paso',
            'crear-capas-step1-h4': 'Acceso a la Geodatabase',
            'crear-capas-step1-p': 'En el panel <strong>Catalog</strong>, expande <strong>Databases</strong>, haz clic derecho en tu .gdb y selecciona <code class="tool-badge">New</code> > <code class="tool-badge">Feature Class</code>.',
            'crear-capas-step1-caption': 'Menú contextual para crear una nueva clase de entidad.',
            'crear-capas-step2-h4': 'Definición de Identidad',
            'crear-capas-step2-p': 'Establece el <strong>Name</strong> (sin espacios) y el <strong>Alias</strong>. Selecciona el tipo de geometría (Punto, Línea o Polígono).',
            'crear-capas-step2-caption': 'Configuración inicial del asistente.',
            'crear-capas-step3-h4': 'Configuración de Campos (Fields)',
            'crear-capas-step3-p': 'Define las columnas de tu base de datos. Agrega campos como "Estado", "Material" o "Fecha".',
            'crear-capas-step3-caption': 'Definición de nombres de campo y tipos de datos.',
            'crear-capas-step4-h4': 'Sistema de Coordenadas',
            'crear-capas-step4-p': 'Busca y selecciona el sistema de coordenadas oficial para garantizar la precisión geográfica.',
            'crear-capas-step4-caption': 'Selección del Sistema de Referencia Espacial.',
            // Section: edicion
            'edicion-h1': 'Dibujo y Edición de Capas',
            'edicion-subtitle': 'Flujo de trabajo estándar para la creación de elementos geográficos.',
            'edicion-div1-header': 'I. INICIO DE LA EDICIÓN',
            'edicion-div1-p': 'Para comenzar a dibujar, primero debemos localizar las herramientas en la cinta superior. A diferencia de otros softwares, aquí la edición está integrada en el flujo constante.',
            'edicion-div1-step1': 'Dirígete a la pestaña <strong>Edit</strong> y busca el grupo <strong>Features</strong>.',
            'edicion-div2-header': 'II. SELECCIÓN DE PLANTILLAS (TEMPLATES)',
            'edicion-div2-p': 'Al presionar el botón <strong>Create</strong>, aparecerá un panel a la derecha. Este panel muestra todas las capas editables de tu mapa.',
            'edicion-div2-step2': 'Selecciona la capa en la que deseas trabajar para ver sus herramientas de dibujo.',
            'edicion-div3-header': 'III. HERRAMIENTAS DE CONSTRUCCIÓN',
            'edicion-div3-p': 'Una vez seleccionada la capa, aparecerá una barra flotante en el mapa o debajo del panel de creación con métodos de dibujo específicos.',
            'edicion-div3-methods-h5': 'Métodos Comunes:',
            'edicion-div3-methods': '<li>• <strong>Line:</strong> Clic por cada vértice.</li><li>• <strong>Streaming:</strong> Dibuja mientras mueves el mouse.</li><li>• <strong>Rectangle/Circle:</strong> Formas geométricas exactas.</li>',
            'edicion-div3-protip': '<strong>Atajo Pro:</strong> Presiona la tecla <strong>F2</strong> para terminar un dibujo (Finish Sketch) sin necesidad de hacer doble clic.',
            'edicion-div4-header': 'IV. AJUSTE (SNAPPING) Y FINALIZACIÓN',
            'edicion-div4-p': 'Para asegurar la conectividad entre cables y postes, el <strong>Snapping</strong> debe estar activo. Esto hace que el puntero se "pegue" a los elementos existentes.',
            'edicion-div4-save-h4': 'CIERRE CRÍTICO',
            'edicion-div4-save-p': 'Al terminar de dibujar, es <strong>obligatorio</strong> presionar el botón <strong>Save</strong> del grupo <i>Manage Edits</i>. Si guardas el proyecto (.aprx) pero no guardas la edición de las capas, los dibujos se perderán.',
            // Section: datos
            'datos-h1': 'Crear Shapefiles',
            'datos-subtitle': 'Aprende a usar la herramienta para convertir tu base de datos en archivos Shape (.shp).',
            'datos-reset-btn': 'Reiniciar',
            'datos-map-view': 'Vista de Mapa Activa',
            'datos-search-placeholder': 'Busca herramientas aquí...',
            'datos-tool-name': 'Crear Shapefiles',
            'datos-tool-category': 'Conversion Tools',
            'datos-select-layers': 'Selecciona las capas...',
            'datos-exporting': 'Exportando capas...',
            'datos-success': '¡Éxito!',
            'datos-output-section-h3': 'Estructura de Salida (.shp)',
            'datos-output-desc': 'Al finalizar el proceso, un "Shapefile" se compone de varias extensiones que deben permanecer juntas:',
            'datos-shp-desc': 'Geometría de los datos.',
            'datos-dbf-desc': 'Tabla de atributos.',
            'datos-shx-desc': 'Índice de la geometría.',
            'datos-prj-desc': 'Sistema de Coordenadas.',
            'datos-zip-tip': '<i class="fas fa-info-circle mr-2"></i> Pro-tip: Comprime todos estos archivos en un único archivo .ZIP para compartirlos.',
            // Section: dominios
            'dominios-h1': 'Dominios y Atributos',
            'dominios-card1-h3': 'Control de Calidad de Datos',
            'dominios-card1-p': 'Los dominios evitan errores de escritura manual, forzando al usuario a seleccionar valores de una lista predefinida por la empresa.',
            'dominios-quick-route-h4': 'Ruta de acceso rápido:',
            'dominios-quick-route-p': 'Para configurar o ver los dominios asociados a una capa específica:',
            'dominios-img1-label': 'Referencia: Clic Derecho en Capa',
            'dominios-img2-label': 'Paso 2: Configuración de la Tabla',
            'dominios-config-h3': '1. Configuración',
            'dominios-config-p': 'Crea el nombre del dominio y define los códigos (valor real) y descripciones (lo que ve el usuario).',
            'dominios-assign-h3': '2. Asignación',
            'dominios-assign-p': 'Ve a <strong>Data Design > Fields</strong> y en la columna "Domain" selecciona la lista que acabas de crear.',
            'dominios-save-reminder': 'Recuerda siempre presionar el botón <strong>Save</strong> en la parte superior después de realizar cambios en los dominios o campos.',
            'dominios-card2-h3': '2. Tabla de Atributos (Información Alfanumérica)',
            'dominios-card2-p': 'Cada elemento dibujado en el mapa (punto, línea o polígono) tiene una fila correspondiente en la base de datos donde se almacena su información.',
            'dominios-open-table-h4': '¿Cómo abrir la tabla?',
            'dominios-open-table-p': 'Clic derecho sobre la capa en el panel <strong>Contents</strong> > <strong>Attribute Table</strong> (o presiona Ctrl + T).',
            'dominios-components-h4': 'Componentes de la Tabla:',
            'dominios-fields': '<strong>Campos (Fields):</strong> Son las columnas. Representan categorías como <span class="attribute-tag">TIPO_CABLE</span>, <span class="attribute-tag">ESTADO</span> o <span class="attribute-tag">LONGITUD</span>.',
            'dominios-records': '<strong>Registros (Records):</strong> Son las filas. Cada fila es un objeto real en el mapa.',
            'dominios-link': '<strong>Vínculo con Dominios:</strong> Si un campo tiene un dominio asignado, al hacer clic en la celda verás una lista desplegable en lugar de poder escribir cualquier texto.',
            'dominios-img3-label': 'Vista de la Tabla',
            'dominios-critical-h4': '¡AVISO CRÍTICO DE SEGURIDAD DE DATOS!',
            'dominios-critical-p': 'Una vez terminado de configurar o asignar los dominios, es <strong>obligatorio</strong> presionar el botón <strong>Save</strong> en la parte superior. Esta sección es de <strong>suma importancia</strong> para la integridad de la base de datos GIS; por favor, verifica doblemente los códigos para <strong>evitar equivocaciones</strong> que puedan afectar el análisis posterior.',
            // Section: exportar
            'exportar-export-label': 'Exportar Mapas a PDF/Imagen',
            'exportar-h1': 'Paso a Paso: Exportación a KMZ',
            'exportar-subtitle': 'Instrucciones detalladas para convertir su proyecto de ArcGIS Pro a formato KML/KMZ.',
            'exportar-div1-header': 'I. ACCESO A HERRAMIENTAS',
            'exportar-div1-p': 'Para iniciar la exportación, primero debemos abrir el panel de geoprocesamiento:',
            'exportar-div1-step1': 'Haga clic en la pestaña superior <strong>Analysis</strong>.',
            'exportar-div1-step2': 'Seleccione el botón <strong>Tools</strong> para mostrar las herramientas.',
            'exportar-div1-img-label': 'Interfaz: Pestaña Analysis y Herramientas',
            'exportar-div2-header': 'II. BUSCAR LA HERRAMIENTA',
            'exportar-div2-step3': 'En el panel de <i>Geoprocessing</i>, escriba <strong>"Map to KML"</strong> en el buscador y elija la herramienta.',
            'exportar-div2-img-label': 'Buscador: Geoprocessing',
            'exportar-div3-header': 'III. PARÁMETROS DE SALIDA',
            'exportar-div3-input-map': '<strong>Input Map:</strong> Seleccione el mapa actual que desea exportar.',
            'exportar-div3-output-file': '<strong>Output File (KMZ):</strong> Especifique la carpeta de destino y el nombre del archivo.',
            'exportar-div3-img-label': 'Panel: Configuración Map to KML',
            'exportar-div4-header': 'IV. FINALIZAR PROCESO',
            'exportar-div4-step4': 'Presione <strong>Run</strong> para ejecutar la conversión.',
            // Section: paquetes
            'paquetes-h1': 'Empaquetado de Proyectos',
            'paquetes-subtitle': 'Cómo consolidar mapas y datos en un solo archivo para entrega o respaldo.',
            'paquetes-div1-header': 'I. ACCESO A LA HERRAMIENTA',
            'paquetes-div1-p': 'El archivo <strong>.mpkx (Map Package)</strong> es un contenedor comprimido que incluye las capas, los datos (GDB/Shapefiles) y la simbología. Es la forma segura de compartir proyectos sin romper los vínculos de datos.',
            'paquetes-div1-step1': 'Ve a la pestaña superior <strong>Share</strong> y en el grupo <i>Package</i> haz clic en <strong>Map Package</strong>.',
            'paquetes-div2-header': 'II. CONFIGURACIÓN DEL PAQUETE',
            'paquetes-div2-p': 'En el panel que aparece a la derecha, debes definir dónde se guardará el archivo y completar los metadatos básicos (obligatorios por ArcGIS).',
            'paquetes-div2-li1': '<i class="fas fa-check text-blue-500 mr-2"></i> <strong>Package to file:</strong> Selecciona esta opción para guardarlo en tu computadora.',
            'paquetes-div2-li2': '<i class="fas fa-tag text-blue-500 mr-2"></i> <strong>Summary & Tags:</strong> Escribe una breve descripción y etiquetas (ej: "Entrega_Proyecto").',
            'paquetes-div3-header': 'III. ANÁLISIS DE CONSISTENCIA',
            'paquetes-div3-p': 'Antes de generar el paquete, el sistema debe verificar que no falte ninguna fuente de datos.',
            'paquetes-div3-step2': 'Haz clic en el botón <strong>Analyze</strong> en la parte superior del panel.',
            'paquetes-div3-note': 'Nota: Si aparecen errores rojos, debes corregir las rutas de las capas antes de continuar.',
            'paquetes-div4-header': 'IV. EMPAQUETADO FINAL',
            'paquetes-div4-p': 'Una vez que el análisis no devuelva errores, el botón de empaquetado se habilitará.',
            'paquetes-div4-step3': 'Presiona el botón <strong>Package</strong> para generar el archivo .mpkx.',
            'paquetes-div4-tip-h5': '¿Qué obtengo?',
            'paquetes-div4-tip-p': 'Obtendrás un único archivo que puedes enviar por correo. Al abrirlo, el destinatario verá exactamente lo mismo que tú, incluyendo los colores de las líneas y los iconos, sin errores de "capas rotas".',
            // Nav buttons
            'nav-prev': 'Anterior',
            'nav-next': 'Siguiente',
            // Hotspots
            'hs-ribbon-t': 'Cinta de Opciones (Ribbon)',
            'hs-ribbon-c': "<div><p class='font-bold mb-2 text-blue-400'>Herramientas de Control</p><ul class='list-disc ml-4 space-y-1'><li><b>Map:</b> Exploración básica.</li><li><b>Add Data:</b> Icono \"+\" amarillo para cargar capas.</li><li><b>Edit:</b> Imprescindible para dibujo y Snapping.</li></ul></div><div><p class='font-bold mb-2 text-blue-400'>Buscador</p><p>Usa <b>Command Search</b> para hallar cualquier herramienta.</p></div>",
            'hs-contents-t': 'Panel de Contenidos (Contents)',
            'hs-contents-c': "<div><p>Gestión de capas, simbología y visibilidad. Haz clic derecho en los símbolos para cambios rápidos.</p></div>",
            'hs-map-t': 'Vista del Mapa',
            'hs-map-c': "<div><p class='font-bold mb-2'>Navegación</p><p>Lienzo principal. Truco: Mantén <kbd>C</kbd> para moverte (Pan) sin soltar tu herramienta de dibujo.</p></div>",
            'hs-attr-t': 'Panel de Atributos (Attributes)',
            'hs-attr-c': "<div><p>Visualiza y edita datos alfanuméricos. El <b>OBJECTID</b> es el identificador único.</p></div>",
            // Simulator steps
            'sim-step1': '<i class="fas fa-search mr-2"></i> <b>PASO 1:</b> En el panel de Geoprocessing, escribe rápido <b>"geodata"</b> para buscar la herramienta.',
            'sim-step2': '<i class="fas fa-hand-pointer mr-2"></i> <b>PASO 2:</b> Selecciona el resultado <b>Geodatabase To Shape</b> para abrir sus parámetros.',
            'sim-step3': '<i class="fas fa-layer-group mr-2"></i> <b>PASO 3:</b> En <b>Input Features</b>, selecciona las capas (ej: <b>Fiber Cable</b>).',
            'sim-step4': '<div><i class="fas fa-rocket mr-2"></i> <b>PASO 4:</b> Haz clic en <b>Run</b>. <div class="warning-step"><i class="fas fa-exclamation-triangle"></i> ¡AVISO! Asegúrate de haber seleccionado o creado la carpeta de destino correcta antes de ejecutar.</div></div>',
            'sim-done': '<i class="fas fa-check-double mr-2"></i> <b>PROCESO FINALIZADO.</b>'
        },
        en: {
            // Sidebar
            'sidebar-title': 'ArcGIS Pro Manual',
            'sidebar-subtitle': 'Internal Reference Guide',
            'nav-inicio': 'Interface & Panels',
            'nav-crear-capas': 'Layer Creation',
            'nav-edicion': 'Drawing & Editing',
            'nav-datos': 'Create Shapefiles',
            'nav-dominios': 'Domains & Attributes',
            'nav-exportar': 'KMZ & Export',
            'nav-paquetes': 'Packaging (.mpkx)',
            'nav-appeit': 'APPEIT (PDF)',
            // Section: appeit
            'appeit-h1': 'ArcGIS Pro APPEIT (PDF Reports)',
            'appeit-intro-h3': 'What is this tool?',
            'appeit-intro-p': '<strong>APPEIT</strong> is a tool created by the <strong>NTIA</strong> that runs inside ArcGIS Pro. Its purpose is to identify whether your broadband project crosses protected zones or environmental areas before construction.',
            'appeit-install-header': 'Download & Installation',
            'appeit-install-li1': 'Download the <code>.ppkx</code> file from the official NTIA link.',
            'appeit-download-btn': 'Download File',
            'appeit-install-li2': 'Save it on your <strong>local drive</strong> (avoid OneDrive or Google Drive for better performance).',
            'appeit-install-li3': 'In ArcGIS Pro, open the <strong>Catalog &gt; Tasks</strong> panel and double-click <i>APPEIT User Instructions</i>.',
            'appeit-welcome-caption': 'Task welcome panel.',
            'appeit-steps-h3': 'Step-by-Step Tool Usage',
            'appeit-step12-h4': 'Project Load',
            'appeit-step12-p': 'Start the task and select your file (cable line or area polygon). Click <strong>Run</strong>.',
            'appeit-step46-h4': 'Parameters & Identity',
            'appeit-step46-p': 'Enter the <strong>Project ID</strong>. If it is a line, define the <strong>Buffer</strong>.',
            'appeit-step7-h4': 'Analysis & CSV Results',
            'appeit-step7-p': 'Run the analysis. When finished, it will show you the CSV save path.',
            'appeit-step8-h4': 'Generate PDF Report',
            'appeit-step8-p': 'Select the report under "Input Report" and press <strong>Run</strong>.',
            'appeit-final-report-h3': 'What does the final report contain?',
            'appeit-final-report-p': 'The resulting PDF is a detailed report consolidating all geographic and environmental findings. It is mainly divided into three sections:',
            'appeit-rep-p1-badge': 'Page 1',
            'appeit-rep-p1-t': 'Project Identification',
            'appeit-rep-p1-d': 'Contains the NTIA logo, the official report name, the project Name and ID, and the exact execution and export dates.',
            'appeit-rep-p2-badge': 'Page 2',
            'appeit-rep-p2-t': 'Findings Table',
            'appeit-rep-p2-d': 'Shows the list of affected layers organized by categories (EPA, Infrastructure, Wetlands). Details the area name and related Resource codes.',
            'appeit-rep-p3-badge': 'Page 3',
            'appeit-rep-p3-t': 'Resources & Mitigation (BMP)',
            'appeit-rep-p3-d': 'Provides direct links to the <strong>Best Management Practices (BMP)</strong> for each affected resource area (e.g., Biological Resources, Air Quality, Human Health).',
            // Section: inicio
            'inicio-h1': 'Interface and Main Panels',
            'inicio-explorer-title': 'Interactive Explorer',
            'inicio-explorer-hint': 'Click on the image zones',
            // Section: crear-capas
            'crear-capas-h1': 'Detailed Layer Creation (Feature Classes)',
            'crear-capas-alert-h4': 'Important Difference',
            'crear-capas-alert-p': 'Layers are not created from the <strong>Contents</strong> panel. To create a new layer, you must use the <strong>Catalog</strong> panel (on the right).',
            'crear-capas-card-h3': 'Step-by-Step Process',
            'crear-capas-step1-h4': 'Geodatabase Access',
            'crear-capas-step1-p': 'In the <strong>Catalog</strong> panel, expand <strong>Databases</strong>, right-click your .gdb and select <code class="tool-badge">New</code> > <code class="tool-badge">Feature Class</code>.',
            'crear-capas-step1-caption': 'Context menu to create a new feature class.',
            'crear-capas-step2-h4': 'Identity Definition',
            'crear-capas-step2-p': 'Set the <strong>Name</strong> (no spaces) and the <strong>Alias</strong>. Select the geometry type (Point, Line or Polygon).',
            'crear-capas-step2-caption': 'Initial wizard configuration.',
            'crear-capas-step3-h4': 'Field Configuration',
            'crear-capas-step3-p': 'Define your database columns. Add fields like "Status", "Material" or "Date".',
            'crear-capas-step3-caption': 'Field name and data type definitions.',
            'crear-capas-step4-h4': 'Coordinate System',
            'crear-capas-step4-p': 'Search and select the official coordinate system to ensure geographic accuracy.',
            'crear-capas-step4-caption': 'Spatial Reference System selection.',
            // Section: edicion
            'edicion-h1': 'Drawing and Editing Layers',
            'edicion-subtitle': 'Standard workflow for creating geographic features.',
            'edicion-div1-header': 'I. STARTING EDIT MODE',
            'edicion-div1-p': 'To start drawing, first locate the tools on the top ribbon. Unlike other software, editing is integrated into the constant workflow here.',
            'edicion-div1-step1': 'Go to the <strong>Edit</strong> tab and find the <strong>Features</strong> group.',
            'edicion-div2-header': 'II. TEMPLATE SELECTION',
            'edicion-div2-p': 'When you press the <strong>Create</strong> button, a panel will appear on the right. This panel shows all editable layers in your map.',
            'edicion-div2-step2': 'Select the layer you want to work on to see its drawing tools.',
            'edicion-div3-header': 'III. CONSTRUCTION TOOLS',
            'edicion-div3-p': 'Once the layer is selected, a floating toolbar will appear on the map or below the creation panel with specific drawing methods.',
            'edicion-div3-methods-h5': 'Common Methods:',
            'edicion-div3-methods': '<li>• <strong>Line:</strong> Click for each vertex.</li><li>• <strong>Streaming:</strong> Draw as you move the mouse.</li><li>• <strong>Rectangle/Circle:</strong> Exact geometric shapes.</li>',
            'edicion-div3-protip': '<strong>Pro Shortcut:</strong> Press <strong>F2</strong> to finish a drawing (Finish Sketch) without double-clicking.',
            'edicion-div4-header': 'IV. SNAPPING & FINALIZATION',
            'edicion-div4-p': 'To ensure connectivity between cables and poles, <strong>Snapping</strong> must be active. This makes the cursor "snap" to existing elements.',
            'edicion-div4-save-h4': 'CRITICAL SAVE',
            'edicion-div4-save-p': 'When finished drawing, it is <strong>mandatory</strong> to press the <strong>Save</strong> button in the <i>Manage Edits</i> group. If you save the project (.aprx) but not the layer edits, the drawings will be lost.',
            // Section: datos
            'datos-h1': 'Create Shapefiles',
            'datos-subtitle': 'Learn how to use the tool to convert your database into Shape files (.shp).',
            'datos-reset-btn': 'Reset',
            'datos-map-view': 'Active Map View',
            'datos-search-placeholder': 'Search tools here...',
            'datos-tool-name': 'Create Shapefiles',
            'datos-tool-category': 'Conversion Tools',
            'datos-select-layers': 'Select layers...',
            'datos-exporting': 'Exporting layers...',
            'datos-success': 'Success!',
            'datos-output-section-h3': 'Output Structure (.shp)',
            'datos-output-desc': 'When the process is complete, a Shapefile consists of several extensions that must stay together:',
            'datos-shp-desc': 'Geometry of the data.',
            'datos-dbf-desc': 'Attribute table.',
            'datos-shx-desc': 'Geometry index.',
            'datos-prj-desc': 'Coordinate System.',
            'datos-zip-tip': '<i class="fas fa-info-circle mr-2"></i> Pro-tip: Compress all these files into a single .ZIP file to share them.',
            // Section: dominios
            'dominios-h1': 'Domains and Attributes',
            'dominios-card1-h3': 'Data Quality Control',
            'dominios-card1-p': 'Domains prevent manual typing errors by forcing users to select values from a predefined company list.',
            'dominios-quick-route-h4': 'Quick access route:',
            'dominios-quick-route-p': 'To configure or view the domains associated with a specific layer:',
            'dominios-img1-label': 'Reference: Right-click on Layer',
            'dominios-img2-label': 'Step 2: Table Configuration',
            'dominios-config-h3': '1. Configuration',
            'dominios-config-p': 'Create the domain name and define the codes (actual value) and descriptions (what the user sees).',
            'dominios-assign-h3': '2. Assignment',
            'dominios-assign-p': 'Go to <strong>Data Design > Fields</strong> and in the "Domain" column select the list you just created.',
            'dominios-save-reminder': 'Always remember to press the <strong>Save</strong> button at the top after making changes to domains or fields.',
            'dominios-card2-h3': '2. Attribute Table (Alphanumeric Information)',
            'dominios-card2-p': 'Each element drawn on the map (point, line or polygon) has a corresponding row in the database where its information is stored.',
            'dominios-open-table-h4': 'How to open the table?',
            'dominios-open-table-p': 'Right-click on the layer in the <strong>Contents</strong> panel > <strong>Attribute Table</strong> (or press Ctrl + T).',
            'dominios-components-h4': 'Table Components:',
            'dominios-fields': '<strong>Fields:</strong> These are the columns. They represent categories like <span class="attribute-tag">CABLE_TYPE</span>, <span class="attribute-tag">STATUS</span> or <span class="attribute-tag">LENGTH</span>.',
            'dominios-records': '<strong>Records:</strong> These are the rows. Each row is a real object on the map.',
            'dominios-link': '<strong>Domain Link:</strong> If a field has a domain assigned, clicking on the cell will show a dropdown list instead of allowing free text input.',
            'dominios-img3-label': 'Table View',
            'dominios-critical-h4': 'CRITICAL DATA SECURITY WARNING!',
            'dominios-critical-p': 'Once you have finished configuring or assigning domains, it is <strong>mandatory</strong> to press the <strong>Save</strong> button at the top. This section is of <strong>utmost importance</strong> for GIS database integrity; please double-check the codes to <strong>avoid mistakes</strong> that could affect subsequent analysis.',
            // Section: exportar
            'exportar-export-label': 'Export Maps to PDF/Image',
            'exportar-h1': 'Step by Step: KMZ Export',
            'exportar-subtitle': 'Detailed instructions for converting your ArcGIS Pro project to KML/KMZ format.',
            'exportar-div1-header': 'I. ACCESSING TOOLS',
            'exportar-div1-p': 'To start the export, we must first open the geoprocessing panel:',
            'exportar-div1-step1': 'Click on the top tab <strong>Analysis</strong>.',
            'exportar-div1-step2': 'Select the <strong>Tools</strong> button to display the tools.',
            'exportar-div1-img-label': 'Interface: Analysis Tab and Tools',
            'exportar-div2-header': 'II. FIND THE TOOL',
            'exportar-div2-step3': 'In the <i>Geoprocessing</i> panel, type <strong>"Map to KML"</strong> in the search bar and choose the tool.',
            'exportar-div2-img-label': 'Search: Geoprocessing',
            'exportar-div3-header': 'III. OUTPUT PARAMETERS',
            'exportar-div3-input-map': '<strong>Input Map:</strong> Select the current map you want to export.',
            'exportar-div3-output-file': '<strong>Output File (KMZ):</strong> Specify the destination folder and file name.',
            'exportar-div3-img-label': 'Panel: Map to KML Configuration',
            'exportar-div4-header': 'IV. FINALIZE PROCESS',
            'exportar-div4-step4': 'Press <strong>Run</strong> to execute the conversion.',
            // Section: paquetes
            'paquetes-h1': 'Project Packaging',
            'paquetes-subtitle': 'How to consolidate maps and data into a single file for delivery or backup.',
            'paquetes-div1-header': 'I. ACCESSING THE TOOL',
            'paquetes-div1-p': 'The <strong>.mpkx (Map Package)</strong> file is a compressed container that includes the layers, data (GDB/Shapefiles) and symbology. It is the safe way to share projects without breaking data links.',
            'paquetes-div1-step1': 'Go to the top tab <strong>Share</strong> and in the <i>Package</i> group click on <strong>Map Package</strong>.',
            'paquetes-div2-header': 'II. PACKAGE CONFIGURATION',
            'paquetes-div2-p': 'In the panel that appears on the right, define where the file will be saved and complete the basic metadata (required by ArcGIS).',
            'paquetes-div2-li1': '<i class="fas fa-check text-blue-500 mr-2"></i> <strong>Package to file:</strong> Select this option to save it on your computer.',
            'paquetes-div2-li2': '<i class="fas fa-tag text-blue-500 mr-2"></i> <strong>Summary & Tags:</strong> Write a brief description and tags (e.g. "Project_Delivery").',
            'paquetes-div3-header': 'III. CONSISTENCY ANALYSIS',
            'paquetes-div3-p': 'Before generating the package, the system must verify that no data source is missing.',
            'paquetes-div3-step2': 'Click the <strong>Analyze</strong> button at the top of the panel.',
            'paquetes-div3-note': 'Note: If red errors appear, you must fix the layer paths before continuing.',
            'paquetes-div4-header': 'IV. FINAL PACKAGING',
            'paquetes-div4-p': 'Once the analysis returns no errors, the packaging button will be enabled.',
            'paquetes-div4-step3': 'Press the <strong>Package</strong> button to generate the .mpkx file.',
            'paquetes-div4-tip-h5': 'What do I get?',
            'paquetes-div4-tip-p': 'You will get a single file you can send by email. When opened, the recipient will see exactly what you see, including line colors and icons, with no "broken layer" errors.',
            // Nav buttons
            'nav-prev': 'Previous',
            'nav-next': 'Next',
            // Hotspots
            'hs-ribbon-t': 'Options Ribbon',
            'hs-ribbon-c': "<div><p class='font-bold mb-2 text-blue-400'>Control Tools</p><ul class='list-disc ml-4 space-y-1'><li><b>Map:</b> Basic exploration.</li><li><b>Add Data:</b> Yellow \"+\" icon to load layers.</li><li><b>Edit:</b> Essential for drawing and Snapping.</li></ul></div><div><p class='font-bold mb-2 text-blue-400'>Search Bar</p><p>Use <b>Command Search</b> to find any tool.</p></div>",
            'hs-contents-t': 'Contents Panel',
            'hs-contents-c': "<div><p>Layer management, symbology and visibility. Right-click on symbols for quick changes.</p></div>",
            'hs-map-t': 'Map View',
            'hs-map-c': "<div><p class='font-bold mb-2'>Navigation</p><p>Main canvas. Tip: Hold <kbd>C</kbd> to Pan without releasing your drawing tool.</p></div>",
            'hs-attr-t': 'Attributes Panel',
            'hs-attr-c': "<div><p>View and edit alphanumeric data. <b>OBJECTID</b> is the unique identifier.</p></div>",
            // Simulator steps
            'sim-step1': '<i class="fas fa-search mr-2"></i> <b>STEP 1:</b> In the Geoprocessing panel, quickly type <b>"geodata"</b> to search for the tool.',
            'sim-step2': '<i class="fas fa-hand-pointer mr-2"></i> <b>STEP 2:</b> Select the <b>Geodatabase To Shape</b> result to open its parameters.',
            'sim-step3': '<i class="fas fa-layer-group mr-2"></i> <b>STEP 3:</b> In <b>Input Features</b>, select the layers (e.g.: <b>Fiber Cable</b>).',
            'sim-step4': '<div><i class="fas fa-rocket mr-2"></i> <b>STEP 4:</b> Click <b>Run</b>. <div class="warning-step"><i class="fas fa-exclamation-triangle"></i> WARNING! Make sure you have selected or created the correct destination folder before running.</div></div>',
            'sim-done': '<i class="fas fa-check-double mr-2"></i> <b>PROCESS COMPLETE.</b>'
        }
    };

    function setLanguage(lang) {
        currentLang = lang;
        var t = TRANSLATIONS[lang];
        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        // Update page title and html lang
        document.title = lang === 'es' ? 'Manual de Referencia ArcGIS Pro - Empresa' : 'ArcGIS Pro Reference Manual - Company';
        document.documentElement.lang = lang;
        // Update lang buttons active state
        var btnEs = document.getElementById('lang-btn-es');
        var btnEn = document.getElementById('lang-btn-en');
        if (btnEs) { btnEs.style.opacity = lang === 'es' ? '1' : '0.45'; btnEs.style.background = lang === 'es' ? '#005e95' : '#007ac2'; }
        if (btnEn) { btnEn.style.opacity = lang === 'en' ? '1' : '0.45'; btnEn.style.background = lang === 'en' ? '#005e95' : '#007ac2'; }
        // Update search input placeholder
        var searchInput = document.getElementById('tool-search');
        if (searchInput) searchInput.placeholder = t['datos-search-placeholder'];
        // Update layer select first option
        var layerSelect = document.getElementById('layer-select');
        if (layerSelect && layerSelect.options[0]) layerSelect.options[0].text = t['datos-select-layers'];
        // Update simulator instruction if at step 1
        var searchView = document.getElementById('search-view');
        var instructionText = document.getElementById('instruction-text');
        if (instructionText && searchView && !searchView.classList.contains('hidden')) {
            instructionText.innerHTML = t['sim-step1'];
        }
        // Rebuild prev/next nav buttons with new language
        buildSectionNavs();
        // Save preference
        try { localStorage.setItem('arcgis-lang', lang); } catch(e) {}
    }

    function toggleLanguage() {
        setLanguage(currentLang === 'es' ? 'en' : 'es');
    }

    // --- SIDEBAR TOGGLE (MÓVIL) ---
    (function() {
        var toggle  = document.getElementById('sidebar-toggle');
        var sidebar = document.getElementById('sidebar');
        var overlay = document.getElementById('sidebar-overlay');

        function openSidebar() {
            sidebar.classList.add('sidebar-open');
            overlay.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.querySelector('i').className = 'fas fa-times';
        }
        function closeSidebar() {
            sidebar.classList.remove('sidebar-open');
            overlay.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.querySelector('i').className = 'fas fa-bars';
        }

        toggle.addEventListener('click', function() {
            sidebar.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
        });
        overlay.addEventListener('click', closeSidebar);
    })();

    // --- NAVEGACIÓN GENERAL ---
    function showSection(id, navElement) {
        document.querySelectorAll('.section-content').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active-nav'));
        if (navElement) navElement.classList.add('active-nav');
        window.scrollTo(0, 0);
        try { history.pushState(null, '', '#' + id); } catch(e) {}
        // Cerrar sidebar en móvil al navegar
        if (window.innerWidth < 768) {
            document.getElementById('sidebar').classList.remove('sidebar-open');
            document.getElementById('sidebar-overlay').classList.remove('active');
            var toggle = document.getElementById('sidebar-toggle');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.querySelector('i').className = 'fas fa-bars';
            }
        }
    }

    // --- DATOS DE LA INTERFAZ ---
    const hotspotKeys = { ribbon: 'hs-ribbon', contents: 'hs-contents', map: 'hs-map', attr: 'hs-attr' };

    // --- FUNCIONES DE HOTSPOTS ---
    function showHotspot(key) {
        const panel = document.getElementById('info-panel');
        const t = TRANSLATIONS[currentLang];
        const baseKey = hotspotKeys[key];
        document.getElementById('hs-title').innerText = t[baseKey + '-t'] || key;
        document.getElementById('hs-content').innerHTML = t[baseKey + '-c'] || '';
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function closeHotspot() {
        document.getElementById('info-panel').style.display = 'none';
    }

    // --- LÓGICA DEL SIMULADOR (INDETERMINADA/GLOBAL) ---
    // Referencias a elementos
    const getEl = (id) => document.getElementById(id);

    function handleSearch(e) {
        const val = e.target.value.toLowerCase();
        const results = getEl('search-results');
        const input = getEl('tool-search');
        const instruction = getEl('instruction-text');

        var SEARCH_KEYWORDS = ['geodata', 'crear shapefiles', 'shapefile', 'shape', 'shp', 'geodatabase', 'exportar', 'convert', 'gdb', 'create shapefiles', 'export'];
        if (SEARCH_KEYWORDS.some(function(kw) { return val.includes(kw); })) {
            results.classList.remove('hidden');
            input.classList.remove('pulsing');
            instruction.innerHTML = TRANSLATIONS[currentLang]['sim-step2'];
        } else {
            results.classList.add('hidden');
        }
    }

    function openTool() {
        getEl('search-view').classList.add('hidden');
        getEl('tool-view').classList.remove('hidden');
        getEl('instruction-text').innerHTML = TRANSLATIONS[currentLang]['sim-step3'];
    }

    function addLayer() {
        const select = getEl('layer-select');
        const layer = select.value;
        if (!layer) return;
        if (getEl(`chip-${layer.replace(/\s+/g, '')}`)) return;

        const layerChip = document.createElement('div');
        layerChip.id = `chip-${layer.replace(/\s+/g, '')}`;
        layerChip.className = "flex justify-between items-center bg-blue-50 p-1.5 px-3 border border-blue-100 text-[10px] rounded";
        layerChip.innerHTML = `<span>${layer}</span> <i class="fas fa-times text-gray-400 cursor-pointer hover:text-red-500" onclick="this.parentElement.remove()"></i>`;
        getEl('selected-layers').appendChild(layerChip);
        
        getEl('input-features-box').classList.remove('pulsing');
        getEl('run-btn').classList.remove('hidden');
        getEl('run-btn').classList.add('pulsing');
        getEl('output-box').classList.add('pulsing');
        
        getEl('instruction-text').innerHTML = TRANSLATIONS[currentLang]['sim-step4'];
    }

    function executeRun() {
        getEl('tool-view').classList.add('hidden');
        getEl('progress-view').classList.remove('hidden');
        getEl('run-btn').classList.remove('pulsing');
        getEl('output-box').classList.remove('pulsing');
        
        let progress = 0;
        const bar = getEl('progress-bar');
        const interval = setInterval(() => {
            progress += 10;
            bar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                getEl('loading-area').classList.add('hidden');
                getEl('success-area').classList.remove('hidden');
                getEl('instruction-box').classList.replace('bg-blue-600', 'bg-green-600');
                getEl('instruction-text').innerHTML = TRANSLATIONS[currentLang]['sim-done'];
            }
        }, 150);
    }

    function resetTool() {
        getEl('search-view').classList.remove('hidden');
        getEl('tool-view').classList.add('hidden');
        getEl('progress-view').classList.add('hidden');
        getEl('success-area').classList.add('hidden');
        getEl('loading-area').classList.remove('hidden');
        getEl('search-results').classList.add('hidden');
        getEl('output-box').classList.remove('pulsing');
        
        getEl('tool-search').value = '';
        getEl('tool-search').classList.add('pulsing');
        getEl('layer-select').value = '';
        getEl('selected-layers').innerHTML = '';
        getEl('progress-bar').style.width = '0%';
        getEl('run-btn').classList.add('hidden');
        
        getEl('instruction-box').classList.replace('bg-green-600', 'bg-blue-600');
        getEl('instruction-text').innerHTML = TRANSLATIONS[currentLang]['sim-step1'];
    }

    // --- FALLBACK IMAGEN ---
    document.getElementById('img-interfaz').onerror = function() {
        this.src = "https://pro.arcgis.com/es/pro-app/latest/get-started/get-started-with-arcgis-pro/GUID-F01211E1-92D9-4D34-979C-5D64C597D3C1-web.png";
    };

    // --- ORDEN DE SECCIONES (compartido por hash routing y nav ant/sig) ---
    var SECTION_ORDER = [
        { id: 'inicio',      key: 'nav-inicio' },
        { id: 'crear-capas', key: 'nav-crear-capas' },
        { id: 'edicion',     key: 'nav-edicion' },
        { id: 'datos',       key: 'nav-datos' },
        { id: 'dominios',    key: 'nav-dominios' },
        { id: 'exportar',    key: 'nav-exportar' },
        { id: 'paquetes',    key: 'nav-paquetes' },
        { id: 'appeit',      key: 'nav-appeit' }
    ];

    // --- NAVEGACIÓN ANTERIOR / SIGUIENTE ---
    function buildSectionNavs() {
        // Remove any existing section-nav elements first
        document.querySelectorAll('.section-nav').forEach(function(n) { n.remove(); });
        var prevLabel = TRANSLATIONS[currentLang]['nav-prev'];
        var nextLabel = TRANSLATIONS[currentLang]['nav-next'];
        SECTION_ORDER.forEach(function(sec, idx) {
            var section = document.getElementById(sec.id);
            if (!section) return;
            var prev = idx > 0 ? SECTION_ORDER[idx - 1] : null;
            var next = idx < SECTION_ORDER.length - 1 ? SECTION_ORDER[idx + 1] : null;
            var navEl = document.createElement('div');
            navEl.className = 'section-nav';
            var prevLabel2 = TRANSLATIONS[currentLang][prev ? prev.key : ''] || '';
            var nextLabel2 = TRANSLATIONS[currentLang][next ? next.key : ''] || '';
            var prevHtml = prev
                ? '<button class="section-nav-btn" onclick="showSection(\'' + prev.id + '\', document.querySelectorAll(\'.nav-item\')[' + (idx-1) + '])">'
                  + '<i class="fas fa-arrow-left"></i>'
                  + '<span><span class="section-nav-label">' + prevLabel + '</span>' + prevLabel2 + '</span>'
                  + '</button>'
                : '<span></span>';
            var nextHtml = next
                ? '<button class="section-nav-btn" onclick="showSection(\'' + next.id + '\', document.querySelectorAll(\'.nav-item\')[' + (idx+1) + '])">'
                  + '<span><span class="section-nav-label">' + nextLabel + '</span>' + nextLabel2 + '</span>'
                  + '<i class="fas fa-arrow-right"></i>'
                  + '</button>'
                : '<span></span>';
            navEl.innerHTML = prevHtml + nextHtml;
            section.appendChild(navEl);
        });
    }

    // --- INICIALIZACIÓN DE IDIOMA ---
    (function() {
        var savedLang;
        try { savedLang = localStorage.getItem('arcgis-lang'); } catch(e) {}
        setLanguage(savedLang === 'en' ? 'en' : 'es');
    })();

    // --- SOPORTE DE HISTORIAL Y HASH ---
    (function() {
        var ids = SECTION_ORDER.map(function(s) { return s.id; }); // IDs never change between languages
        function navigateToHash() {
            var hash = window.location.hash.replace('#', '');
            var idx  = ids.indexOf(hash);
            var navItems = document.querySelectorAll('.nav-item');
            showSection(idx >= 0 ? hash : 'inicio', navItems[idx >= 0 ? idx : 0]);
        }
        window.addEventListener('popstate', navigateToHash);
        navigateToHash();
    })();