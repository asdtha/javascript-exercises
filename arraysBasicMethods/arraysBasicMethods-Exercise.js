// 1. Comprobamos que todo funciona bien si solicitamos el 2° elemento del array y en la consola dice “totoro”.
console.log("----------- punto 1 ------------");
let films = [
    "star wars", 
    "totoro", 
    "rocky", 
    "pulp fiction", 
    "la vida es bella"];
console.log("El segundo elemento del array es: " + films[1])

/* 2. En el mismo archivo nos piden que los nombres de las películas estén en MAYÚSCULAS usando .toUpperCase() para cada elemento. Asegurarnos que entregamos el array con
todas las películas en mayúsculas. Hacerlo con una función que recibe el array films por parámetro.*/

console.log("----------- punto 2 ------------");
const arrayToUpperCase = function (array) {
    let newArray = [];
    newArray[0] = array[0].toUpperCase();
    newArray[1] = array[1].toUpperCase();
    newArray[2] = array[2].toUpperCase();
    newArray[3] = array[3].toUpperCase();
    newArray[4] = array[4].toUpperCase();
    return newArray;
   };

   console.log(newArray);
    
   // Other solution
    /*const arrayToUpperCase = function (array, index) {
    allFilms[index] = array[index].toUpperCase();
   };
   console.log(films);
   let allFilms = [];
   arrayToUpperCase(films, 0); // allfilms[1].toUpperCase()
   arrayToUpperCase(films, 1);
   arrayToUpperCase(films, 2);
   arrayToUpperCase(films, 3);
   arrayToUpperCase(films, 4);
   console.log(allFilms);
   
   */


// 3. Mientras trabajabamos en el ejercicio 2, se descubrió que en el código también existe otro array, pero con películas animadas.
console.log("----------- punto 3 ------------");
let cartoons = [
    "toy story",
    "finding Nemo",
    "kung-fu panda",
    "wally",
    "fortnite",
   ];

//4. Uno de los desarrolladores advirtió que la última animación es en realidad un videojuego. Eliminar ese último elemento del array cartoons antes de pasarlos a films.
cartoons.pop()

/*En el crear una función que agregue cada cartoon del array cartoons al array films. No quieren un nuevo array, deben agregarse al array films.*/

function moverUltimoElemento (arrayUno, arrayDos){
    if(arrayUno.length > 0){
        let ultimoElemento = arrayDos.pop(); // se evalua de derecha a izquierda siempre
        arrayUno.push(ultimoElemento)
    } 
}
moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
console.log(films)
console.log(cartoons)

// 5. Finalmente, nos envían dos arrays con las calificaciones que hacen distintos usuarios del mundo de estas películas de la siguiente forma:
// Nos piden crear una función que compare las calificaciones y nos diga si son iguales o diferentes. 
// Nos confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 7];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 7];

function compararRating (arrayUno, arrayDos, indice){
   if(arrayUno [indice] == arrayDos [indice]){
    console.log('Los rating son iguales')
   } else{
       console.log('Los ratings son distintos')
   }
}
compararRating(asiaScores, euroScores, 0)
compararRating(asiaScores, euroScores, 1)
compararRating(asiaScores, euroScores, 2)
compararRating(asiaScores, euroScores, 3)
compararRating(asiaScores, euroScores, 4)
compararRating(asiaScores, euroScores, 5)
compararRating(asiaScores, euroScores, 6)
compararRating(asiaScores, euroScores, 7)
compararRating(asiaScores, euroScores, 8)