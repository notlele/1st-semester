var eleitores = Number(prompt("Quantos eleitores votarão?"));
var nrCandidato1 = Number(prompt("Qual o número do primeiro candidato?"));
var nmCandidato1 = prompt("Qual o nome do primeiro candidato?");
var nrCandidato2 = Number(prompt("Qual o número do segundo candidato?"));
var nmCandidato2 = prompt("Qual o nome do segundo candidato?");

var nrVoto = 0;
var votoCandidato1 = 0;
var votoCandidato2 = 0;

while (nrVoto != eleitores) {
  var voto = Number(
    prompt(
      `Seu voto? ${nrCandidato1} - ${nmCandidato1} / ${nrCandidato2} - ${nmCandidato2} / NDA - Nulo`
    )
  );
  if ((voto = nrCandidato1)) {
    votoCandidato1++;
  } else {
    votoCandidato2++;
  }
  nrVoto++;
}

// other exercise
if ((votoCandidato1 = votoCandidato2)) {
  alert("Empate. #partiunovaeleição");
} else if (votoCandidato1 > votoCandidato2) {
  alert(`Candidato ${nmCandidato1} venceu!`);
} else {
  alert(`Candidato ${nmCandidato2} venceu!`);
}

var numero = Number(prompt("Qual o número?"));
var resultado = numero == 6 || numero == 9 ? "chilique" : "de boa";
// ? means if true, the 1st is used in the var, if false uses the 2nd

alert(resultado);

// other exercise
// só vou viajar se:
// o salário cair até o dia 7
// e cair pelo menos 1000

var dia_salario = Number(prompt("Que dia caiu o salário?"));
var valor_salario = Number(prompt("Quanto caiu?"));

// verificando AMBAS as condições

if (dia_salario <= 7 && valor_salario >= 1000) {
  alert("#partiupraia");
} else {
  alert("#partiunetflix em casa");
}

// ex 2: para passar de semestre, alunos devem:
// passar em PI
// E
// serem aprovados no socioemocional

var pi = prompt("Passou em PI? 's' ou 'n'");
var socioem = prompt("Passou em socioemocional? 's' ou 'n'");

if (pi == "s" && socioem == "s") {
  alert("Parabéns! 2° semestre e estágio! #ostentação");
} else {
  alert("Infelizmente, fica para a próxima #deuruim");
}


// other exercise
var numero = Number(prompt('Qual o número?'));
var resultado = (numero==6 || numero==9)?'chilique' : 'de boa';
// ? means if true, the 1st is used in the var, if false uses the 2nd

alert(resultado);
