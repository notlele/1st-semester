var frutas = Number(prompt("Quantas frutas estarão presentes na salada?"));
var valor;

if (frutas < 3) {
  alert("Salada de frutas fake! Tente novamente");
} else {
  var unidade = 1.5 * frutas;
  var minimo;
  switch (frutas) {
    case 3:
      minimo = 5;
      break;
    case 4:
      minimo = 10;
      break;
    default:
      minimo = 12;
  }

  var valor = unidade + minimo;
  alert(`Uma salada com ${frutas} frutas deve ser vendida por R$${valor}.`);
}


/////////////////////////////////////////
var minimo = Number(
  prompt(
    "Qual o seu vício? 1 - Cigarro / 2 - Álcool / 3 - Maconha / 4 - Drogas mais pesadas"
  )
);
var gastos;
var anos;

switch (minimo) {
  case 1:
    gastos = 15000;
    anos = 10;
    break;
  case 2:
    gastos = 20000;
    anos = 15;
    break;
  case 3:
    gastos = 25000;
    anos = 18;
    break;
  case 4:
    gastos = 35000;
    anos = 20;
}

alert(
  `Você vai acabar gastando $${gastos} para se tratar e mesmo assim viverá ${anos} anos a menos.`
);


/////////////////////////////////////////
var minimo = Number(prompt("Qual o valor atual do salário mínimo?"));
var salario = Number(prompt("Quanto você ganha por mês?"));

var sm_mes = parseInt(salario / minimo);
var msg;

switch (sm_mes) {
  case 0:
  case 1:
  case 2:
    msg = "Classe E";
    break;
  case 3:
  case 4:
    msg = "Classe D";
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    msg = "Classe C";
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    msg = "Classe B";
    break;
  default:
    msg = "Classe A";
}

alert(msg);


/////////////////////////////////////////
var voto1 = Number(
  prompt("Vote para síndico: 1 - Zé Ruela | 2 - Taylor Swift | NDA - Nulo")
);
var voto2 = Number(
  prompt("Vote para síndico: 1 - Zé Ruela | 2 - Taylor Swift | NDA - Nulo")
);
var voto3 = Number(
  prompt("Vote para síndico: 1 - Zé Ruela | 2 - Taylor Swift | NDA - Nulo")
);

var ze_ruela = 0;
var taylor_swift = 0;

switch (voto1) {
  case 1:
    ze_ruela++;
    break;
  case 2:
    taylor_swift++;
    break;
}

switch (voto2) {
  case 1:
    ze_ruela++;
    break;
  case 2:
    taylor_swift++;
    break;
}

switch (voto3) {
  case 1:
    ze_ruela++;
    break;
  case 2:
    taylor_swift++;
    break;
}

if (ze_ruela == taylor_swift) {
  alert("Empate");
} else {
  var vencedor = ze_ruela > taylor_swift ? "Zé Ruela" : "Taylor Swift";
  alert(`${vencedor} venceu`);
}
