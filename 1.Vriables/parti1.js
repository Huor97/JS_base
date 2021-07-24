// base js: Vraible qu'on va voir dans cette fichier

// --------------------- Exo1
console.log(2);

// --------------------- Exo2
let bol = true;
console.log(true);

// --------------------- Exo3
// déclarer trois variables : number1, number2, result.
// attribuer une valeur pour number1 er number2.
// attribuer à la result le resulta somme de number1 et number2.
// Afficher resulta dans une boit de dialigue.

// déclaration variable
let number1;
let number2;
let result;

// attribuer
number1 = 5;
number2 = 3;

// somme de number1 et number2
result = number1 + number2;

bouton.addEventListener("click", function () {
  alert(result);
});

// --------------------- Exo4
// définir trois variables: lastname, firstname et city qui prendre Doe, John, New-York aficher dans boit de dialigue
let lastname = "Doe";
let firstname = "John";
let city = "New-York";
bouton1.addEventListener("click", function () {
  alert(` Nom : ${lastname} \n Prénom : ${firstname} \n Ville : ${city}`);
});

// --------------------- Exo5
// dans une boit de dialogue demander son prènom. suivi du prènom sort Bonjour
// boit de dialogue demande prènom input :
// boit de dialogue affiche bonjour sorti.

let btn = document.getElementById("btnNom");
btn.addEventListener("click", (e) => {
  a = prompt("saisi votre prènom");
  if (a) {
    alert("Bonjour " + a);
  }
});
