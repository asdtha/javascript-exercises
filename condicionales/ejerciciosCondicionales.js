/*-----------------------------------IF / ELSE IF--------------------------------------*/

/* En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa pueden subir al juego.
Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañade. 
Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, 
basado en las siguientes condiciones:
Debe medir más o igual de 1,40 m. y menos de 2 metros.
Si mide menos de 1,40 m hasta 1.20 ., deberá venir acompañado.
Si mide menos de 1,20 m., no podrá subir ni acompañado.*/
 

 function puedeSubir (altura, vieneAcompaniada) {
      if (altura >= 1.40 && altura < 2) {
         return true;
     } else if (altura >= 1.20 && altura < 1.40 && vieneAcompaniada) {
        return true;
     } else {
        return false;
     }
 }
 console.log(puedeSubir(1.3, true));
 
// Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

function puedeSubir (altura, vieneAcompaniada, fuePenalizada) {

    if (fuePenalizada){
        return false;
    } else if (altura >= 1.40 && altura < 2) {
        return true;
    } else if (altura > 1.20 && altura < 1.40 && vieneAcompaniada) {
        return true;
    } else {
        return false;
    }
   
}
console.log(puedeSubir(1.25, true, true));




 