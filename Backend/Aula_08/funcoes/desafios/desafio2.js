// Desafio 2

// Desafio 2: O Gerador de Parcelas (Laços de Repetição)
// Objetivo: Praticar o uso do laço for e cálculos
// matemáticos.
// Enunciado: Uma loja de ferramentas quer mostrar ao
// cliente o valor das parcelas de uma compra. Peça o valor
// total do produto e a quantidade de parcelas (máximo 12).
// Use um loop para imprimir na tela o valor de cada parcela.
// - Exemplo: "Parcela 1: R 50,00", "Parcela 2: R 50,00"...


const entrada = require('readline-sync');

const  Valor_total = entrada.questionFloat("Qual e o valor total do produto: ");
const  quantidade_parcelas = entrada.questionFloat("Qual é a quantidade de parcelas: ");
const valor_por_mes = Valor_total/ quantidade_parcelas;

if(quantidade_parcelas <=12){



for (let i = 0; i  < quantidade_parcelas; i++){
    console.log(`${quantidade_parcelas[i+1]}: valor por parcela R${valor_por_mes}`);
}

}else{
    console.log(`A quantidade de parcelas passou do nivel maximo`)
}


