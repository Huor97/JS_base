// crée un variable booléenne, dans console, selon ce variable afficher un des messages suivants:

let rainy = new Boolean();

if (rainy) {
  console.log("Bonjour, il ne pleut pas aujourd'hui, bonne journée");
} else {
  console.log(
    "Bonjour, il pleut aujourd'hui, vous devriez prendre votre parapluie"
  );
}

// ---------------------------- exo2
// crée un programe qui dit si vous êtes plus ou egale à 18 ans donc vous êtes majeur alors vous êtes mineur.

// recupérer id de l'age
let age = document.getElementById("age");
// crée une condition click
age.addEventListener("click", (e) => {
  // déclarer input
  let ageValue = age.value;
  // declarer les deux text pour dire vous êtes majeur ou mineur
  let agaMajuer = document.getElementById("ageMajeur");
  let ageMineur = document.getElementById("ageMineur");
  // condition pour recupere majeur ou mineur après age d'une personne
  if (ageValue >= 18) {
    agaMajuer.classList.remove("none");
    ageMineur.classList.add("none");
  } else {
    agaMajuer.classList.add("none");
    ageMineur.classList.remove("none");
  }
});
// ---------------------------- exo3
// crée une program qui prendre le nombre rentre par clien pour comparer avec le nombre de bas

// recuperer l'id de chaque animal
// evenement
// condition compareson

// recuperer button ok
let clickVitess = document.getElementById("clickVitess");

// événement selon button
clickVitess.addEventListener("click", (e) => {
  // recupérer les animaux
  let animaux = document.getElementById("animaux").value;

  // -------------- recuperer les deux text pour repons
  let resultpoul = document.getElementById("resultPoul"); // Le nombre que vous avez choisis pour la poule est :
  let resultCanard = document.getElementById("resultCanard"); // Le nombre que vous avez choisis pour le canard est :

  // -------------- recupere id où je vais mettre les trois repons pour poul
  let resultaP = document.getElementById("resultaP");
  // --------------- recuperer  id où je vais mettre les trois repons pour Canard
  let resultaC = document.getElementById("resultaC");

  // -------------- recuperer "vitess" donner après utilisateur
  let vitesse = document.getElementById("vitess").value;
  // -------------- condition poule
  if (poule.value === animaux) {
    if (vitesse > 14) {
      // ------------ visible text poul, invisible text canard
      resultpoul.classList.remove("none");
      resultCanard.classList.add("none");
      // ------------ Afiche text si-dessous selon condition
      resultaP.innerText = "Très grande";
    } else if (vitesse < 14) {
      // ------------ visible text poul, invisible text canard
      resultpoul.classList.remove("none");
      resultCanard.classList.add("none");
      // ------------ Afiche text si-dessous selon condition
      resultaP.innerText = "Très Petit";
    } else {
      // ------------ visible text poul, invisible text canard
      resultpoul.classList.remove("none");
      resultCanard.classList.add("none");
      // ------------ Afiche text si-dessous selon condition
      resultaP.innerText = "Egal";
    }
  }
  // ------------------ condition canard
  if (canard.value === animaux) {
    if (vitesse > 60) {
      // ------------ visible text canard, invisible text poul
      resultpoul.classList.add("none");
      resultCanard.classList.remove("none");
      // ------------ Afiche text si-dessous selon condition
      resultaC.innerText = "Très grande";
    } else if (vitesse < 60) {
      // ------------ visible text canard, invisible text poul
      resultpoul.classList.add("none");
      resultCanard.classList.remove("none");
      // ------------ Afiche text si-dessous selon condition
      resultaC.innerText = "Très petit";
    } else {
      // ------------ visible text canrad, invisible text poul
      resultpoul.classList.add("none");
      resultCanard.classList.remove("none");
      // ------------ Afiche text si-dessous selon condition
      resultaC.innerText = "Egal";
    }
  }
});
