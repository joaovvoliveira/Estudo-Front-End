window.addEventListener("load", () => {
  const txt1 = document.querySelector("#txtNome");
  const valor = document.querySelector("#teste");
  txt1.onchange = () => {
    valor.value = txt1.value;
  };

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", "https://globoesporte.globo.com");
  linkElement.setAttribute("target", "_blank");
  const textLink = document.createTextNode("Globoesporte");
  linkElement.appendChild(textLink);
  const div = document.querySelector("#app");
  div.appendChild(linkElement);

  const testar = Array.from(document.querySelectorAll("input[type=text]"));
  for (let i = 0; i < testar.length; i++) {
    testar[i].classList.add("inputs");
    console.log(testar[i]);
  }
});
