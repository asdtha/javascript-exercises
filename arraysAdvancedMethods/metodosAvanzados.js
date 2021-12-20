// Metodos de array avanzados

/* // functionpadre(function () {
    //codigo aqui
//    return a
// });

// Método map(); -- se ejecuta sobre un array dado y recibe como parametro un callback y retorna 
// un array nuevo con la misma cantidad de elementos del array original

Let numeros = [2, 4, 6];
let dobleDeLosNumeros = numeros.map(function (unNumero) {
    return unNumero*2;
});
console.log(dobleDeLosNumeros); // [4, 8, 12]

// Metodo filter(); filtra los elementos de un array dependiendo de la logica implementada
//se ejecuta sobre un array dado y recibe como parametro un callback

Let mayores = edades.filter(function (edad) {
    return unaEdad >= 18;
});

//  Método reduce(); su finalidad es reducir al maximo un array dado, retornando un solo valor
 */

// Playground ejercicio map

let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function (num) {
    return num - 1
})
console.log(horariosAtrasados);


//Playground Filter

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(estudiantes) {
    return estudiantes.aprobado 
})
let desaprobados = estudiantes.filter(function(estudiantes) {
    return !estudiantes.aprobado 
})
console.log(aprobados)
console.log(desaprobados)

 // Playground REDUCE
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(totalVueltas, vueltas) {
    return totalVueltas + vueltas
})
console.log(totalVueltas);

// Playground FOREACH

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(valor) {
    console.log(valor)
})
