// Input do Upload dos arquivos
function upLoadInput(){
    let appear = document.querySelector('.hidden')
    appear.addEventListener('click', () => {
        if(appear.classList.contains('hidden')){
            appear.classList.add('appear')
            appear.classList.remove('hidden')
        }
    })
}

// Função para o formulário
function submit(e){
    e.preventDefault()

    try {
        // Verificar se todas as informações foram preenchidas
        Form.validateFields()

        // Formatar os dados para salvar
        const transaction = Form.formatValues()

        // salvar
        Transaction.add(transaction)

        // limpar o form
        Form.clearFields()

        // Modal feche
        // Modal.abrir()
    } catch (error) {
        alert(error.message)
    }


}

upLoadInput()