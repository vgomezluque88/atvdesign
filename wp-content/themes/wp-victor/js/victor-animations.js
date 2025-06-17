function typeWriterEffect(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    console.log(element);

    const text = element.textContent.trim(); // Obtener el texto original
    element.innerHTML = ""; // Limpiar el contenido antes de escribir
    let index = 0;
    console.log(text);
    function typeEffect() {
        if (index < text.length) {
            const char = text[index] === " " ? " " : text[index]; // Mantener espacios visibles
            element.innerHTML += char;
            index++;
            setTimeout(typeEffect, Math.random() * 100); // Variar velocidad entre 50-200ms
        }
    }

    typeEffect(); // Iniciar efecto
}


