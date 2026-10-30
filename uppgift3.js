"use strict";
// Lösning till uppgift 3. av Ahmed Mohamed Ali, 2026.
let age1 = 12;

if (age1 < 18) {
  console.log("Barn"); // villkoret är sant.
} else if (age1 >= 18 && age1 <= 64) {
  console.log("Vuxen");
} else {
  console.log("Pensionär");
}

let age2 = 27;

if (age2 < 18) {
  console.log("Barn");
} else if (age2 >= 18 && age2 <= 64) {
  console.log("Vuxen"); // villkoret är sant.
} else {
  console.log("Pensionär");
}

let age3 = 70;

if (age3 < 18) {
  console.log("Barn");
} else if (age3 >= 18 && age3 <= 64) {
  console.log("Vuxen");
} else {
  console.log("Pensionär"); // villkoret är sant.
}
