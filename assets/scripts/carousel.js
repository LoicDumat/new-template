const CAROUSEL_IMG = document.querySelector(".carousel__image")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK = document.querySelector (".carousel__backButton") 
const IMAGES = [

    "img/COLOURBOX2556345-gallery1.jpg", 
    "img/COLOURBOX2002681-cooking.jpg",
    "img/conference2.jpg",
    "img/COLOURBOX1123234-slider3.jpg",
    "img/teamspirit.jpg",
    "img/reception1.jpg"
    
    
    ] 
const IMAGE_TEXT = [
    "STEMNING", 
    "RAMME",
    "HOLDÅND", 
    "text for image 4", 
    "text for image 5"
] 


var index = 0
CAROUSEL_IMG.src = IMAGES[index]

CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
CAROUSEL_FORWARD.addEventListener('keyup', shuffleForward)
CAROUSEL_BACK.addEventListener("click", shuffleBack)  
CAROUSEL_BACK.addEventListener('keyDown', shuffleBack)  



function shuffleForward(event) {
    index++
    if (IMAGES.length === index) {
        index = 0
    }
    
    updateCarousel();
    
    CAROUSEL_IMG.src = IMAGES[index]
}

function shuffleBack(event) {
    index--
    if (index < 0) {
        index = IMAGES.length - 1
    }

    updateCarousel();
    CAROUSEL_IMG.src = IMAGES [index]
}


function updateCarousel() {
    CAROUSEL_IMG.src = IMAGES[index];
    document.querySelector(".image__h2").textContent = IMAGE_H2[index];
    document.querySelector(".image__h1").textContent = IMAGE_H1[index];
    document.querySelector(".image__text").textContent = IMAGE_TEXT[index];
  }

IMAGES.forEach(function (){
    const button = document.createElement("button")
    button.classList.add("pagination__button");
    button.addEventListener("click", shuffleBack, shuffleForward)
    button.dataset.index = 
    document.querySelector(".pagination").append(button)
})


window.addEventListener('keyup', arrowUp)
window.addEventListener('keydown', arrowDown)

function arrowDown(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  key.classList.add('press')
}
function arrowUp(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
   key.classList.remove('press')
}