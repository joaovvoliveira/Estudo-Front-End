function preventFormSubmit() {
  function handleForm(event) {
    event.preventDefault();
  }
}

function formatNumber(num) {
  return new Intl.NumberFormat("pt-BR").format(num);
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const campos = [];

for (let i = 1; i <= 12; i++) {
  campos[i] = document.querySelector(`#campo${i}`);
}

const btn = document.getElementById("btnCalcular");
btn.addEventListener("click", () => {
  campo1 = parseInt(num1.value);
  campo2 = parseInt(num2.value);
  console.log(campo1, campo2);
  if (isNaN(campo1) || isNaN(campo2)) {
    alert("Favor Preencher Corretamente !");
  } else {
    campos[1].value = formatNumber(campo1 + campo2);
    campos[2].value = formatNumber(campo1 - campo2);
    campos[3].value = formatNumber(campo2 - campo1);
    campos[4].value = formatNumber(campo1 * campo2);
    if (campo2 === 0) {
      campos[5].value = "Divisão por 0";
    } else {
      campos[5].value = formatNumber(campo1 / campo2);
    }
    campos[6].value = formatNumber(campo2 / campo1);
    campos[7].value = formatNumber(campo1 * campo1);
    campos[8].value = formatNumber(campo2 * campo2);

    campos[9].value = fatorial(campo1) + " (" + fatorial(campo1).length + ")";
    campos[10].value = fatorial(campo2) + " (" + fatorial(campo2).length + ")";
    let resultado = 1;
    let count = 1;
    if (campo1 <= 21) {
      while (count <= campo1) {
        resultado *= count;
        count++;
      }
      campos[11].value = formatNumber(resultado);
    } else {
      campos[11].value = "Número muito grande";
    }
    resultado = 1;
    count = 1;
    if (campo2 <= 21) {
      while (count <= campo1) {
        resultado *= count;
        count++;
      }
      campos[12].value = formatNumber(resultado);
    } else {
      campos[12].value = "Número muito grande";
    }
  }
});

function start() {
  preventFormSubmit();
}

function fatorial(num) {
  let fatorial = [];
  for (let index = 1; index <= num; index++) {
    if (num % index === 0) {
      fatorial.push(index);
    }
  }
  return fatorial;
}
