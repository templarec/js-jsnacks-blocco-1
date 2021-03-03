var invitati = ["Marco", "Matteo", "Lucia", "Giulia"];

var input = prompt("Chi sei?");
var bodyGuard = false;
for (var i = 0; i < invitati.length; i++) {
  if (input === invitati[i]) {
    bodyGuard = true;
    break;
  }
}

if (bodyGuard) {
  console.log("Sei in lista, benvenuto!");
} else {
  console.log("Non sei in lista, addio!");
}
