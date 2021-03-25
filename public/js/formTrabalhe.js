const Form = {
    fullName: document.querySelector('#fullName'),
    whatsappOpportunity: document.querySelector('#whatsappOpportunity'),
    emailOpportunity: document.querySelector('#emailOpportunity'),
    subjectOpportunity: document.querySelector('#subjectOpportunity'),
    instructionsOpportunity: document.querySelector('#instructionsOpportunity'),
    fileCurriculum:document.querySelector('#fileCurriculum'),

    getValues(){
        return {
            fullName: Form.fullName.value,
            whatsappOpportunity: Form.whatsappOpportunity.value,
            emailOpportunity: Form.emailOpportunity.value,
            subjectOpportunity: Form.subjectOpportunity.value,
            instructionsOpportunity: Form.instructionsOpportunity.value,
            fileCurriculum: Form.fileCurriculum.value,
        }
    },

    validateFields(){
        const {fullName, whatsappOpportunity, emailOpportunity, subjectOpportunity,instructionsOpportunity, fileCurriculum} = Form.getValues()

        if( fullName.trim() === "" && whatsappOpportunity.trim() === "" && emailOpportunity.trim() === "" && subjectOpportunity.trim() === "" && instructionsOpportunity.trim() === "" && fileCurriculum.trim() === "" ){
            throw new Error("Por favor, preencha todos os campos!")
        }
    },
 
    clearFields(){
        Form.fullName.value = ""
        Form.whatsappOpportunity.value = ""
        Form.emailOpportunity.value = ""
        Form.subjectOpportunity.value = ""
        Form.instructionsOpportunity.value = ""
        Form.fileCurriculum.value = ""
    },

    submit(event){
        event.preventDefault()

        try {
            // Verificar se todas as informações foram preenchidas
            Form.validateFields()
            // limpar o form
            Form.clearFields()
            swal({
                title : "Seu currículo foi enviado com sucesso! " , 
                text : "Boa sorte!" , 
                icon : "success" , 
                button : " Fechar " , 
            })
        } catch (error) {
            alert(error.message)
        } 
    }
}

const mask = {
    phone(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
}

function maskUtils(){
    let whatsappOpportunity = document.querySelector('#whatsappOpportunity') 
    whatsappOpportunity.addEventListener('input', (e) => {
        e.target.value = mask.phone(e.target.value)
    }, false)  
}
maskUtils()
