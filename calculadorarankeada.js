const prompt = require('prompt-sync')();

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
  
   
    let nivel = "Ferro";
    if (saldoVitorias >= 10) {
      nivel = "Bronze";
    }
    if (saldoVitorias >= 21) {
      nivel = "Prata";
    }
    if (saldoVitorias >= 51) {
      nivel = "Ouro";
    }
    if (saldoVitorias >= 81) {
      nivel = "Diamante";
    }
    if (saldoVitorias >= 91) {
      nivel = "Lendário";
    }
    if (saldoVitorias >= 101) {
      nivel = "Imortal";
    }
  
    return nivel;
  }
  
  const vitorias = prompt("Quantas vitórias você tem? ");
  const derrotas = prompt("Quantas derrotas você tem? ");
  
  const nivel = calcularNivel(vitorias, derrotas);
  
  console.log(`O Herói tem de saldo de **${vitorias - derrotas}** está no nível de **${nivel}**`);
  