// O verificado de votação(Básico)
// objetivo :Praticar 'if/else' simples
// enunciado:Crie um progama de peça que peça o nome do usuario e o ano de nascimento. 
// O progama deve calcular a idade e dizer se ele ja tem idade minima para voltar (16anos). 

const entrada = require('readline-sync')

console.log("---VERIFICAÇÃO DE VOTAÇÃO---")


const nome = entrada.question("Nome do cliente: ");
const nascimento = entrada.questionInt("Data de nascimento: ");
const idade = 2026 - nascimento;

if(idade >= 16) 
    { console.log(`\nVocê ${nome} tem idade minima para votar, obrigado`);
} else {
    console.log(`\nSinto muito ${nome}, você nao tem idade suficiente.`);
}
