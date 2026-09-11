// Desafio 1

// Desafio 1: O Verificador de Aposentadoria (Lógica e Decisão)
// Objetivo: Praticar cálculos, if/else e operadores lógicos.
// Enunciado: Crie um programa que peça o nome, a idade e o
// tempo de contribuição de um trabalhador. A regra para se
// aposentar é:
// - Ter pelo menos 65 anos de idade.
// - OU ter pelo menos 30 anos de contribuição. Exiba uma
// mensagem dizendo se o trabalhador já pode se aposentar ou
// não.

const entrada = require('readline-sync');

const nome = entrada.question("Nome da pessoa: ");
const Idade = entrada.questionInt("Idade da pessoa: ");
const tempo_contribuicao = entrada.questionInt("Tempo de contribuicao da pessoa: ");

if(Idade >=65 && tempo_contribuicao <=30){
    console.log(`\nVocê tem ${Idade}, esta dentro dos  padroes, sua aposentadoria vai ser encaminhada`);
    console.log(`\nVocê tem ${tempo_contribuicao}, de contribuição, esta dentro dos padroes, sua aposentadoria vai ser encaminhada`)
} else{
    console.log(`\n Você tem ${Idade}, não esta dentro dos padores,não continuaremos com sua aposentadoria`);
    console.log(`\n Você tem ${tempo_contribuicao}, não esta dentro dos padroes, não continuaremos com sua aposentadoria`)
}


