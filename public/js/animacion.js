// Inicializa ScrollReveal
const sr = ScrollReveal();

// Ejemplo de configuración para revelar elementos
sr.reveal('.inicio', {
  duration: 3808,
  origin: 'bottom',
  distance: '1108px'
});



sr.reveal('.animacion-texto', {
    duration: 1000, // Duración de la animación en milisegundos
    origin: 'bottom', // Origen de la animación (puedes usar 'top', 'bottom', 'left', 'right', etc.)
    distance: '20px', // Distancia de desplazamiento
    delay: 200, // Retardo en milisegundos
    reset: true, // La animación se reinicia en cada vista
    mobile: true, // Habilitar animación en dispositivos móviles
  });
  


sr.reveal('.elemento-izquierda', {  duration: 1000,delay: 200, origin: 'left', distance: '20px' ,reset: true,mobile: true,});
sr.reveal('.elemento-derecha', {duration: 1000,delay: 200, origin: 'right', distance: '20px',reset: true,mobile: true, });
sr.reveal('.elemento-arriba', {duration: 1000,delay: 200, origin: 'top', distance: '20px',reset: true,mobile: true, });
sr.reveal('.elemento-abajo', { duration: 1000,delay: 200,origin: 'bottom', distance: '20px',reset: true,mobile: true, });
sr.reveal('.elemento-escala', { duration: 1000,delay: 200,origin: 'bottom', scale: 0.5 ,reset: true,mobile: true,});
sr.reveal('.elemento-rotacion', {duration: 1000,delay: 200, origin: 'bottom', rotate: { x: 0, y: 0, z: 90 } ,reset: true,mobile: true,});
sr.reveal('.elemento-opacidad', { duration: 1000,delay: 200,origin: 'bottom', opacity: 0 ,reset: true,mobile: true,});
sr.reveal('.elemento-color', { duration: 1000,delay: 200,origin: 'bottom', color: 'blue',reset: true,mobile: true, });


const elementosAnimados = document.querySelectorAll('.scroll-reveal');

function verificarElementosAnimados() {
  elementosAnimados.forEach(elemento => {
    const alturaVentana = window.innerHeight;
    const elementoPosicion = elemento.getBoundingClientRect().top;

    // Si el elemento está en la mitad o más en la ventana, añade la clase de animación
    if (elementoPosicion < alturaVentana / 2) {
      elemento.classList.add('animacion-clase');
    } else {
      // Si no está en la ventana, quita la clase de animación
      elemento.classList.remove('animacion-clase');
    }
  });
}

verificarElementosAnimados(); // Comprobar elementos visibles en la carga inicial

window.addEventListener('scroll', verificarElementosAnimados); // Comprobar elementos visibles durante el desplazamiento
