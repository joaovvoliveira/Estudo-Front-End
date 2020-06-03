async function apis() {
  const res = await fetch(
    "https://github.com/felipefdl/cidades-estados-brasil-json"
  );
  const json = await res.json();
  console.log(json);
}
apis();

const listElement = document.querySelector("ul");
const inputElement = document.querySelector("#inputNome");
const btnElement = document.querySelector("#btnAdd");

var todos = JSON.parse(localStorage.getItem("list_Todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_Todos", JSON.stringify(todos));
}

/*






<li>
        Fazer Café
        <a href="#">Excluir</a>
      </li>
      <li>
        Estudar Javascript
        <a href="#">Excluir</a>
      </li>
      <li>
        Acessar Igti
        <a href="#">Excluir</a>
      </li>
*/
