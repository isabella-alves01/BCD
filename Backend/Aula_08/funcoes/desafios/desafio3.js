// Desafio 3

// Desafio 3: Calculadora de Área de Terrenos (Funções)
// Objetivo: Criar uma função que recebe parâmetros e
// retorna um valor.
// Enunciado: Crie uma função chamada calcularArea que
// receba a largura e o comprimento de um terreno e retorne
// a área total (largura * comprimento). No programa
// principal, peça os dados de 3 terrenos diferentes ao
// usuário, chame a função para cada um e mostre o
// resultado.

const entrada = require('readline-sync');

function calcularArea(comprimento,area){
    return fahrenheit; comprimento * area    
}


console.log(`===CALCULADORA AREA===`);

const comprimento_terreno01 = entrada.questionFloat("Qual e o comprimento do primeiro terreno? ");
const largura_terreno01 = entrada.questionFloat("Qual e o largura do primeiro terreno? ");

const comprimento_terreno02 = entrada.questionFloat("Qual e o comprimento do segundo terreno? ");
const largura_terreno02 = entrada.questionFloat("Qual e o largura do segundo terreno? ");

const comprimento_terreno03 = entrada.questionFloat("Qual e o comprimento do terceiro terreno? ");
const largura_terreno03 = entrada.questionFloat("Qual e o largura do terceiro terreno? ")

const area_total_primeiro_terreno = comprimento_terreno01 * largura_terreno01
const area_total_segundo_terreno = comprimento_terreno02 * largura_terreno02
const area_total_terceiro_terreno = comprimento_terreno03 * largura_terreno03

console.log(`A areia do primeiro terreno é ${area_total_primeiro_terreno}`);
console.log(`A areia do primeiro terreno é ${area_total_segundo_terreno}`);
console.log(`A areia do primeiro terreno é ${area_total_terceiro_terreno}`)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// forma que o professor fez;

// for(let i =1; i<4; i++) {
//     let largura = entrada.questionFloat(`Digite a largura do terreno ${i}: `);

//     let comprimento = entrada.questionFloat(`Digite o comprimento do terreno ${i}: `);

//     let area = calcularArea(largura,comprimento)

//     console.log(`O terreno ${i} tem area de ${area} metros quadrados`);
// }

