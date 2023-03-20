const $input = document.querySelectorAll("input[data-input]")

$input.forEach(elemento => {
    elemento.addEventListener('blur', input => {
        validaInput(input.target)
    })
});

function validaInput(input) {
    let inputAtual = input.dataset.input
    
    if(!input.validity.valid){
        console.log('erro')
        document.querySelector(`label[for="${inputAtual}"]`).innerHTML = mostraMensagemDeErro(inputAtual, input)
    } else {
	document.querySelector(`label[for="${inputAtual}"]`).innerHTML = "";
    }

    
}

const tipoDeErros = [
    'patternMismatch',
    'typeMismatch',
    'valueMissing'
]

const mensagensDeErros = {
    nome : {
        valueMissing :`Este campo não pode estar vazio! Favor adicionar um nome.`
    },
    email: {
	valueMissing: `Este campo não pode estar vazio! Favor adicionar um email.`,
	patternMismatch: `O email deve seguir um padrão com user@dominio.com`,
	typeMismatch: `O email digitado não é valido, adicione um email valido.` 
    },
    assunto: {
	valueMissing: `Este campo não pode estar vazio! Favor adicionar um assunto.`
    },
    mensagem: {
	valueMissing: `A mensagem não pode estar vazia.`
    }
}

function mostraMensagemDeErro(tipoDoInput, input) {
    let mensagemDoErro = "";
    
    tipoDeErros.forEach(erro => {
        if(input.validity[erro])
	    mensagemDoErro = mensagensDeErro[tipoDeInput][erro]);
    });

    return mensagemDoErro;
}

