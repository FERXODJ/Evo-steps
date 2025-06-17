
// Función para alternar el sidebar
function toggleMobileSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active'); // Alterna la clase 'active'
}

// Evento para el botón de carga
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

// Resalta el enlace activo en el sidebar
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.mobile-sidebar-menu a');
    const currentUrl = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
        }
    });
});



