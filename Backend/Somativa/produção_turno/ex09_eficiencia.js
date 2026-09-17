// Objetivo: Organizar regras do programa em funções com parâmetros e retorno.
// Crie um programa que calcule a eficiência de uma produção. A eficiência é dada por: (produção real /
// produção prevista) × 100.
// O programa deve:
// ☐ Criar uma função calcularEficiencia(real, prevista) que retorne o percentual.
// ☐ Criar uma função classificarEficiencia(percentual) que retorne uma classificação.
// ☐ Classificação: 90% ou mais = &#39;META ATINGIDA&#39;; de 70% a 89,99% = &#39;ATENÇÃO&#39;; abaixo de 70% =
// &#39;ABAIXO DA META&#39;.
// ☐ Solicitar produção prevista e produção real pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir produção prevista, produção real, percentual e classificação.

const entrada = require('readline-sync');

function calcularEficiencia(real,prevista) {
    return (real/prevista) *100;
}

function classificarEficiencia(percentual){
    if (percentual >=90) return `META ATINGIDA`;
    if (percentual >= 70) return `ATENÇÃO`;
    return`BAIXO DA META`;
}

const prevista = entrada.questionInt('Digite a produção prevista: ');
const real = entrada.questionInt('Digite a produção real: ');

const percentual = calcularEficiencia(real, prevista);
const classificacao = classificarEficiencia(percentual);

console.log(`Produção prevista: ${prevista}`);
console.log(`Produção real: ${real}`);
console.log(`Percentual de eficiência: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);




