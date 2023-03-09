

const images = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
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



    const newImageWrapper = `<div class="image-wrapper">
                                <img class="th-img" src="${element.image}" />
                                <div class="tx-info"> 
                                <h3>${element.title}</h3>
                                <p>${element.text}</p>
                                </div>
                            </div>`;

    const newThumb = `<div class="thumb-wrapper ">
    <img class="th-img" src="${element.image}" alt="">
   </div>`;

    sliderContent += newImageWrapper;       
    thumbContent += newThumb;

imageListDom.innerHTML += sliderContent;
thumbsContainerDom.innerHTML += thumbContent;

}
const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const thumbesDom = document.getElementsByClassName('thumb-wrapper');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show'); 
thumbesDom[activeImage].classList.add('active');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');


// Negazione in sotto 
nextDom.addEventListener('click', 

    function() {
        console.log(activeImage);
    
            imagesWrapperDom[activeImage].classList.remove('show');
            thumbesDom[activeImage].classList.remove('active');
            if (activeImage == imagesWrapperDom.length - 1){
                activeImage = 0;
            }else{
                activeImage = activeImage + 1;
            }
            
            imagesWrapperDom[activeImage].classList.add('show');
            thumbesDom[activeImage].classList.add('active');

    }
);
// Negazione in sopra 
prevDom.addEventListener('click', 
    function() {
        console.log(activeImage);
      
            imagesWrapperDom[activeImage].classList.remove('show');
            thumbesDom[activeImage].classList.remove('active');
            if (activeImage == 0){
                activeImage = imagesWrapperDom.length - 1;
            }else{
                activeImage--;
            }
            
            imagesWrapperDom[activeImage].classList.add('show');
            thumbesDom[activeImage].classList.add('active');

    }
);


// Negazione in avanti con intervallo
const intervalImages = setInterval(function(){
    imagesWrapperDom[activeImage].classList.remove('show');
    thumbesDom[activeImage].classList.remove('active');
    if (activeImage == imagesWrapperDom.length - 1){
        activeImage = 0;
    }else{
        activeImage = activeImage + 1;
    }
    
    imagesWrapperDom[activeImage].classList.add('show');
    thumbesDom[activeImage].classList.add('active');

}, 3000)

// Al click sull'immagine del thumb cambio immagine 
for (let i = 0; i < thumbesDom.length; i++){
    let thisThumb = thumbesDom[i];
    thisThumb.addEventListener("click", function(){
        imagesWrapperDom[activeImage].classList.remove('show');
        thumbesDom[activeImage].classList.remove('active');
        activeImage = i;
        
        imagesWrapperDom[activeImage].classList.add('show');
        thumbesDom[activeImage].classList.add('active');

    })
}