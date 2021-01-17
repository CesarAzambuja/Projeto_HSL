let el = document.querySelector('.open')
el.addEventListener('click', () => {
    // Queremos mostrar o menu
    let menuItems = document.querySelector('.menu_mobile')

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