window.addEventListener("load", start);

const globalNames = [
  "João",
  "Maria",
  "Jaqueline",
  "Shirley",
  "Cássio",
  "Mariana",
];
let inputName = null;
let isEditing = false;
let indiceAtual = null;

function start() {
  inputName = document.querySelector("#iptValue");

  prevencao();
  ativarInput();
  render();
}

function prevencao() {
  function prevencaoForm(event) {
    event.preventDefault();
  }
  let form = document.querySelector("form");
  form.addEventListener("submit", prevencaoForm);
}

function ativarInput() {
  function inserirNome(newName) {
    globalNames.push(newName);
    render();
  }

  function atualizarNome(novoNome) {
    globalNames[indiceAtual] = novoNome;
    render();
  }

  function textoInput(event) {
    if (event.key === "Enter") {
      if (isEditing) {
        atualizarNome(event.target.value);
      } else {
        const novoNome = event.target.value;
        inserirNome(novoNome);
        inputName.value = "";
      }
      isEditing = false;
    }
  }

  inputName.focus();
  inputName.addEventListener("keyup", textoInput);
}

function render() {
  function criarBotao(index) {
    function deletarNome() {
      globalNames.splice(index, 1);
      render();
    }

    const button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("botao");

    button.addEventListener("click", deletarNome);

    return button;
  }
  function criarSpan(nome, index) {
    function alterarNome() {
      inputName.value = nome;
      inputName.focus();
      isEditing = true;
      indiceAtual = index;
    }

    const span = document.createElement("span");
    span.textContent = nome;
    span.classList.add("clicavel");

    span.addEventListener("click", alterarNome);

    return span;
  }

  const divNomes = document.querySelector("#divValores");
  divNomes.innerHTML = "";

  const ul = document.createElement("ul");

  for (let i = 0; i < globalNames.length; i++) {
    const nomeAtual = globalNames[i];

    const li = document.createElement("li");

    const button = criarBotao(i);
    const span = criarSpan(nomeAtual, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNomes.appendChild(ul);
}
