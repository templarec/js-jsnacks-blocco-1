var parola1 = prompt("inserisci la prima parola");
var parola2 = prompt("inserisci la seconda parola");

if (parola1.length === parola2.length) {
  console.log(parola1, parola2);
} else {
  if (parola1.length < parola2.length) {
    console.log(parola1, parola2);
  } else {
    console.log(parola2, parola1);
  }
}
