class Pessoa {
  constructor(nome, data) {
    this.nome = nome;
    this.data = data;
  }
}

let dataString = "17-05-2016";

let data = new Date(dataString.split("-").reverse().join("/"));
console.log(data);

function exibeNome() {
  alert(this.nome);
}

let lista1 = ["banana", "laranja", "mamão"];
let lista2 = ["caju", "tangerina", "abacaxi"];

lista1.push(...lista2);
console.log(lista1);

let numbers = [2, 31, 5, 4263, 6, 51, 531];

const num = numbers.map((numb) => (numb % 2 == 0 ? numb * 2 : numb));
console.log(numbers);
console.log(num);
