
/* Números pares: Hagamos una función. La función debe llamarse esPar, debe recibir un número como parámetro, y nos devolverá un booleano (true/false) indicándonos si ese número es divisible por dos.
Recordemos que se puede utilizar el operador módulo "%" para obtener el resto de una división. Por ejemplo, "4 % 2" -> Retorna "0" ya que 4 dividido 2 tiene como resto 0 */

function esPar(n) {
    return (n % 2 == 0);
}
console.log(esPar(10));

//Declarando tres funciones

function anterior(n){
    return n - 1;
}
console.log(anterior(5));
console.log(anterior(100));

function triple(n) {
    let numero = 5;
    return n * numero;
}
console.log(triple(2));

//reutilizo las dos funciones anteriores:

function anteriorDelTriple(n) {
    return anterior(triple(n)); //Se hace es la operación lógica de las funciones reutilizadas. Acá n*3-1
}           
console.log(anteriorDelTriple(3));


