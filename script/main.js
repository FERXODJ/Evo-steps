// Selecciona todos los botones y el contenido
const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.training-content');

// Agrega un evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));
        // Agregar la clase 'active' al botón seleccionado
        button.classList.add('active');

        // Ocultar todo el contenido
        contents.forEach(content => content.classList.remove('active'));
        // Mostrar el contenido correspondiente
        const contentId = button.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
    });
});

