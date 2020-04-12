var amigos = Number(prompt("Quantos amigos vão comer a pizza?"));
var valor = Number(prompt("Qual o preço da pizza?"));
var tempo = Number(prompt("Qual o tempo estimado de entrega?"));

function pedirPizza(amigos, valor, tempo) {
  // preço <= 25 por amigo && tempo de entrega <= 45min
  return valor / amigos <= 25 && tempo <= 45;
}

var podePedir = pedirPizza(amigos, valor, tempo);
podePedir ? alert("Aí sim #pedirpizza!") : alert("Xi... #deuruim");

// other exercise
var bruto = Number(prompt("Insira seu salário bruto:"));

function inss(bruto) {
  var desconto = bruto < 1000 ? (bruto / 100) * 8 : (bruto / 100) * 10;
  return desconto;
}

function ir(bruto) {
  var imposto =
    bruto < 1000 ? 0 : bruto > 2000 ? (bruto / 100) * 7 : (bruto / 100) * 15;
  return imposto;
}

function vt(bruto) {
  var vale_transporte = (bruto / 100) * 5;
  return vale_transporte;
}

var calculo_inss = inss(bruto);
var calculo_ir = ir(bruto);
var calculo_vt = vt(bruto);
alert(
  `Seu desconto do INSS será de R$${calculo_inss}, imposto de renda R$${calculo_ir} e vale-transporte R$${calculo_vt}.`
);

// other exercise
// pergunte ao usuario quantos filhos ele tem, calcule então sua bolsa familia, considere que a bolsa é $20 por filho.

function bolsaFamilia(filhos) {
  if (filhos < 0) {
    return 0;
  }
  var bolsa = filhos * 20;
  return bolsa;
}

var filhos = Number(prompt("Quantos filhos você tem?"));
// invocando e guardando o retorno da função bolsaFamilia()
var bolsa_calculada = bolsaFamilia(filhos);
// o retorno da função ficou na variável 'bolsa_calculada'
alert(`Sua bolsa família será de R$${bolsa_calculada}`);

// other exercise
var bruto = Number(prompt("Qual seu salário bruto?"));
var dependentes = Number(prompt("Quantos dependentes possui?"));

inss(bruto);
imposto(bruto, dependentes);
auxilio(dependentes);

function inss(bruto) {
  var desconto = (bruto / 100) * 10;
  alert(`Valor do INSS: R$${desconto}.`);
}

function imposto(bruto, dependentes) {
  if (dependentes < 4) {
    var ir = (bruto / 100) * 20 - dependentes * 5;
  } else {
    ir = 0;
  }
  alert(`Valor do imposto de renda: R$${ir}`);
}

function auxilio(dependentes) {
  var familia = dependentes * 50;
  alert(`Valor do auxilio família: R$${familia}`);
}

// other exercise
var nota1 = Number(prompt("Insira uma nota:"));
var nota2 = Number(prompt("Insira outra nota:"));
var frequencia = Number(prompt("Insira sua frequência:"));

media(nota1, nota2);
aplicacao(frequencia);

function media(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  alert(`Media: ${media}`);
}

function aplicacao(frequencia) {
  var resultado = frequencia >= 70 ? "Aplicado" : "Faltoso";
  alert(resultado);
}
