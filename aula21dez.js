// Length - Tamanho / Quantidade de elementos
// Push - Incluir no fim do Array
// Unshift - Incluir no começo do Array
// Pop - Remove o último elemento do Array
// Shift - Remove o primeiro elemento do Array
// indexOf - Localizar a posição/indice do elemento no Array

//const numeros = [1, 2, 3, 4, 5];

// Dobrar cada número
// Arrow Functions  
//const numerosDobrados = numeros.map(numero => numero * 2);

// Funções Naturais
//const numerosDobradosNaturais = numeros.map(function (numero) {
    //return numero * 2;
//});

//const frutas = ["maça", "banana", "uva"];
//console.log(frutas);
//for (let indice = 0; indice < frutas.length; indice++) {
  //  console.log('Indice', indice);
    //console.log('Valor', frutas[indice]);
//}

// npm install readline-sync
const readline = require("readline-sync");

function nomeDaFuncao() {
    console.log("isso é parte da minha função.");
    console.log("isso também é da função.");
}

function dizOla(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}. Eu sou uma função que sei dizer olá.`);
}

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

nomeDaFuncao();
dizOla("Tafarel", "Chicotti");
const nome = nomeCompleto("Tafarel", "Chicotti");

console.log(nome, nomeCompleto("Alessandra", "Negrini"));

/**
 * Criem uma calculadora que irá calcular Soma, Subtração, Multiplicação e Divisão.
 * Solicitem o Primeiro número, depois a Operação e por último o Segundo número.
 * Criem uma função para cada uma das Operações Matemáticas.
 * Utilizem o if/else para saber qual operação vai chamar qual função.
 */