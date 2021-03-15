function clickAppearOrto(){
    let ortopediaT = document.querySelector('.ortopediaT')
    ortopediaT.addEventListener('click', () => {
        
        let oculto = document.querySelector('#orto')
    
        if(oculto.classList.contains('oculto')){
            oculto.classList.remove('oculto')
            ortopediaT.classList.add('selecionado')
        }
        else{
            oculto.classList.add('oculto')
            ortopediaT.classList.remove('selecionado')

        }
    })
}

function clickAppearEsp(){
    let especialidadeC = document.querySelector('.especialidadeC')
    especialidadeC.addEventListener('click', () => {
        
        let oculto = document.querySelector('#cdt')
    
        if(oculto.classList.contains('oculto')){
            oculto.classList.remove('oculto')
            especialidadeC.classList.add('selecionado')
        }
        else{
            oculto.classList.add('oculto')
            especialidadeC.classList.remove('selecionado')
        }
    })
}

function clickAppearOrtoEsp(){
    let ortopediaE = document.querySelector('.ortopediaE')
    ortopediaE.addEventListener('click', () => {
        
        let oculto = document.querySelector('#ortoEsp')
    
        if(oculto.classList.contains('oculto')){
            oculto.classList.remove('oculto')
            ortopediaE.classList.add('selecionado')
        }
        else{
            oculto.classList.add('oculto')
            ortopediaE.classList.remove('selecionado')

        }
    })
}

function clickAppearGine(){
    let ginecologiaObs = document.querySelector('.ginecologiaObs')
    ginecologiaObs.addEventListener('click', () => {
        
        let oculto = document.querySelector('#gineObs')
    
        if(oculto.classList.contains('oculto')){
            oculto.classList.remove('oculto')
            ginecologiaObs.classList.add('selecionado')
        }
        else{
            oculto.classList.add('oculto')
            ginecologiaObs.classList.remove('selecionado')
        }
    })
}

clickAppearOrto()
clickAppearEsp()
clickAppearOrtoEsp()
clickAppearGine()