window.addEventListener('load', start)

function start(){
    console.log('Página Iniciada com sucesso')

    var input = document.querySelector('#inputNome')
    input.addEventListener('keyup', countNum)

    var form = document.querySelector('form')
    form.addEventListener('submit', prevencao)
}

function countNum(event){
    var contador = event.target.value;
    var span = document.querySelector('#qtdLetra')
    span.textContent = contador.length
}

function prevencao(event){
    event.preventDefault();
    var input = document.querySelector('#inputNome')
    
    alert(input.value + ' ' + 'Cadastrado com sucesso')
}

var lista = document.querySelector('.text-form p')

lista.classList.add('blue')

