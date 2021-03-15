// Menu Mobile
function menuMobile(){
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
}
menuMobile()

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
