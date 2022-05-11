// first slider
let slideCounter = 1;
showSlides(slideCounter);

function plusSlide() {
    showSlides(slideCounter += 1);
}
function minusSlide() {
    showSlides(slideCounter -= 1);  
}
function currentSlide(n) {
    showSlides(slideCounter = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("dots__item");
    if (n > slides.length) {
        slideCounter = 1
    }
    if (n < 1) {
        slideCounter = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideCounter - 1].style.display = "block";
    dots[slideCounter - 1].className += " active";
}

// second slider

let count = 1;
carousel(count);

function nextSlide() {
    carousel(count += 1);
}
function prevSlide() {
    carousel(count -= 1);  
}
function openSlide(n) {
    carousel(count = n);
}
function carousel(n) {
    let i;
    let items = document.querySelectorAll(".slider__item");
    if (n > items.length) {
        count = 1
    }
    if (n < 1) {
        count = items.length
    }
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    items[count - 1].style.display = "block";
    
    items[count + 1].classList.toggle('hide');
    setTimeout(() => {
        items[count + 1].classList.remove('hide');
    }, 1000);
}
