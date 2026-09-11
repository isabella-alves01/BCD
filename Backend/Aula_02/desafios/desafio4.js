// • Desafio 4: Classificação de Atleta (Múltiplas Condições)
// • Objetivo: Praticar `else if`.
// • Enunciado: Uma escola de natação precisa classificar seus
// alunos por idade:
// • 5 a 10 anos Infantil
// • 11 a 17 anos: Juvenil
// • 18 a 60 anos: Adulto
// • Acima de 60 anos: Sênior


const entrada = require('readline-sync')

console.log("---CLASSIFICACAO DE ATLETAS---")
 const idade = entrada.questionFloat("Qual é a idade do atleta?:  ");

 if(idade >=5 && idade >=10){
    console.log(`\n O atleta pertence a categoria infantil`)
 }else if(idade>=11 && idade>=17){
    console.log(`\n O atetleta pertence a categoria Juvenil`)
 }else if(idade>=18 && idade>=60){
    console.log(`\n O atleta pertence a categoria adulta`)
 }else if(idade >60){
    console.log(`\n O atleta pertence a categoria Senior `)
 }
