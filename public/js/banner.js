//Carrusel banner
let time = 4000
let currentImageIndex = 0
let images = document.querySelectorAll('#slider img')
let max = images.length

function nextImage(){
    // Removemos a classe
    images[currentImageIndex].classList.remove("selected")

    //Incrementamos o index 
    currentImageIndex ++

    //Testamos a comparação para rotacionar e sempre manter o rotativo
    if(currentImageIndex >= max){
        currentImageIndex = 0
    }

    //Adicionamos a classe
    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)