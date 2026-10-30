"use strict";
// Lösning till uppgift 8 av Ahmed Mohamed Ali, 2026.

let bok = {
  titel: " The Hobbit",
  författar: "J.R.R. Tolkien",
  utgivningsår: 1937,
};
// mybok som tar emot ett bokobjekt som parameter och skriver ut tydliga info.
function myBok(bokobjekt) {
  console.log("Titel: " + bokobjekt.titel);
  console.log("Författare: " + bokobjekt.författar);
  console.log("Utgivningsår: " + bokobjekt.utgivningsår);
}
myBok(bok);
