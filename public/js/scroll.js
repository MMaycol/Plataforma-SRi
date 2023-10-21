// Obtener todos los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.nav-menu a');

    // Manejar el desplazamiento suave solo en esta página
    if (document.getElementById('inicio')) { // Verifica si el elemento 'inicio' existe
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                // Verifica si el elemento 'targetSection' existe
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth' // Desplazamiento suave
                    });
                }
            });
        });
    }

var imagenes = [
    "./images/mujer-joven-controlando-plantacion (1).jpg",
    "./images/trabajador-invernadero-tableta-mano-siguiendo-algo-pantalla-plantacion-ensalada-fresca (1).jpg",
    "./images/vista-lateral-manos-sosteniendo-planta.jpg"
];

var tiempoEntreCambios = 5000; // 5000 milisegundos = 5 segundos
var indiceImagenActual = 0;

function cambiarImagen() {
    var carrusel = document.getElementById("miTarjeta");
    var cards = carrusel.querySelectorAll(".card");

    // Itera a través de todas las tarjetas y cambia las imágenes
    for (var i = 0; i < cards.length; i++) {
        var imagenActual = cards[i].querySelector("img");
        imagenActual.src = imagenes[indiceImagenActual];
    }

    // Incrementa el índice de la imagen actual
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
}

// Inicia el cambio de imagen automáticamente y repite cada x segundos
setInterval(cambiarImagen, tiempoEntreCambios);

});


///carrusel imagenes servicios 

