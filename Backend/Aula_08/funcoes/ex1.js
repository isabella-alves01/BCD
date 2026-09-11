const entrada = require('readline-sync');
function calcularMedia(n1, n2){
    return (n1, n2) / 2;

 }

const resultado = calcularMedia(10, 8);
const resultado2 = calcularMedia(25, 25);
console.log(`A media calculada foi: ${resultado}`)
/console.log(`A 2 media calculada foi: ${resultado2}`)

const valor1 = entrada.questionInt("Qual  é o primeiro valor: ");
const valor2 = entrada.questionInt("Qual é o segundo valor?: ");
const calculado = calcularMedia(valor1, valor2)
console.log(`A media calculada foi: ${calculado}`);


