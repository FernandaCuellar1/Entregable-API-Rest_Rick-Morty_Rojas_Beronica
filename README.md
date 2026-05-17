# Manual de Uso y Funcionalidades de la Aplicación

A continuación se detalla cómo navegar e interactuar con cada una de las funciones integradas en la plataforma para su evaluación:

### 1. Exploración Inicial (Pantalla Principal)
Al cargar la aplicación, el sistema realiza una petición automática a la API para mostrar una grilla limpia con los personajes.
Cada tarjeta presenta de forma organizada la información básica obligatoria traducida al español: Nombre, Estado actual (Vivo/Muerto con un indicador visual de color), Especie y Género.

### 2. Barra de Búsqueda Dinámica
En la parte superior (Navbar), ubique el campo de texto que dice "Buscar personaje...".
Digite el nombre del personaje que desea localizar (por ejemplo: Morty o Summer) y presione Enter o haga clic en la lupa.
La aplicación lo redirigirá inmediatamente a la vista de resultados. En caso de que el nombre no coincida con ningún registro de la API, el sistema desplegará un mensaje controlado advirtiendo que no hubo coincidencias.

### 3. Filtros por Especie (Menú Interactivos)
Justo arriba de la grilla de personajes verá las pestañas de categorías: Humanos, Aliens, Robots y Criaturas Mitológicas.
Al seleccionar cualquiera de ellas, las tarjetas se actualizarán instantáneamente mostrando solo los personajes de esa especie.
**Efecto Toggle:** Si vuelve a hacer clic sobre la pestaña que ya está activa, el filtro se limpiará de forma automática, regresando la grilla a su estado general con todos los personajes.

### 4. Ventana de Detalle Expandido (Ventana Modal)
Para conocer datos avanzados de cualquier personaje, haga un clic izquierdo directamente sobre su tarjeta.
Esto desplegará una ventana emergente flotante (Modal) que bloqueará el fondo.
Aquí podrá visualizar la información complementaria de la API: su Lugar de origen, su Última ubicación conocida y el Número total de episodios en los que ha aparecido.
Para cerrarla, haga clic en el botón "X" de la esquina superior o presione fuera del recuadro.

### 5. Control de Páginas No Encontradas (Error 404)
Si intenta alterar la URL del navegador escribiendo una ruta inválida de forma manual, el sistema interceptará la dirección y mostrará una vista de error controlada (Dimension 404) con la opción de regresar al inicio de forma segura.