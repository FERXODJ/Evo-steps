const videos = [
    {
        modulo: "Crea tu cuenta en FxPro",
        src: "https://www.youtube.com/embed/mEvHc_WuQrg"
    },
    {
        modulo: "Configurar y Utilizar MT5 en tu PC",
        src: "https://www.youtube.com/embed/h4QyKVNwSww" // Reemplaza VIDEO_ID_2 con el ID del segundo video
    },

    {
        modulo: "Configurar y Utilizar MT5 en Android",
        src: "https://www.youtube.com/embed/E5RXPqGjQ-8" // Reemplaza VIDEO_ID_2 con el ID del segundo video
    },

    {
        modulo: "Configurar y Utilizar MT5 en Iphone",
        src: "https://www.youtube.com/embed/izdeBVYY3D0" // Reemplaza VIDEO_ID_2 con el ID del segundo video
    },

    {
        modulo: "Haz tu plan de trading",
        src: "https://www.youtube.com/embed/Y2KqZM8U_Us" // Reemplaza VIDEO_ID_2 con el ID del segundo video
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