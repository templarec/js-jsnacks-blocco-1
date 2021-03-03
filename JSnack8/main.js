var input = prompt("Inserisci un numero di 4 cifre");
var somma = 0;
console.log("Cifre numero inserito: " + input.length);
  for (var i = 0; i < input.length; i++) {
    somma = somma + parseInt(input.charAt(i));
  }
  console.log("Somma cifre del numero: " + somma);
