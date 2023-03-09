
const imagesDom = ["img/1.webp", "img/2.webp", "img/3.webp", "img/4.webp", "img/5.webp"];
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
for (let i = 0; i < images.length; i++){
    let element = images[i];
    console.log(element);
 for(let key in element){
    console.log(element[key]);
 }
const imageListDom = document.querySelector('.image-list');
const thumbsContainerDom = document.querySelector('.thumbs-container');

let sliderContent = "";
let thumbContent = "";


for (let i = 0; i < imagesDom.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="th-img" src="${imagesDom[i]}" />
                                <h3>${element.title}</h3>
                                <p>${element.text}</p>
                            </div>`;

    const newThumb = `<div class="thumb-wrapper ">
    <img class="th-img" src="${imagesDom[i]}" alt="">
   </div>`;
    sliderContent += newImageWrapper;       
    thumbContent += newThumb;
}

imageListDom.innerHTML = sliderContent;
thumbsContainerDom.innerHTML = thumbContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const thumbesDom = document.getElementsByClassName('thumb-wrapper');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); 
thumbesDom[activeImage].classList.add('active');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 

    function() {
        console.log(activeImage);
       // if (activeImage < imagesWrapperDom.length - 1) {

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbesDom[activeImage].classList.remove('active');
            if (activeImage == imagesWrapperDom.length - 1){
                activeImage = 0;
            }else{
                activeImage = activeImage + 1;
            }
            
            imagesWrapperDom[activeImage].classList.add('show');
            thumbesDom[activeImage].classList.add('active');

            /*   prevDom.classList.remove('hide');

         if (activeImage == imagesWrapperDom.length - 1) {
               
            }
        }else{
            imagesWrapperDom[activeImage].classList.remove('show');
            circlesDom[activeImage].classList.remove('current');
           
            if (activeImage == imagesWrapperDom.length - 1) {
               
            }
        activeImage = 0;
            */
       // }
    }
);

prevDom.addEventListener('click', 
    function() {
        console.log(activeImage);
       // if (activeImage > 0) {

            imagesWrapperDom[activeImage].classList.remove('show');
            thumbesDom[activeImage].classList.remove('active');
            if (activeImage == 0){
                activeImage = imagesWrapperDom.length - 1;
            }else{
                activeImage--;
            }
            
            imagesWrapperDom[activeImage].classList.add('show');
            thumbesDom[activeImage].classList.add('active');

            /*nextDom.classList.remove('hide');

            if (activeImage == 0) {
               
            }

        }else{
            activeImage == 0;
            activeImage = imagesWrapperDom.length - 1;
            */
       // }
    }
);
}