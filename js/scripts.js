const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const message = document.querySelector('#message');

form.addEventListener('submit',(event)=>{
    event.preventDefault();//Previne de enviar antes de fazer as validações

    //Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert('Por favor, preencha seu nome!')
        return
    }
    //Verifica se o email está preechido e é válido
    if(emailInput.value === "" || !validaEmail(emailInput.value)){
        alert('Por favor, preencha seu email!')
        return
    }
    //Verifica se a senha está preenchida
    if(!validaSenha(passwordInput.value, 8)){
        alert('A senha precisa de no mínimo 8 carácteres!')
        return
    }
    //Verifica se a situação foi selecionada
    if(jobSelect.value === ""){
        alert('Por favor, selecione a sua situação!')
        return
    }
    //Verifica se tem mensagem
    if(message.value === ""){
        alert('Escreva uma mensagem!')
        return
    }

    //Se estiver tudo preenchido, envia o form
    form.submit();
})

//Função que valida o email
function validaEmail(email){
    //cria regex para validar
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

//Função que valida a senha
function validaSenha(password, minDigits){
    if(password.length >= minDigits){
        //senha válida
        return true;
    }
    //senha inválida
    return false;
}


