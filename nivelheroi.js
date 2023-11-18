
const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseFloat(prompt("Digite a quantidade de experiência (XP) do herói:"));


let nivel;

switch (true) {
    case xpHeroi < 1000:
        nivel = "Ferro";
        break;
    case xpHeroi <= 2000:
        nivel = "Bronze";
        break;
    case xpHeroi <= 5000:
        nivel = "Prata";
        break;
    case xpHeroi <= 7000:
        nivel = "Ouro";
        break;
    case xpHeroi <= 8000:
        nivel = "Platina";
        break;
    case xpHeroi <= 9000:
        nivel = "Ascendente";
        break;
    case xpHeroi <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
