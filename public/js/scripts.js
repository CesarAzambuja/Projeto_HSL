// Menu Mobile
let el = document.querySelector('.active')
el.addEventListener('click', () => {
    // Queremos mostrar o menu
    let menuItems = document.querySelector('.menu_mobile ul')

    // verifica se a classe existe, se existir ele remove a classe para mostrar e adiciona a classe para esconder
    if(menuItems.classList.contains('show')){
        menuItems.classList.add('hide')
        menuItems.classList.remove('show')
    }
    // Se a classe não existir, ele adiciona a classe para mostrar e remove a classe "oculta"
    else{
        menuItems.classList.add('show')
        menuItems.classList.remove('hide')
    }
})

// Funcionalidade do scroll top
window.onscroll = function(){
    scroll()
}

function scroll(){
    let btn_top = document.querySelector('#btn_top')
    if (document.documentElement.scrollTop > 50){
        btn_top.style.display = "block"
    }else{
        btn_top.style.display = "none"
    }
}

function backToTop(){
    document.documentElement.scrollTop = 0
}


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