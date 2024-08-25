const hambutton = document.querySelector('#hamburger-btn');

const menu = document.querySelector('#mobile-menu');

hambutton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const correo = document.querySelector('#correo').textContent.trim();
const correoBtn = document.querySelector('#correoBtn');

correoBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(correo)
                        .then(() => {
                            const notificacion = document.querySelector('#notificacion');
                            notificacion.innerHTML = `
                            <div class="bg-blue-600 text-center rounded-md font-bold p-2">
                                <p>¡Gracias por contactarme!, responderé a la mayor brevedad posible 😀.</p>
                            </div>
                            `;

                            setTimeout(() => {
                                notificacion.innerHTML = "";
                            }, 3000);
                        })
                        .catch(console.log);
});

