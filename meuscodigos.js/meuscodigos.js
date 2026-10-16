4.
const entrada = require("readline-sync");
const nivelVibracao = entrada.questionInt(`Qual e o nivel de vibracao em mm/s:`);

if( nivelVibracao <=3){
    console.log(`Seu nivel e ${nivelVibracao} situacao ESTAVEL`)
}else if( nivelVibracao >3 && nivelVibracao <=6){
    console.log(`Seu nivel e ${nivelVibracao} situacao ATENCAO`)
}else{
    console.log(`Seu nivel e ${nivelVibracao} situacao CRITICA`)
}

5.
const entrada = require("readline-sync");
const producaoPorCiclo = entrada.questionInt(`Quantos produtos sao produzidos por ciclo:`);

let producaoAcumulada = 0;

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    producaoAcumulada += producaoPorCiclo;
    console.log(`Ciclo ${ciclo}: Produção acumulada = ${producaoAcumulada}`);
}

6.
const entrada = require("readline-sync");
let somaTempos = 0;
const totalAtendimentos = 6;

for (let i = 0; i < totalAtendimentos; i++) {
    const tempo = entrada.questionInt(`Informe o tempo do atendimento ${i + 1} (em minutos): `);
    somaTempos += tempo;
}

const mediaTempos = somaTempos / totalAtendimentos;

console.log(`Soma dos tempos: ${somaTempos} minutos`);
console.log(`Média dos tempos: ${mediaTempos} minutos`);





7.
const entrada = require("readline-sync");
const setores = [];

for (let i = 0; i < 6; i++) {
    const setor = entrada.question(`Informe o nome do setor ${i + 1}: `);
    setores.push(setor);
}

console.log("\nSetores cadastrados:");
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}

8.
const entrada = require("readline-sync");
const ferramentas = [];

for (let i = 0; i < 4; i++) {
    const nome = entrada.question(`Informe o nome da ferramenta ${i + 1}: `);
    const quantidade = entrada.questionInt(`Informe a quantidade disponível da ferramenta ${i + 1}: `);
    const minimo = entrada.questionInt(`Informe a quantidade mínima da ferramenta ${i + 1}: `);

    const ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);
}

console.log("\nFerramentas cadastradas:");
for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];
    const situacao = ferramenta.quantidade < ferramenta.minimo ? "REPOR" : "ESTOQUE SUFICIENTE";
    console.log(`${i + 1} - ${ferramenta.nome}: ${ferramenta.quantidade} (mínimo: ${ferramenta.minimo}) - ${situacao}`);
}


9.
const entrada = require("readline-sync");

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const quantidadeTotal = entrada.questionInt("Informe a quantidade total de matéria-prima: ");
const quantidadeUtil = entrada.questionInt("Informe a quantidade útil de matéria-prima: ");

const percentualAproveitamento = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento(percentualAproveitamento);  

console.log(`\nQuantidade total: ${quantidadeTotal}`);
console.log(`Quantidade útil: ${quantidadeUtil}`);
console.log(`Percentual de aproveitamento: ${percentualAproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);


10 apps.js
const entrada = require("readline-sync");
const { calcularMaoDeObra, calcularTotal, verificarDesconto } = require("./funcoesOrcamento");

const nomeCliente = entrada.question("Informe o nome do cliente: ");
const valorMateriais = entrada.questionFloat("Informe o valor dos materiais (R$): ");
const horasServico = entrada.questionInt("Informe a quantidade de horas de serviço: ");

const maoDeObra = calcularMaoDeObra(horasServico);
const total = calcularTotal(valorMateriais, maoDeObra);
const desconto = verificarDesconto(total);

console.log("\n--- Relatório de Orçamento ---");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Valor dos materiais: R$ ${valorMateriais.toFixed(2)}`);

console.log(`Mão de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situação do desconto: ${desconto}`);
