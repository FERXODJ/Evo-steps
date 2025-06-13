document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".trading-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Elimina la clase activa de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));
            // Agrega la clase activa al botón actual
            button.classList.add("active");

            // Oculta todas las secciones
            contents.forEach(content => content.classList.remove("active"));
            // Muestra la sección correspondiente al botón
            const contentId = button.getAttribute("data-content");
            document.getElementById(contentId).classList.add("active");
        });
    });
});