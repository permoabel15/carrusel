function typeWriter(text, elementId, speed = 80) {
    const el = document.getElementById(elementId);
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            el.style.borderRight = "none";

            // 👇 Mostrar botón para reiniciar cuando termina el texto
            document.getElementById("restartBtn").style.display = "inline-block";
        }
    }, speed);
}

document.getElementById("startBtn").addEventListener("click", () => {
    // Ocultar el botón de inicio
    document.getElementById("startBtn").style.display = "none";

    // Mostrar el carrusel
    document.querySelector(".carousel").style.display = "block";

    // Reproducir música
    const music = document.getElementById("myMusic");
    music.play().catch(err => console.warn("Autoplay bloqueado:", err));

    // Iniciar carrusel automático
    const images = document.querySelector('.images');
    const totalImages = document.querySelectorAll('.images img').length;
    const transitionDuration = 3000;

    let index = 0;

    function updateCarousel() {
        images.style.transform = `translateX(-${index * 100}%)`;
    }

    const interval = setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, transitionDuration);

    // Mostrar el corazón con el mensaje después del carrusel
    setTimeout(() => {
        clearInterval(interval);
        document.querySelector('.carousel').style.display = 'none';
        const heart = document.querySelector('.heart-container');
        heart.style.display = 'flex';
        typeWriter("Gracias por estos 6 meses, te amo ❤️", "loveText", 80);
    }, totalImages * transitionDuration);
});

// 👇 Botón para reiniciar toda la experiencia
document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});