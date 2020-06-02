window.addEventListener("load", () => {
  const div = document.querySelector("#quadrados");
  const btnAdd = document.querySelector("#add");
  const btnRem = document.querySelector("#rem");

  btnAdd.addEventListener("click", adicionar);
  function adicionar() {
    const quad = document.createElement("div");
    div.appendChild(quad);
    quad.classList.add("quadrado");
    quad.addEventListener("mouseover", cor);
    function cor() {
      quad.style.background = getRandomColor();
    }
  }

  btnRem.addEventListener("click", remover);
  function remover() {
    const quad = Array.from(document.querySelectorAll(".quadrado"));
    let num = quad.length;
    div.removeChild(quad[num - 1]);
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var newColor = getRandomColor(); // #E943F0
});
