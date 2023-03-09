
const imagesDom = ["img/1.webp", "img/2.webp", "img/3.webp", "img/4.webp", "img/5.webp"];

const imageListDom = document.querySelector('.image-list');
const circleContainerDom = document.querySelector('.circle-container');

let sliderContent = "";
let circleContent = "";

for (let i = 0; i < imagesDom.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesDom[i]}" />
                            </div>`;

    const newCircle = `<div class="circle"><img class="image" src="${imagesDom[i]}" /></div>`;
    sliderContent += newImageWrapper;       
    circleContent += newCircle;
}

imageListDom.innerHTML = sliderContent;
circleContainerDom.innerHTML = circleContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const circlesDom = document.getElementsByClassName('circle');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); 
circlesDom[activeImage].classList.add('current');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 

    function() {
        console.log(activeImage);
        if (activeImage < imagesWrapperDom.length - 1) {

            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
            activeImage++;
            imagesWrapperDom[activeImage].classList.add('show');
            circlesDom[activeImage].classList.add('current');
            prevDom.classList.remove('hide');

            if (activeImage == imagesWrapperDom.length - 1) {
               
            }
        }else{
            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
           
            if (activeImage == imagesWrapperDom.length - 1) {
               
            }
        activeImage = 0;
            
        }
    }
);

prevDom.addEventListener('click', 
    function() {
        console.log(activeImage);
        if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
            activeImage--;
            imagesWrapperDom[activeImage].classList.add('show');
            circlesDom[activeImage].classList.add('current');

            nextDom.classList.remove('hide');

            if (activeImage == 0) {
               
            }

        }else{
            activeImage == 0;
            activeImage = imagesWrapperDom.length - 1;
            
        }
    }
);