// FUNÇÕES EM JAVASCRIPT

// O que é uma função? 
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// Ela processa 
// Devolve um resultado (return)

// ESTRUTURA BÁSICA DE UMA FUNÇÃO 

// function nomeDaFuncao(parametro1, parametro2){
//    //código que será executado

// return ressultado;
// }

// function ---> palavra-chave
// nomeFaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS 

// 1 - somar dois números

function somar(a, b) {
    return a + b;
}

console.log(somar(2,15))

// 3 - Converter dólar para real
function dolarParaReal(valorDolar, cotacao){
    return valor * cotacao;
}

console.loog(dolarParaReal(5,5.20));

// 4 - Aumento de sálario (Você merece 25% de aumento)
function aumentoSalario(salario) {
    return salario * 0.25;
}

console.log(aumentoSalario(2000));

// Verifique se é par ou ímpar?
function parOuImpar(numero) {
    return numero % 2;
}

console.log(parOuImpar(10));
