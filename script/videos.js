const videos = [
    {
        modulo: "MÓDULO 1",
        subtitulo: "Aprende a Edificar",
        src: "https://www.youtube.com/embed/cVyF-OUiBz4"
    },
    {
        modulo: "MÓDULO 2",
        subtitulo: "¿Cómo hacer una lista?",
        src: "https://www.youtube.com/embed/X1HzsWaK4cI"
    },

    {
        modulo: "MÓDULO 3",
        subtitulo: "¿Cómo Prospectar?",
        src: "https://www.youtube.com/embed/MR5OyHY6xjo"
    },

    {
        modulo: "MÓDULO 4",
        subtitulo: "¿Cómo hacer una invitación irresistible?",
        src: "https://www.youtube.com/embed/WoqvlnDp7_Y"
    },

    {
        modulo: "MÓDULO 5",
        subtitulo: "Tipos de presentaciones",
        src: "https://www.youtube.com/embed/UI3E01UQXPU"
    },

    {
        modulo: "MÓDULO 6",
        subtitulo: "¿Cómo hacer un cierre?",
        src: "https://www.youtube.com/embed/diYRhA2P92Q?start=1"
    },

    {
        modulo: "MÓDULO 7",
        subtitulo: "¿Cómo hacer un seguimiento?",
        src: "https://www.youtube.com/embed/kqxD6Y6UgcA"
    },
    // Agrega más objetos aquí para más módulos/videos
];

let current = 0;

function updateVideo() {
    document.getElementById('modulo-title').textContent = videos[current].modulo;
    document.getElementById('modulo-desc').textContent = videos[current].subtitulo;
    document.getElementById('video-title').textContent = videos[current].subtitulo;
    document.getElementById('video-frame').src = videos[current].src;

    document.getElementById('prev-button').disabled = current === 0;
    document.getElementById('next-button').disabled = current === videos.length - 1;
}

document.getElementById('prev-button').addEventListener('click', function() {
    if (current > 0) {
        current--;
        updateVideo();
    }
});

document.getElementById('next-button').addEventListener('click', function() {
    if (current < videos.length - 1) {
        current++;
        updateVideo();
    }
});

// Inicializa el primer video
updateVideo();