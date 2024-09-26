let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);
function MiFuncion() {
    // aquí se define el ID del elemento que va a tomar la clase
  var x = document.getElementById("navegador");
  if (x.className === " ") {
      // esta es la clase que se agrega al elemento con eo id="navegador"
    x.className += "responsive";
  } else {
    x.className = " ";
  }
}