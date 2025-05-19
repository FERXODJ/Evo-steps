document.getElementById('boton-carga').addEventListener('click', function () {
    const overlay = document.getElementById('cargando-overlay');

    // Muestra la animación de carga
    overlay.classList.add('activo');

    // Redirige al usuario después de 5 segundos
    setTimeout(() => {
        overlay.classList.remove('activo'); // Oculta la animación (opcional)
        window.location.href = 'home.html'; // Cambia 'home.html' por la URL de tu página de inicio
    }, 5000);
});





