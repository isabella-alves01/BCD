// • O "Mão de Vaca" (Cálculo com Decisão)
// • Objetivo:** Praticar cálculos e `if/else`.
// • Enunciado: Um restaurante está dando 10% de desconto para
// contas acima de R$ 100,00. Peça o valor total da conta. Se for
// acima de 100, mostre o valor com desconto. Se for abaixo, mostre
// o valor normal.


const entrada = require ('readline-sync');

console.log("---Pagamento no restaurante---")

const valor_total= entrada.questionFloat("Qual foi o valor da sua comanda?:  ")
const desconto = valor_total - (valor_total * 0.10)
if (valor_total >=100){
    console.log(`O valor total da conta é ${desconto} reais. `)
} else {
    console.log(`O valor total é ${valor_total}`);
}

    
 
    
