// Desafio 01 CLASSIFICADOR DE NIVEL DE HERÓI
// Dev: Leonardo Macetko
// Data: 05/11/2023
​
//Variaveis
var nomeHeroi = "Die_Hard";
var xpHeroi = "8600";
​
function classificarNivelDeHeroi() {
  xpHeroi = parseInt(xpHeroi.replace(".", ""), 10);
​
  if (xpHeroi <= 1000) {
    xpHeroi = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    xpHeroi = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    xpHeroi = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    xpHeroi = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    xpHeroi = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    xpHeroi = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    xpHeroi = "Imortal";
  } else [
    xpHeroi = "Radiante"
  ]
​
  console.log(`O Herói de nome ${"Die_Hard"} está no nível de ${xpHeroi}`);
}
​
classificarNivelDeHeroi();
​
//Saida
"O Herói Die_Hard está no nivel Ascendente"
