/*let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }*/

let slideIndex = 1;
let autoSlide;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  clearTimeout(autoSlide);
  showSlides(slideIndex += n);
  startAutoSlides();
}

function currentSlide(n) {
  clearTimeout(autoSlide);
  showSlides(slideIndex = n);
  startAutoSlides();
}

function startAutoSlides() {
  autoSlide = setTimeout(() => {
    plusSlides(1);
  }, 2000);
}

// Iniciar slideshow automático
showSlides(slideIndex);
startAutoSlides(); 