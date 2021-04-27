
var slideIndex = 1;
showSlides(slideIndex);

function plushSlides(n){
    showSlides(slideIndex += n);
}

function dotClick(n){
    if (n != slideIndex) {
        showSlides(slideIndex = n);
    }
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let dotIndex = 0; dotIndex < dots.length; dotIndex ++) {
        dots[dotIndex].className = dots[dotIndex].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active'; 

    // setTimeout(() => {
    //     slideIndex += 1;
    //     showSlides(slideIndex);
    // }, 5000);
}

// (function(){
//     setInterval(() => {
//         slideIndex += 1;
//         showSlides(slideIndex);
//     }, 5000);
// })();