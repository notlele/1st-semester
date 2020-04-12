var numero = Number(prompt("Insira um número:"));
var count = 0;
var max = numero;
var min = numero;
while (count < 6) {
  numero = Number(prompt("Insira um número:"));
  if (numero < min) {
    min = numero;
  } else if (numero > max) {
    max = numero;
  }
  count++;
}

document.write(`O menor número inserido foi ${min} e o maior ${max}`);

// other exercise
document.write("<ul>");

var contagem = 0;
while (contagem < 17) {
  var frase = contagem < 10 ? "socorro" : "socorrooooooo";
  document.write(`<li>${frase}</li>`);
  contagem++;
}

document.write("</ul>");

// other exercise
var impar = 1;
while (impar < 100) {
  document.write(impar + "<br>");
  impar = impar + 2;
}

// other exercise
var balas = Number(prompt("Quantas balas a criança ganhou?"));
var choro = 0;

while (balas >= 4 && balas <= 6 && choro < 3) {
  document.write("buáaa <br>");
  choro++;
}
while (balas >= 1 && balas <= 3 && choro < 7) {
  document.write("buáaa <br>");
  choro++;
}
while (balas <= 0 && choro < 10) {
  document.write("buáaa <br>");
  choro++;
}

// other exercise
var frase = "mesma frase 12 vezes na tela";
var contador = 0;
while (contador < 12) {
  document.write(`${frase} <br>`);
  contador++;
}

// other exercise
var count = 0;
var pares = 0;
var impares = 0;
while (count < 10) {
  var n = Number(prompt("Insira um número:"));
  if (n % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
  count++;
}
document.write(
  `Total de números pares: ${pares} <br>Total de números ímpares: ${impares}`
);


// other exercise
var frase = prompt("Qual frase você mais gosta?");
var qtd = Number(prompt("Quantas vezes você quer vê-la?"));
var contagem = 0;

while (contagem < qtd) {
  contagem++;
  document.write(`${frase} `);
	document.write(`${contagem}<br>`);
}
