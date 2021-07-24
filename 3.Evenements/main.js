// -------------------------- exo1
//  crée une program qui pérmetre de grandi la tail d'une image chaque fois quand on click sur image
function agrandir() {
  // recuper image
  var myImg = document.getElementById("myImg");
  // utiliser padding image
  var largeur = myImg.clientWidth;
  //  si la taille de l'image est egal à 600, alert. alor ajouter 20 px chaque fois que je clicke sur image
  if (largeur == 250) {
    alert("Vous avez atteint le niveau de zoom maximal.");
  } else {
    myImg.style.width = largeur + 20 + "px";
  }
}

// ----------------------------- exo2
// function mousedown() {
//   let imgMousedown = document.getElementById("imag1");
//   imgMousedown.setAttribute("src", "imag2.jpg");
// }
// function mouseleave() {
//   let imgMouseleave = document.getElementById("imag1");
//   imgMouseleave.setAttribute("src", "imag1.jpg");
// }

let images = document.getElementById("imag1");
images.addEventListener("mouseover", (e) => {
  if (images) {
    images.setAttribute("src", "imag2.jpg");
  } else {
    images.setAttribute("src", "imag1.jpg");
  }
});

// ----------------------------- exo 3
// crée une programe si on clicke sur une button, alert: aficher le text dans inpuut
let str1 = document.getElementById("inputText");
str1.addEventListener("keyup", function (e) {
  str2 = str1.value;
  alert(str2);
});

// ---------------------------- exo4
//  crée un programe qui permetre de changer la taille border de input

let inputErreur = document.getElementById("text1");
// si input est focus : colore de border est vert
inputErreur.addEventListener("focus", () => {
  inputErreur.style.border = "10px solid #5D8233";
});
// si input n'est pas focus : colore de border est rouge
inputErreur.addEventListener("focusout", function () {
  inputErreur.style.border = "5px solid red";
});

// ---------------------------- exo5
// crée un program qui permetre de calculer hypothénuse d'un triangle rectangle
// (a*a + b*b) 1/2
let resulta = document.getElementById("resulta");
resulta.addEventListener("click", (e) => {
  let oppose = document.getElementById("coterOppose").value;
  let adjacent = document.getElementById("coterAdjacent").value;
  let resultOA = oppose * oppose + adjacent * adjacent;
  let resultaHypthenuse = Math.pow(resultOA, 1 / 2);
  document.getElementById("resultaHypthenuse").innerText = resultaHypthenuse;
});
