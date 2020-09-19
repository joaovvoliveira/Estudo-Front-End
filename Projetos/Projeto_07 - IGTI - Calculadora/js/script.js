window.addEventListener("load", start);

function start() {
  preventFormSubmit();
}
function preventFormSubmit() {
  function handleForm(event) {
    event.preventDefault();
  }
}

const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;

const campos = [];
for (let i = 1; i <= 12; i++) {
  campos[i] = document.querySelector(`#campo${i}`);
}

const btn = document
  .getElementById("btnCalcular")
  .addEventListener("click", () => {
    campos[1].value = num1 + num2;
  });
