const FormMater = {
    nomeMater:document.querySelector('#nomeMater'),
    emailMater:document.querySelector('#emailMater'),
    mensagemMater:document.querySelector('#mensagemMater'),

    getValues(){
        return {
            nomeMater:FormMater.nomeMater.value,
            emailMater:FormMater.emailMater.value,
            mensagemMater:FormMater.mensagemMater.value,
        }
    },

    validateFields(){
        const {nomeMater, emailMater, mensagemMater} = FormMater.getValues()

        if( nomeMater.trim() === "" && emailMater.trim() === "" && mensagemMater.trim() === ""){
            throw new Error("Por favor, preencha todos os campos!")
        }
    },
 
    clearFields(){
        FormMater.nomeMater.value = ""
        FormMater.emailMater.value = ""
        FormMater.mensagemMater.value = ""
    },

    submit(event){
        event.preventDefault()

        try {
            // Verificar se todas as informacoes foram preenchidas
            FormMater.validateFields()
            // limpar o FormMater
            FormMater.clearFields()
            swal({
                title : "Mensagem enviada com sucesso!" , 
                text : "Em breve nossa equipe entrará em contato!" , 
                icon : "success" , 
                button : " Fechar " , 
            })
        } catch (error) {
            alert(error.message)
        } 
    }
}