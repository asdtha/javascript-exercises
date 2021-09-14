
/* IF TERNARIO: A diferencia de un if tradicional, el if ternario se escribe de forma horizontal. Al igual que el if tradicional, tiene el mismo flujo (si esta condición es verdadera 
hacer esto, si no, hacer esto otro), pero en este caso no hace falta escribir la palabra if ni la palabra else*/

    let fruit = "Manzana";
    let resultado = fruit == "Manzana"?"Buenísimo, me gustan las manzanas":"Ufa, quería manzana";
    console.log(resultado);

    4 > 10 ? 'El 4 es más grande' : 'El 10 es más grande';

/* SWITCH: El switch nos propone una sintaxis más legible para los casos en los que 
queremos evaluar muchas posibilidades de un solo valor.

***Estructura básica: El switch está compuesto por una expresión a evaluar, seguida de diferentes 
casos, tantos como queramos, cada uno contemplando un escenario diferente.
Los casos deberán terminar con la palabra reservada break para evitar que se 
ejecute el próximo bloque 

switch (expresión) {
    case valorA:
    // código a ejecutar si la expresión es igual a valorA
    break;
    case valorB:
    // código a ejecutar si la expresión es igual a valorB 
    break;
    }
  */  

switch ('lunes') {
    case 'martes':
        console.log("Ahí vamos, arrancó la semana ahora sí");
        break; // evita que se ejercute el próximo bloque
    case 'miércoles':
        console.log("Día más nulo de la semana");
        break;   
    default:
    console.log('Lunes de muerte lenta');
}

/*Agrupamiento de casos: El switch también nos permite agrupar casos y ejecutar un mismo bloque de código para cualquier caso de ese grupo. 

switch (expresión) {
case valorA:
case valorB:
// código a ejecutar si la expresión es igual a ValorA o B
break;
case valorC:
//código a ejecutar si valorC es verdadero
break;
*/
 switch ('finDeSemana') {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log("Estudiar mucho :(");
        break;
    case 'finDeSemana':
        console.log('Salen birritas todo el finde');
 }

let edad = 5;
switch (edad) {
    case 10:
        console.log('Tiene 10 años');
    break;
    case 5:
        console.log('Tiene 5 años');
    break;
}

/*El bloque default: Si queremos considerar la posibilidad de que ninguno de los casos sea verdadero, utilizamos la palabra reservada default seguida
 de dos puntos : y  el bloque de código que queramos que se ejecute. Por lo general escribimos el bloque default a lo último. En ese caso, no es 
necesario escribir el break.

switch (expresión) {
case valorA:
// código a ejecutar si valorA es verdadero
 break;
default:
// código a ejecutar si ningún caso es verdadero
}

*/

let fruta = 'wefwef';
switch (fruta) {
case 'manzana':
 console.log('Qué rica la manzana');
 break;
case 'naranja':
 console.log('¡Naranja, me encanta!');
 break;
default:
 console.log('¿Qué fruta es?');
 break; //no es necesario escribirlo acá
}


let dia = 'jueves';
function finDeSemana(dia) {	
    switch (dia) {
    	case 'viernes':
		console.log('buen finde');
		break;
		case 'lunes':
    	console.log('buena semana');
		break;
	default:
    	console.log('buen dia');
        break;
	}
}

function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tienes clases");
		break;
		default:
			console.log ("no tienes clases");
	}
}

let semaforo = "Amarillo";

switch(semaforo){
    case "Verde":
        console.log("Puede cruzar");
        break; //Con esto cortamos la ejecución
    case "Amarillo":
        console.log("Precaución");
        break;
    case "Rojo":
        console.log("No cruces, hay que esperar");
        break;
    default:
        console.log("No funciona el semáforo");
        
}