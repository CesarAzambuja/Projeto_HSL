function clickButton(){
    let ortopediaT = document.querySelector('.ortopediaT')
    let ortopediaE = document.querySelector('.ortopediaE')
    let especialidadeC = document.querySelector('.especialidadeC')
    let ginecologiaObs = document.querySelector('.ginecologiaObs')

    ortopediaT.addEventListener('click', () => {
        ortopediaT.classList.toggle('selecionado')
        document.querySelector('#orto').classList.toggle("oculto")
    })

    ortopediaE.addEventListener('click', () => {
        ortopediaE.classList.toggle('selecionado')
        document.querySelector('#ortoEsp').classList.toggle("oculto")
    })

    especialidadeC.addEventListener('click', () => {
        especialidadeC.classList.toggle('selecionado')
        document.querySelector('#cdt').classList.toggle("oculto")
    })

    ginecologiaObs.addEventListener('click', () => {
        ginecologiaObs.classList.toggle('selecionado')
        document.querySelector('#gineObs').classList.toggle("oculto")
    })
}
clickButton()
