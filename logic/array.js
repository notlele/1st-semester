// pergunte ao aluno quanto ele tirou nas suas 5 provas que ele fez no curso
// ao final, pergunte qual nota ele quer rever (1-5) e exiba ela


// criando um array vazio
var notas = [];

// alimentar os elementos do array
for (n = 0; n < 5; n++) {
     var novaNota = prompt(`Digite sua ${n+1}ª nota`);
     // incluindo um elemento no array
     notas.push(novaNota);
}

var rever = Number(prompt('Qual nota quer rever?'));
// recuperando um elemento do valor
var notaRecuperada = notas[rever];

document.write(`Nota: ${notaRecuperada}`);
    