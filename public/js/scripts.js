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

function prontoAtendimento(){
    const modal = document.querySelector(".modal")
    const modalOverlay = document.querySelector(".modal-overlay")

    modal.classList.add("ativo")
    modalOverlay.classList.add("ativo")

    modalOverlay.innerHTML = `<h2>Pronto Atendimento</h2>
    <ul>
        <li>Clínica Médica</li>
        <li>Ginecologia</li>
        <li>Obstetrícia</li>
        <li>Ortopedia-Traumatologia</li>
    </ul>

    <h2>Especialidades de apoio e retaguarda</h2>
    <ul>
        <li>Anestesiologia</li>
        <li>Bucomaxilo</li>
        <li>Cabeça e Pescoço</li>
        <li>Cardiologia</li>
        <li>Cirurgia Geral</li>
        <li>Cirurgia Bucomaxilofacial</li>
        <li>Cirurgia Cardiológica</li>
        <li>Cirurgia Toráxica</li>
        <li>Endoscopia / Colonoscopia</li>
        <li>Nefrologia</li>
        <li>Neonatologia</li>
        <li>Neurocirurgião</li>
        <li>Neurologia Clínica</li>
        <li>Pneumologia</li>
        <li>Terapia Intensiva Adulto</li>
        <li>Vascular</li>

    </ul>
    <button onclick="closeModal()" class="btn btn-close">Fechar!</button>
    `
}

function maternidade(){
    const modal = document.querySelector(".modal")
    const modalOverlay = document.querySelector(".modal-overlay")

    modal.classList.add("ativo")
    modalOverlay.classList.add("ativo")

    modalOverlay.innerHTML =`<h2>Momento especial</h2>
    <img src="/images/maternidade-sao-lucas.jpg" alt="">
    <p>É chegado o mais novo membro da família. Todos os olhares se voltam a ele. Um misto de ansiedade, apreensão, amor e paz toma conta de cada integrante da família, devido à preocupação e felicidade geradas por tão importante momento.</p>
    <br />
    <p>Profundamente envolvida com o nascimento, a Maternidade São Lucas dispõe de infraestrutura e equipe preparadas para receber cada nova vida e cada familiar com a atenção que o momento precisa. São 3 salas para partos cesárea e normal, com equipamentos de última geração que dão à equipe de neonatologistas o respaldo necessário para tratar, 24 horas por dia, dos recém-nascidos, que tanto necessitam de cuidados especiais.</p>
    <br />
    <p class="small">* Para agendar uma visita e conhecer nossa maternidade, entre em contato pelo telefone ou pelo fale conosco no nosso site.</p>

    <div class="button-flex">
        <a href="images/relacao-de-roupas.pdf" target="_blank" class="btn btn-close">Veja o que levar!</a>
        <button onclick="closeModal()" class="btn btn-close">Fechar!</button>
    </div>
    `
}

function visitante(){
    const modal = document.querySelector(".modal")
    const modalOverlay = document.querySelector(".modal-overlay")

    modal.classList.add("ativo")
    modalOverlay.classList.add("ativo")

    modalOverlay.innerHTML =`<h2>Assistência médica e enfermagem</h2>
    <p>É proibida a interferência de qualquer pessoa na assistência prestada ao paciente, bem como nos seus prontuários.</p>
    <h2>Horários para visita</h2>
    <div class="horarios">
        <p>Maternidade Enfermaria (Semi-Privativo):</p>
        <p>das 14 às 21h
        03 pessoas (01 acompanhante + 02 visitas ou 03 visitas)</p>

        <p>Apartamentos Maternidade:</p>
        <p>das 9h às 21h
        06 pessoas (01 acompanhante + 05 visitas ou 06 visitas sem acompanhante)</p>

        <p>Apartamentos Semiprivativos:</p>
        <p>das 13h às 14h e das 20h às 21h
        03 pessoas</p>

        <p>UTI Adulto (Manhã):</p>
        <p>das 11h30 às 12h (com boletim médico)
        03 pessoas sem revezamento</p>

        <p>UTI Adulto (Noite):</p>
        <p>das 20h30 às 21h (sem boletim médico)
        03 pessoas sem revezamento</p>

        <p>UTI Neonatal:</p>
        <p>das 13h30 às 14h e das 20h às 20h30
        02 pessoas sem revezamento</p>
    </div>

    <div class="button-flex">
        <a href="images/mais-info.pdf" target="_blank" class="btn btn-close">Mais informações!</a>
        <button onclick="closeModal()" class="btn btn-close">Fechar!</button>
    </div>
    `
}

function rotinaInternacao(){
    const modal = document.querySelector(".modal")
    const modalOverlay = document.querySelector(".modal-overlay")

    modal.classList.add("ativo")
    modalOverlay.classList.add("ativo")

    modalOverlay.innerHTML =`<h2>Internação</h2>
    <p>O cliente ou seu responsável deverá fornecer todos os dados de identificação solicitados, bem como apresentar os documentos necessários (RG, CPF, carteirinha de convênio). A internação só poderá ser realizada a partir de um pedido médico, seja em uma cirurgia eletiva ou internações de emergência.</p>

    <br />

    <p>Para internações eletivas (cirurgias programadas), o cliente, munido de pedido médico, poderá realizar uma pré-internação, fornecendo todas as informações necessárias para mais agilidade no dia da internação. Em alguns casos, dependendo do convênio, o cliente deverá entregar guia já autorizada na sua pré-internação.</p>

    <div class="button-flex">
        <a href="images/hospitalar.pdf" target="_blank" class="btn btn-close">Mais informações!</a>
        <button onclick="closeModal()" class="btn btn-close">Fechar!</button>
    </div>
    `
}

function closeModal(){
    const modal = document.querySelector(".modal")
    const modalOverlay = document.querySelector(".modal-overlay")
    modal.classList.remove("ativo")
    modalOverlay.classList.remove("ativo")

}


