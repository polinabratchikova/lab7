const sliderLine = document.querySelector('.sliderLine');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
let offset = 256;

btnLeft.addEventListener('click', sLeft);
btnRight.addEventListener('click', sRight);

function sLeft() {
    if (offset === 0) {
        offset = 1280;
    }
    offset -= 256;
    sliderLine.style.left = -offset + 'px';
}

function sRight() {
    sliderLine.style.left = - offset + 'px';
    offset = offset + 256;
    if (offset === 1280) {
        offset = 0;
        } 
}
