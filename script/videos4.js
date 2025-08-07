const videos = [
    {
        modulo: "Crear tu cuenta demo de Deriv y vincular en Mt5",
        src: "https://www.youtube.com/embed/tc&t=1s"
    },
    // Agrega más objetos aquí para más módulos/videos
];

let current = 0;

function updateVideo() {
    // Actualiza el título del módulo
    document.getElementById('modulo-title2').textContent = videos[current].modulo;

    // Actualiza el iframe del video
    document.getElementById('video-frame').src = videos[current].src;

    // Habilita o deshabilita los botones según el índice actual
    document.getElementById('prev-button').disabled = current === 0;
    document.getElementById('next-button').disabled = current === videos.length - 1;
}

// Evento para el botón "Atrás"
document.getElementById('prev-button').addEventListener('click', function() {
    if (current > 0) {
        current--;
        updateVideo();
    }
});

// Evento para el botón "Siguiente"
document.getElementById('next-button').addEventListener('click', function() {
    if (current < videos.length - 1) {
        current++;
        updateVideo();
    }
});

// Inicializa el primer video
updateVideo();