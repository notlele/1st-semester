var idade = Number(prompt("Qual sua idade?"));
var sexo = prompt("Qual seu sexo? (f ou m)");

// criando variaveis lógicas
// ou seja, que guardam true or false

var menor_de_idade = idade < 18;
// essa var vai receber somente true ou false

var mulher = sexo == "f";

if (menor_de_idade && mulher) {
  alert("mulher menor de idade");
}
if (menor_de_idade && !mulher) {
  alert("homem menor de idade");
}
if (!menor_de_idade && mulher) {
  alert("mulher maior de idade");
}
if (!menor_de_idade && !mulher) {
  alert("homem menor de idade");
}

// ! oposto da variavel

