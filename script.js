let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none'; // Oculta a imagem atual
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Calcula o novo índice
    slides[currentSlide].style.display = 'block'; // Exibe a nova imagem
}

function setSlide(index) {
    slides[currentSlide].style.display = 'none'; // Oculta a imagem atual
    currentSlide = index; // Define o novo índice
    slides[currentSlide].style.display = 'block'; // Exibe a nova imagem
}
