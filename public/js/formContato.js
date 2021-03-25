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

const FormContato = {
    name:document.querySelector('#name'),
    whatsapp:document.querySelector('#whatsapp'),
    email:document.querySelector('#email'),
    instructions:document.querySelector('#instructions'),

    getValues(){
        return {
            name:FormContato.name.value,
            whatsapp:FormContato.whatsapp.value,
            email:FormContato.email.value,
            instructions:FormContato.instructions.value,
        }
    },

    validateFields(){
        const {name, whatsapp, email, instructions} = FormContato.getValues()

        if( name.trim() === "" && whatsapp.trim() === "" && email.trim() === "" && instructions.trim() === ""){
            throw new Error("Por favor, preencha todos os campos!")
        }
    },
 
    clearFields(){
        FormContato.name.value = ""
        FormContato.whatsapp.value = ""
        FormContato.email.value = ""
        FormContato.instructions.value = ""
    },

    submit(event){
        event.preventDefault()

        try {
            // Verificar se todas as informacoes foram preenchidas
            FormContato.validateFields()
            // limpar o FormContato
            FormContato.clearFields()
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

function maskUtils(){    
    let whats = document.querySelector('#whatsapp') 
    whats.addEventListener('input', (e) => {
        e.target.value = mask.phone(e.target.value)
    }, false)  
}
maskUtils()