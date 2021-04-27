
var currentIndex = 1;
showBanner(currentIndex);

function switchItem(n){
    currentIndex += n;
    showBanner(currentIndex);
}

function dotSwitch(n){
    currentIndex = n;
    showBanner(currentIndex);
}

function showBanner(bannerIndex){
    var banners = document.getElementsByTagName('li');
    var dots = document.getElementsByClassName('dot');
    var numTexts = document.getElementsByClassName('numberText');

    if (bannerIndex > banners.length) {
        bannerIndex = 1;
    }

    if (bannerIndex < 1) {
        bannerIndex = banners.length;
    }

    currentIndex = bannerIndex;
    numTexts[0].innerHTML = currentIndex + '/' + banners.length;

    for (let banI = 0; banI < banners.length; banI++) {
        const element = banners[banI];
        element.style.display = 'none';
    }

    for (let dotI = 0; dotI < dots.length; dotI++) {
        const element = dots[dotI];
        // element.style.backgroundColor = '#bbb';
        var dotClassName = element.className;
        if (dotClassName.indexOf('active')) {
            var newClassName = dotClassName.replace(' active', '');
            element.className = newClassName;
        }
    }
    
    banners[bannerIndex - 1].style.display = 'block';
    // dots[bannerIndex - 1].style.backgroundColor = "#717171";
    dots[bannerIndex - 1].className += " active";

}