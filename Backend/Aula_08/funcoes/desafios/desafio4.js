// Desafio 4

// Desafio 4: Catálogo de Filmes (Objetos e Arrays)
// Objetivo: Manipular listas de objetos e acessar suas propriedades.
// Enunciado: Crie um Array de Objetos chamado cinema. Cada
// objeto deve representar
// um filme e ter as propriedades: titulo e classificacao (idade
// mínima).
// Cadastre 3 filmes manualmente no código. Depois, peça a idade
// do usuário no terminal e use um loop para mostrar apenas os
// títulos dos filmes que ele tem idade para assistir.

const cinema = [
    {titulo: "dumbo", censura: 0 },
    {titulo: "deadpool", censura: 18},
    {titulo: "batman", censura:12},

];

const idadeUser = entrada.questionInt("Qual é sua idade?");
for (let i = 0; i <cinema.length; i++){
    if (idadeUser >=cinema.length[i].censura){
        console.log(`pode ver: ${cinema[i].titulo}`);
    }
}




// o i++ = vai soma a cada passada 
// cinema.length = Serve para chamar as "variaveis" todas juntas
// if (idadeUser >=cinema.length[i]censura) = essa e a regra do loop