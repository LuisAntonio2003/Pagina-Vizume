// La función que inicializa la lógica de los modales.
// Debe ser accesible globalmente para que pueda ser llamada desde index.html.
function initializeModals() {
    // Selecciona todos los botones que abren modales
    // ¡Estos selectores ahora se ejecutarán *después* de que servicios.html se haya cargado!
    const openModalButtons = document.querySelectorAll('.consultar-btn');
    // Selecciona todos los botones de cierre dentro de los modales
    const closeModalButtons = document.querySelectorAll('.close-btn');
    // Selecciona todos los modales
    const modals = document.querySelectorAll('.modal');

    // Función para abrir un modal
    function openModal(modal) {
        if (modal == null) return;
        modal.style.display = 'flex'; // Cambia a 'flex' para mostrar y centrar
        document.body.style.overflow = 'hidden'; // Evita el scroll en el body cuando el modal está abierto
    }

    // Función para cerrar un modal
    function closeModal(modal) {
        if (modal == null) return;
        modal.style.display = 'none'; // Oculta el modal
        document.body.style.overflow = 'auto'; // Restaura el scroll en el body
    }

    // Agrega event listeners a los botones para abrir modales
    openModalButtons.forEach(button => {
        // **ELIMINADO: cloneNode(true) y replaceChild**
        button.addEventListener('click', () => {
            const modalTargetId = button.dataset.modalTarget; // Obtiene el ID del modal
            const modal = document.getElementById(modalTargetId); // Obtén el modal por su ID
            openModal(modal);
        });
    });

    // Agrega event listeners a los botones de cierre
    closeModalButtons.forEach(button => {
        // **ELIMINADO: cloneNode(true) y replaceChild**
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Encuentra el modal padre
            closeModal(modal);
        });
    });

    // Cierra el modal si se hace clic fuera del contenido del modal
    modals.forEach(modal => {
        // **ELIMINADO: cloneNode(true) y replaceChild**
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // Si el clic fue directamente en el fondo del modal
                closeModal(modal);
            }
        });
    });

    // Cierra el modal con la tecla Escape
    // Este listener debe ser global y asegurarse de que solo se añada una vez.
    // Usamos un atributo en el body para rastrear si ya se añadió.
    if (!document.body.dataset.escapeListenerAdded) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Re-seleccionar modales para asegurarnos de que estamos viendo los actuales
                // Es bueno volver a seleccionar si no estás seguro de que 'modals' sea una referencia viva
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.style.display === 'flex') { // Si el modal está visible
                        closeModal(modal);
                    }
                });
            }
        });
        document.body.dataset.escapeListenerAdded = 'true'; // Marcamos que el listener ya se añadió
    }
}

// IMPORTANTE: La función initializeModals será llamada directamente desde index.html
// *después* de que servicios.html se haya cargado.