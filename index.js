const result = document.getElementById("result");

const chiffre1 = document.getElementById("chiffre1");
const chiffre2 = document.getElementById("chiffre2");

function add() {
  result.innerText = parseInt(chiffre1.value) + parseInt(chiffre2.value);
}
function substract() {
  result.innerText = parseInt(chiffre1.value) - parseInt(chiffre2.value);
}
function multiply() {
  result.innerText = parseInt(chiffre1.value) * parseInt(chiffre2.value);
}
function divide() {
  result.innerText = parseInt(chiffre1.value) / parseInt(chiffre2.value);
}
