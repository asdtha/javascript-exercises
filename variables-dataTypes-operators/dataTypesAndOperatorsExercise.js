// Esta bueno usar constantes cuando sabemos que no cambia y nos sirve si lo vamos a usar mucho. 
//No puede ser reasignado dentro del mismo codigo.

const multiplicador = 7; 
// aca declaro variables con var
var nombre = "Indiana";
var edad = 5;
edad = 6;
var esHembra = true;
console.log(nombre + "tiene " + edad + " de edad");

//aca transformamos la edad del perro a edad humano
var edadEnHumano = edad * multiplicador;
console.log(edadEnHumano);
console.log("Mi perro tiene una edad de: " + edad);
console.log("Mi perro " + nombre + " tiene una edad de humano de : " + edadEnHumano); 

// aca declaro las variables
var nombre = 'Esteban';
var apellido = 'Piazza';
var edad = 25;
var peso = 80.1;
var altura = 178; // en cm
var tienePrepaga = true;
//aca paso la altura a metros
var alturaEnMetros = altura/100
//aca calculo el imc
var imc = peso / (alturaEnMetros ^ 2)
//imprimo por pantalla
console.log( nombre + "" + apellido + "de edad" + edad + "anios tiene un imc de" + imc.toFixed(2)); //Math.round(imc) para redondear de 26.7 a 27

var nombre = "Nicolas Lopez";
var edad = 27;
var peso = 83.5;
var altura = 170;
var tienePrepaga = true;
var alturaEnMetros = altura / 100;
var imc = peso / (alturaEnMetros^2);

console.log(nombre + " tiene " + edad + " anios " + "y su indice de masa corporal es de " + imc);

nombre = "Esteban Piazza";
edad = 28;
peso = 80.1;
altura = 176;
alturaEnMetros = altura / 100;
imc = peso / (alturaEnMetros^2);

console.log(nombre + " tiene " + edad + " anios " + "y su indice de masa corporal es de " + imc)

nombre = "Gianinna Marquez";
edad = 26;
peso = 65;
altura = 165;
alturaEnMetros = altura / 100;
imc = peso / (alturaEnMetros^2);

console.log(nombre + " tiene " + edad + " anios " + "y su indice de masa corporal es de " + imc)
 