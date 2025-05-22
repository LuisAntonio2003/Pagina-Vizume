/**
 * @fileoverview Este archivo contiene funciones para generar dinámicamente tarjetas de servicios/portafolio
 * y sus modales asociados, así como la lógica para su interacción.
 * @author [Tu Nombre o Nombre de la Empresa]
 * @version 1.0.0
 */

/**
 * Genera dinámicamente un conjunto de tarjetas (cards) y sus respectivos modales
 * a partir de un array de datos, inyectándolos en un contenedor HTML específico.
 *
 * @param {string} containerId - El ID del elemento HTML (un `div` vacío, por ejemplo)
 * donde se inyectarán las tarjetas generadas.
 * @param {Array<Object>} dataArray 
 */

function generateCards(containerId, dataArray) {
    // 1. Obtener el contenedor HTML donde se inyectarán las tarjetas.
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Error: Contenedor con ID '${containerId}' no encontrado en el DOM.`);
        return;
    }

    // Variables para acumular el HTML de todas las tarjetas y todos los modales.
    let cardsHtml = '';
    let modalsHtml = '';

    dataArray.forEach(item => {
        let mediaElement = ''; // Variable para almacenar el HTML de la imagen o video.

        // Determina si el medio es una imagen o un video y construye el elemento HTML correspondiente.
        if (item.mediaType === 'image') {
            mediaElement = `<img src="${item.imageUrl}" alt="${item.title}">`;
        } else if (item.mediaType === 'video') {
            mediaElement = `
                <video controls autoplay muted loop>
                    <source src="${item.videoUrl}" type="video/mp4">
                    Tu navegador no soporta el tag de video.
                </video>
            `;
        }

        // Construye el HTML del botón CONSULTAR si el item tiene un modalId definido.
        // Esto permite que las tarjetas (ej. de portafolio) sin modal no tengan botón.
        let consultButtonHtml = '';
        if (item.modalId) { // Solo si item.modalId existe, genera el botón
            consultButtonHtml = `<button class="consultar-btn" data-modal-target="${item.modalId}">CONSULTAR</button>`;
        }


        // Construye el HTML de una sola tarjeta (`servicio-card`).
        cardsHtml += `
            <div class="servicio-card">
                <h3 class="servicio-titulo">${item.title}</h3>
                <div class="servicio-imagen-container">
                    ${mediaElement}
                    ${consultButtonHtml} </div>
            </div>
        `;

        // Construye el HTML de un solo modal (`modal`).
        // Solo genera el modal si el item tiene un `modalId` definido.
        if (item.modalId) {
            modalsHtml += `
                <div class="modal" id="${item.modalId}">
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <h2>${item.title}</h2>
                        <p>${item.modalContent}</p>
                    </div>
                </div>
            `;
        }
    });

    // Inyecta todo el HTML de las tarjetas generadas en el contenedor principal.
    container.innerHTML = `<div class="servicios-container">${cardsHtml}</div>`;

    // Inyecta todo el HTML de los modales generados al final del `body` del documento.
    document.body.insertAdjacentHTML('beforeend', modalsHtml);
}

/**
 * Inicializa la funcionalidad de los modales.
 */
function initializeModals() {
    // Selecciona todos los botones con la clase 'consultar-btn'.
    const openModalButtons = document.querySelectorAll('.consultar-btn');
    // Selecciona todos los botones de cierre con la clase 'close-btn'.
    const closeModalButtons = document.querySelectorAll('.close-btn');
    // Selecciona todos los elementos con la clase 'modal'.
    const modals = document.querySelectorAll('.modal');

    /**
     * Abre un modal específico.
     * @param {HTMLElement} modal - El elemento modal a abrir.
     */
    function openModal(modal) {
        if (modal == null) return; // Si el modal no existe, no hace nada.
        modal.style.display = 'flex'; // Hace el modal visible (usando flexbox para centrar).
        document.body.style.overflow = 'hidden'; // Evita el scroll en el body cuando el modal está abierto.
    }

    /**
     * Cierra un modal específico.
     * @param {HTMLElement} modal - El elemento modal a cerrar.
     */
    function closeModal(modal) {
        if (modal == null) return; // Si el modal no existe, no hace nada.
        modal.style.display = 'none'; // Oculta el modal.
        document.body.style.overflow = 'auto'; // Restaura el scroll en el body.
    }

    // Añade un event listener a cada botón "CONSULTAR".
    // Estos son los botones de las tarjetas que abren los modales.
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene el ID del modal objetivo desde el atributo `data-modal-target`.
            const modalTargetId = button.dataset.modalTarget;
            // Busca el modal por su ID.
            const modal = document.getElementById(modalTargetId);
            openModal(modal); // Abre el modal.
        });
    });

    // Añade un event listener a cada botón de cierre (`&times;`).
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra el elemento modal ascendente más cercano al botón de cierre.
            const modal = button.closest('.modal');
            closeModal(modal); // Cierra el modal.
        });
    });

    // Añade un event listener a cada modal para cerrarlo al hacer clic fuera de su contenido.
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Si el clic fue directamente en el fondo del modal (el propio elemento modal),
            // y no en su contenido, entonces ciérralo.
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Previene la adición duplicada del event listener para la tecla 'Escape'.
    // Esto es importante si `initializeModals` se llama varias veces (ej. en desarrollo o al recargar partes del DOM).
    if (!document.body.dataset.escapeListenerAdded) {
        // Añade un event listener global al documento para la tecla 'Escape'.
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Si 'Escape' es presionada, busca y cierra cualquier modal que esté visible.
                document.querySelectorAll('.modal').forEach(modal => {
                    // Verifica si el modal está visible (su estilo de display es 'flex').
                    if (modal.style.display === 'flex') {
                        closeModal(modal);
                    }
                });
            }
        });
        // Marca que el listener de 'Escape' ya fue añadido al body, para evitar futuras adiciones.
        document.body.dataset.escapeListenerAdded = 'true';
    }
}

/**
 * Inicializa la funcionalidad del boton emergente
 */
function initializeScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Muestra u oculta el botón basado en la posición del scroll
    window.addEventListener("scroll", () => {
        // Altura a partir de la cual el botón debería aparecer (ej. 200px desde arriba)
        const scrollThreshold = 200;

        // Calcula cuánto scroll ha hecho el usuario desde la parte superior del documento
        // y cuánto falta para el final.
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Sección 1: Mostrar/Ocultar basado en el scroll desde arriba
        if (scrollY > scrollThreshold) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        const distanceFromBottom = documentHeight - (scrollY + windowHeight);
        const bottomThreshold = 100; // Por ejemplo, a 100px del final de la página

        if (distanceFromBottom < bottomThreshold) {
             scrollToTopBtn.style.display = "block";
        } else {
            if (scrollY <= scrollThreshold) {
                 scrollToTopBtn.style.display = "none";
            }
        }
    });

    // Función para desplazarse al inicio de la página suavemente
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Hace el scroll animado y suave
        });
    });
}