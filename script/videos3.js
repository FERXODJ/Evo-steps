const videos = [
    {
        modulo: "Crea y verificar tu cuenta en 1Primeoptions",
        src: "https://www.youtube.com/embed/UVZGhyinm7M"
    },
    {
        modulo: "Como operar en 1Primeoptions",
        src: "https://www.youtube.com/embed/oXAXKDKFhrA" // Reemplaza VIDEO_ID_2 con el ID del segundo video
    },

    {
        modulo: "Como depositar en 1Primeoptions",
        src: "https://www.youtube.com/embed/jI_rld_wLtA" // Reemplaza VIDEO_ID_2 con el ID del segundo video
    },

    {
        modulo: "Como retirar en 1Primeoptions",
        src: "https://www.youtube.com/embed/QdOMnjzHvlM" // Reemplaza VIDEO_ID_2 con el ID del segundo video
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