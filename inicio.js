function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('show');
}
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".zoom-text");
    const letters = text.textContent.split("");
    text.textContent = "";

    letters.forEach((letter, index) => {
        const efecto = document.createElement("efecto");
        efecto.textContent = letter;
        efecto.style.animationDelay = `${index * 0.02}s`;
        text.appendChild(efecto);
    });
});
