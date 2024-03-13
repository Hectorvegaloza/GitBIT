"use strict"

// Primer desafio Saludar
// document.write("Hola");
// Console.log("Hola");c

/* 
const entrada = prompt("Ingrese su nombre:");

if (entrada >= 0 || entrada <-1  ){
    document.write("Paisano, la entrada es un numero deber ser su nombre");
}else{
if(entrada){
    document.write("Hola "+ entrada + "!");
}else{
    document.write("Hola");
}
} */


/* const entrada = prompt("Ingrese su nombre:");

if (entrada >= 0 || entrada <-1  ){
  document.write("Paisano, la entrada es un numero deber ser su nombre");
}else{
switch (entrada){
  case "":
    document.write("Hola"); 
    break;
  default:
    document.write("Hola "+ entrada + "!");
    break;
}  
}*/


// Hacer un programa que pida dos numeros al usuario y los sume

/* let num1, num2, resultado, conver, conver2;

num1 = Number(prompt("Digite el numero 1"));
num2 = Number(prompt("Digite el numero 2"));

if(isNaN(num1) || isNaN(num2)){
  document.write("Paisano, el valor ingresado no es un número");
}else{
  console.log(num1 + num2);
  //template string
  document.write(`la suma de ${num1} y ${num2} es ${num1+num2}`);
}
 */



// Hacer un programa que pida aparte nombre y apellido aparte y muestre el nombre completo

/* 
let num1, num2,resultado;

num1 = prompt("Digite Nombre");
num2 = prompt("Dighectorite apellido");

if (isNaN(num1) && isNaN(num2)){
  resultado = num1 + " " + num2; 
  document.write(`Su nombre completo es: ${resultado}`);
}else{
  document.write("Paisano, la entrada es un numero, deber ser su nombre");
}
 */



// hacer un programa que reciba un numero y muestre si es cero si es positivo o si es negativo

/*  let num1;

num1 = Number(prompt("Digite un número:"));


if(isNaN(num1)){
  document.write("Paisano, el valor ingresado no es un número");
}else{
if(num1 === 0 ) {
  document.write(`Usted ingresó el numero Cero, ${num1}`);
} else if(num1>1) {
  document.write(`Usted ingresó un numero positivo, ${num1}`);
} else if (num1<0) {
  document.write(`Usted ingresó un numero negativo, ${num1}`);
}
}
 */

//hacer un programa que reciba del usuario 2 numeros y muestre cual es el nunero mayor y cual es menor

let num1, num2;

num1 = Number(prompt("Digite el numero 1"));
num2 = Number(prompt("Digite el numero 2"));
if(isNaN(num1) || isNaN(num2)){
  document.write("Paisano, el valor ingresado no es un número");
}else{
if(num1 === 0 || num2 ===0 || num1==num2 || num2 <0|| num1 <0) {
  document.write(`ERROR!!! Algunos de los numeros es Cero o son iguales compa o son negativos`);
}else{
if(num1 > num2) {
  document.write(`El mayor es ${num1} y el menor es ${num2}`);
}else{
  document.write(`El mayor es ${num2}  y el menor es ${num1}`);
}
}
}
 
 


