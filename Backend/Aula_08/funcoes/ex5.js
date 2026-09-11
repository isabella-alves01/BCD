const entrada = require('readline-sync');

function calcularDesconto(precoOriginal) {
    return precoOriginal * 0.85;

}

const estoque = [
    {nome: "Monitor", preco: 800 },
    {nome: "Teclado", preco:150 },
    {nome: "Mouse", preco: 80}
];

console.log("===TABELA DE PREÇOS COM OBJETOS (15% OFF)");

for (let i = 0; i < estoque.length; i++) {

    let precoComDesconto = calcularDesconto(estoque[i].preco);

    console.log(`${estoque[i].nome}:`);
    console.log(`   De: R${estoque[i]}.preco.tofixed(2)\n`);
    console.log(`   Por: R$ ${precoComDesconto.toFixed(2)}\n`);
}

