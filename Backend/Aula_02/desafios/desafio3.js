// • Álcool ou Gasolina? (Matemática + Lógica)
// • Objetivo: Praticar lógica aplicada ao dia a dia.
// • Enunciado: Dizem que só compensa abastecer com Álcool se o
// preço dele for menor que 70% do preço da Gasolina. Peça o preço
// do litro de cada um. O programa deve calcular: `precoAlcool /
// precoGasolina`. Se o resultado for menor que 0.7, mostre
// "Abasteça com ÁLCOOL". Caso contrário, mostre "Abasteça com
// GASOLINA".

const entrada = require('readline-sync');

console.log("---POSTO---");
const alcool = entrada.questionFloat("Qual e o preco do litro do alcool hoje?:  ");
const gasolina = entrada.questionFloat("Qual e o preco do litro da gasolina hoje?:  ");

const total = alcool/gasolina;
if(total<0.7){
    console.log(`\n Abasteca com alcool`)
} else{
    console.log(`\nAbasteca com gasolina`)
}
