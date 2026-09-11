const entrada = require('readline-sync');

// a contante produto armazena informaçoes dentro dela para ser mostrado chamando ela 

const produto = {
    nome: "Teclado Mecânico",
    preco: 150.00,
    estoque: 25,
    emOferta : true
};

console.log(`Produto: ${produto.nome}`);
console.log(`preço: R$ ${produto.preco.toFixed(2)}`);
console.log(`produto: ${produto.nome} | ${produto.preco} | ${produto.estoque} | ${produto.emOferta}`);

