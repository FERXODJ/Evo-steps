// Lista de videos y títulos
const videos = [
    { title: "Capacitación de Arranque", src: "https://www.youtube.com/embed/-ylLzZ2GeLc" },
    { title: "Aprende a Edificar", src: "https://www.youtube.com/embed/cVyF-OUiBz4" },
    { title: "¿Cómo hacer una lista?", src: "https://www.youtube.com/embed/X1HzsWaK4cI" },
    { title: "Cómo Prospectar", src: "https://www.youtube.com/embed/MR5OyHY6xjo" },
    { title: "¿Cómo hacer una invitación irresistible?", src: "https://www.youtube.com/embed/WoqvlnDp7_Y" },
    { title: "Tipos de presentaciones", src: "https://www.youtube.com/embed/UI3E01UQXPU" },
    { title: "¿Cómo hacer un cierre?", src: "https://www.youtube.com/embed/diYRhA2P92Q?start=1" },
    { title: "¿Cómo hacer un seguimiento?", src: "https://www.youtube.com/embed/kqxD6Y6UgcA" }
];

// Variables para manejar el estado
let currentVideoIndex = 0;

// Referencias a los elementos HTML
const videoTitle = document.getElementById("video-title");
const videoFrame = document.getElementById("video-frame");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Función para actualizar el video
function updateVideo() {
    videoTitle.textContent = videos[currentVideoIndex].title;
    videoFrame.src = videos[currentVideoIndex].src;

    // Habilita o deshabilita los botones según el índice actual
    prevButton.disabled = currentVideoIndex === 0;
    nextButton.disabled = currentVideoIndex === videos.length - 1;
}

// Función para ir al siguiente video
function showNextVideo() {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
        updateVideo();
    }
}

// Función para ir al video anterior
function showPrevVideo() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        updateVideo();
    }
}

// Agrega eventos a los botones
nextButton.addEventListener("click", showNextVideo);
prevButton.addEventListener("click", showPrevVideo);

// Inicializa el primer video
updateVideo();