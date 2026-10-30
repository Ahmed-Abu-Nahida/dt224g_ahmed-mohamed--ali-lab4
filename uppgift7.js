"use strict";
// Lösning till uppgift 7 av Ahmed Mohamed Ali, 2026.

let tal = [7, 7, 7, 7, 7, 7];
function arraysumma(array) {
  let summa = 0;
  for (let i = 0; i < array.length; i++) {
    summa += array[i]; // loppa genom arrayen.
  }
  return summa;
}

console.log("Summan är " + arraysumma(tal));
