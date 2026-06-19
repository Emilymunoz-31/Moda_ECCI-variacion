document.addEventListener("DOMContentLoaded", () => {
    const colorButtons = document.querySelectorAll('.item-color');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const colorCode = button.getAttribute('aria-color');
            navigator.clipboard.writeText(colorCode).then(() => {
                console.log(`¡Color ${colorCode} copiado al portapapeles con éxito!`);
            }).catch(err => {
                console.error('Error al copiar el color: ', err);
            });
        });
    });
});