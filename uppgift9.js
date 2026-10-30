"use strict";
// Lösning till uppgift 9 av Ahmed Mohamed Ali, 2026.
let people = [
  {
    name: "Jenniefer",
    age: 19,
    city: "Kalmar",
  },

  {
    name: "Mohamed",
    age: 45,
    city: "Emmaboda",
  },

  {
    name: "Abod",
    age: 28,
    city: "Växjö",
  },
];

function personInfo(person) {
  if (person.age <= 18) {
    console.log("Personen är inte mydig " + person.name);
  } else {
    console.log("Personen är myndig " + person.name);
  }
}