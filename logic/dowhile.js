var nome = "a";
do {
  nome = prompt("Insira seu nome:");
} while (nome.length < 5);

// colocando algo invalido nao precisa repetir, e a pergunta é feita

var CPF = "x";
do {
  CPF = prompt("Insira seu CPF:");
} while (CPF.length != 11);

// other exercise

var poupanca = 0;
var deposito;
do {
  deposito = Number(prompt("Quanto vai depositar agora?"));
  if (deposito > 0) {
    poupanca += deposito;
  }
} while (deposito > 0);

document.write("Valor depositado: R$" + poupanca);

// other exercise

var fruta;
var frutas = 0;
do {
  fruta = prompt("Insira o nome de uma fruta:");
  if (fruta !== "") {
    alert(`A fruta ${fruta} faz bem à saúde`);
    frutas++;
  }
} while (fruta !== "");
alert(`Você digitou o nome de ${frutas} frutas`);

// other exercise

var idade;

do {
  idade = Number(prompt("Qual sua idade?"));
} while (idade < 18);

alert("Seja bem vindo!");
