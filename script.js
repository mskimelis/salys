"use strict";
//
// // 1. Ispanija
// // gyventojų skaičius: 47350000 (47,35kk)
// // Plotas: 505990 km²
// // 2. Lietuva
// // Gyventoju skaicius: 2795000
// // Plotas:  65 300 km²
// 3. Latvija
// Gyventoju skaicius: 1902000
// Plotas: 64 589 km²
// 4. Vokietija
// Gyventoju skaicius: 83240000
// Plotas: 357 386 km²
// 5. Olandija
// Gyventoju skaicius: 17440000
// Plotas: 41 543 km²

var countries = [
  {name: "Ispanija", gyventojai: 47350000 , plotas: 505990},
  {name: "Lietuva", gyventojai: 2795000, plotas: 65300},
  {name: "Latvija", gyventojai: 19020009, plotas: 65300},
  {name: "Vokietija", gyventojai: 83240000, plotas: 357386},
  {name: "Olandija", gyventojai: 17440000, plotas: 41543},
];
// Plotas vienam gyventojui m²
function countriesPrint(name, gyventojai, plotas, gyvplotas){
var gyvplotas = (plotas * 1000000) / gyventojai;

console.log("Šalis: " + name + ", joje gyvena " + gyventojai + " Valstybės plotas: " + plotas + " km², plotas tenkantis vienam gyventojui " + gyvplotas.toFixed(2) + " m².");
console.log("==========");
}

for(var i of countries){
  countriesPrint(i.name, i.gyventojai, i.plotas, i.gyvplotas);
}
