// Obtener el elemento <p> donde se mostrará la fecha actual
var fechaParrafo = document.getElementById('fecha-actual');

// Obtener la fecha actual
var fechaActual = new Date();

// Formatear la fecha como "ENE. 07, 2024"
var opcionesFormato = { month: 'short', day: '2-digit', year: 'numeric' };
var fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFormato);

// Agregar la fecha formateada al elemento <p>
fechaParrafo.textContent += fechaFormateada.toUpperCase(); // Convertir a mayúsculas si se requiere
