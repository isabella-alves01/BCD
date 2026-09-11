
//transformação de celsius 

//Criando a "ferramente" de conversão 
function conventerParaFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) +32;
    return fahrenheit; //Devolve o resultado para quem chamou 
}

const tempC = entrada.questionFloat("Digite a temperatura em Celsius:");

// Chamando a funcão e guardando oque ela "cuspiu" de volta 
const tempF = ConverterParaFahrenheit(tempC);

console.log(`A temperatura convertida e: ${tempF.toFixed(1)}°F`)
