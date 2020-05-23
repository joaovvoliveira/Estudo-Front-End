window.addEventListener('load', start)

const pessoa = {nome,email,cpf,curso};

var txtNome = document.querySelector('#txtNome')
var txtEmail = document.querySelector('#txtEmail')
var txtCpf = document.querySelector('#txtCpf')
var txtCurso = document.querySelector('#opcCursos')

    function start(){
        formPrevent();
        adicionarDados();
    }

    function limparCampos(){
        txtNome.value = "";
        txtEmail.value = "";
        txtCpf.value = "";
        txtCurso.value = "";
    }

    function formPrevent(){
        var form = document.querySelector('form')
        form.addEventListener('submit', prevencao)

        function prevencao(event){
            event.preventDefault();
        }
    }

    function adicionarDados(){
        var btnEnviar = document.querySelector('#btnEnviar')
        btnEnviar.addEventListener('click', enviarDados)
        for(let i = 0; i <= pessoa.lenght; i++)
        {
            console.log(i)
            function enviarDados(){
            pessoa.nome[i] = txtNome.value;
            pessoa.email[i] = txtEmail.value;
            pessoa.cpf[i] = txtCpf.value;
            pessoa.curso[i] = txtCurso.value;
            alert(`Cadastrado com sucesso!
            Nome: ${nome[i]},
            Email:${email[i]}
            CPF:${cpf[i]}`);
            limparCampos();
            }
        }
    }
