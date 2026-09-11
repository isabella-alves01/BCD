

const entrada = require('readline-sync');
const { verificarPeso } = require('./funcoesbalanca');

let sistemaAtivo = true;

while (sistemaAtivo) {
    try {
        console.log("\n=== Balanca de Precisao Industrial ===");
        const leitura = entrada.question("Digite o valor da peca: ");
        
        const resultado = verificarPeso(leitura);
        console.log(resultado);
        
    } catch (error) {
        console.log(error.message);
    }
}