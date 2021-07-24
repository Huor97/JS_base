// crée une programe qui permet de calculer x * 2-3 et afficher dans boîte de dialogue

// -------------------------------- premier façon
// let number = 5;

// function calc(number){

//     let result = number * 2-3;
//     console.log(result);
//     alert(result)

// }
// calc(number)

// -------------------------------- deuxième façon exo1
let btn1 = document.getElementById("sommeResulta");
btn1.addEventListener("click", (e) => {
  let nummber = 5;
  let resulta = nummber * 2 - 3;
  alert(resulta);
});
// --------------------------------- exo2
// crée un programe qui permetre de returne le reste de la division
let btn2 = document.getElementById("sommeResulta2");
btn2.addEventListener("click", (e) => {
  let x = 5;
  let y = 3;
  let result = x % y;
  alert(result);
});

// --------------------------------- exo4
let btn3 = document.getElementById("sommeResulta3");
btn3.addEventListener("click", (e) => {
  // déclart variable
  let nmb1 = 10 * 2; // 20
  let nmb2 = 10 * 3; // 30
  let nmb3 = 10 * 4.5; // 45
  let boolean = 10 * true; // 10
  let boolena1 = 10 * false; // 0
  let str = 10 * "Bonjour"; // non
  let str1 = 10 * "12 billes"; // non
  let som = 10 * 1 + 1; // 11
  let som1 = (10 * 12) ^ 2; // 122
  let mbrCalc = 10;
  let som3 = 12 ^ 2;
  let rs = mbrCalc * som3; // 140
  // ----------- mutlipilier par 10
  alert(rs);
});

// --------------------------------- exo5
// crée un program qui permetre de compter le nombre de caracter de votre choix

let str1 = "hello monde";
function strCompt(str) {
  let resulta = str.length;
  document.getElementById("comptString").innerHTML = resulta;
  return resulta;
}
strCompt(str1);

// --------------------------------- exo6
// crée une program qui permetre de ecrire dans html:
// 1. une titre en capital
// 2. 1e paragraph en minuscules.
// 3. 2e paragraph en color rouge.
// 4. 3e paragraph masquer
let titreStr = "Bienvenue à Bora Bora hhh";
let pStr1 = "Paragraph en minuscules";
let pStr2 = "Paragraph en rouge";
let pStr3 = "paragraph masquer";
function textType(resultstre, resultPStr1, resultPStr2, resultPStr3) {
  document.getElementById("titre").innerHTML = resultstre.toUpperCase();
  document.getElementById("paragraph1").innerHTML = resultPStr1.toLowerCase();
  document.getElementById("paragraph2").innerHTML =
    resultPStr2.fontcolor("red");
  resultPStr3 = document.getElementById("paragraph3").style.display = "none";
}
console.log(textType(titreStr, pStr1, pStr2, pStr2));
