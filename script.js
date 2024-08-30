let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides(carouselNumber, index) {
    const carousel = document.getElementById(`carousel${carouselNumber}`);
    const slides = carousel.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");

    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";

    if (carouselNumber === 1) {
        slideIndex1 = index;
    } else {
        slideIndex2 = index;
    }
}

function prevSlide(carouselNumber) {
    if (carouselNumber === 1) {
        slideIndex1--;
        showSlides(1, slideIndex1);
    } else {
        slideIndex2--;
        showSlides(2, slideIndex2);
    }
}

function nextSlide(carouselNumber) {
    if (carouselNumber === 1) {
        slideIndex1++;
        showSlides(1, slideIndex1);
    } else {
        slideIndex2++;
        showSlides(2, slideIndex2);
    }
}

// Initialize the slides
showSlides(1, slideIndex1);
showSlides(2, slideIndex2);