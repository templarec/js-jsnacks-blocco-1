var array = [];


for (var i = 0; i < 6; i++) {
  input = prompt("Inserisci un numero:");
  if (input%2) {
    array.push(input);
  }
}

console.log(array);
