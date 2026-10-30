"use strict";
// Lösning till uppgift 9 av Ahmed Mohamed Ali, 2026.
let person = [
  {
    name: "Jenniefer",
    age: 17,
    city: "Kalmar",
  },

  {
    name: "Mohamed",
    age: 45,
    city: "Emmaboda",
  },

  {
    name: "Abod",
    age: 18,
    city: "Växjö",
  },
];

function personInfo(person) {
  if (person.age >= 18) {
    console.log("Personen är Myndig " + person.name + " bor i " + person.city);
  } else {
    console.log(
      "Personen är inte myndig" + person.name + " bor i " + person.city);
  }
}
 for (let i = 0; i < person.length; i++) {
   personInfo(person[i]);
 }
