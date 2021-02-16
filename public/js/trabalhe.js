// Input do Upload dos arquivos
let appear = document.querySelector('.hidden')
appear.addEventListener('click', () => {
    if(appear.classList.contains('hidden')){
        appear.classList.add('appear')
        appear.classList.remove('hidden')
    }
})