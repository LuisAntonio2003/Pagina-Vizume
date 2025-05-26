// Añade este código en un bloque de script al final de tu index.html
// O mejor, en un nuevo archivo JS como 'assets/js/contact-form.js'
// y lo enlazas en tu HTML: <script src="assets/js/contact-form.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Evita el envío tradicional del formulario

            const formData = new FormData(contactForm);
            // formData.append('nombre', document.getElementById('nombre').value); // Ya lo hace FormData
            // formData.append('email', document.getElementById('email').value);
            // formData.append('mensaje', document.getElementById('mensaje').value);

            try {
                // Reemplaza 'http://tudominio.com/send_email.php' con la ruta real a tu script PHP
                const response = await fetch('http://localhost/Pagina-Vizume/backend/send_email.php', { // CAMBIA ESTO EN PRODUCCIÓN
                    method: 'POST',
                    body: formData // FormData se encarga de setting Content-Type: multipart/form-data
                });

                const result = await response.json(); // Espera la respuesta JSON del servidor

                if (result.status === 'success') {
                    formMessage.style.color = 'green';
                    formMessage.textContent = result.message;
                    contactForm.reset(); // Limpia el formulario después del envío exitoso
                } else {
                    formMessage.style.color = 'red';
                    formMessage.textContent = result.message;
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                formMessage.style.color = 'red';
                formMessage.textContent = 'Ocurrió un error de red. Inténtalo de nuevo.';
            }
        });
    }
});