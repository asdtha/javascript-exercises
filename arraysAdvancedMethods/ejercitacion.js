// crear una función que reciba una array y retorne un nuevo array con todos los valores divididos por la suma de todos los del array 
//(usar map() y reduce())
let arrayNum = [1, 2, 3, 4, 5]
function divisorDeArrays(numeros) {
    let suma = numeros.reduce((acum, numero) => acum + numero)
    let arrayResultado = numeros.map(numero => numero / suma)
    return arrayResultado
}
console.log(divisorDeArrays(arrayNum)); //[0.66666666666667, 0.133333333333, 0.2, 0.2666666666666, 0.33333333333]

//Crear una función que reciba un array de palabras y un número, y que retorne un array con solo las palabras que tengan más que esa cantidad
//de letras —revisá cómo funciona el método filter()—.
let arrayPalabras = ["leandro", "nicolas", "esteban", "pedro", "jose"]
function filtradorDeArrays(palabras, numero) {
    let resultado = palabras.filter(palabra => palabra.length > numero)
    return resultado
}
console.log(filtradorDeArrays(arrayPalabras, 4)); //[ 'leandro', 'nicolas', 'esteban', 'pedro' ]

// Crear un array de objetos literales, cada objeto va a ser de alumnos, y va a tener dos atributos: nombre y nota. Crear dos funciones
//que ordenen el array: una va a ordenar a los alumnos alfabéticamente y la otra lo hará por nota de mayor a menor
let alumnos = [
    { nombre: "Ezequiel", nota: 7 },
    { nombre: "Martin", nota: 10 },
    { nombre: "Leandro", nota: 4 },
]
console.log(alumnos.sort((alumnoA, alumnoB) => alumnoA.nota - alumnoB.nota));
// [
// { nombre: 'Leandro', nota: 4 },
// { nombre: 'Ezequiel', nota: 7 },
// { nombre: 'Martin', nota: 10 }
// ]
console.log(alumnos.sort((alumnoA, alumnoB) => {
    if (alumnoA.nombre > alumnoB.nombre) {
        return 1;
    }
    if (alumnoA.nombre < alumnoB.nombre) {
        return -1;
    }
    return 0;
}));
// [
// { nombre: 'Ezequiel', nota: 7 },
// { nombre: 'Leandro', nota: 4 },
// { nombre: 'Martin', nota: 10 }
// ]

/* Ejercicio integrador
Tenemos que hacerle el sistema a una verdulería, en este establecimiento los productos tienen nombre, precio y cantidad vendida.
El verdulero tiene un array de objetos literales con esta información, al sistema hay que agregarle una a función (o varias) que realice los siguientes pasos:
1. Calcular la ganancia total de todos los productos.
2. Permitir buscar un producto por nombre.
3. Permitir recibir un valor y que te indique todos los productos que vendieron más que
ese valor.
4. Encontrar un producto y asignarle un nuevo precio—reutilizar el código que te permite
encontrar producto por nombre—.
5. Calcular la ganancia total luego de pagar 45% de las ganancias en impuestos. */

let verduras = [
    { nombre: "lechuga", precioPorKilo: 150, kilosVendidos: 15 },
    { nombre: "tomate", precioPorKilo: 180, kilosVendidos: 20 },
    { nombre: "cebolla", precioPorKilo: 70, kilosVendidos: 100 },
    { nombre: "papa", precioPorKilo: 55, kilosVendidos: 150 },
    { nombre: "zapallo", precioPorKilo: 75, kilosVendidos: 7 }
]

// 1.Calcular la ganancia total de todos los productos.
function gananciaTotal(productos) {
    let gananciaPorProducto = productos.map(producto => producto.precioPorKilo * producto.kilosVendidos) //obtengo el array de cada verdura con su ganancia
    let resultado = gananciaPorProducto.reduce((acum, elemento) => acum + elemento) //sumo todos los elementos del array
    return resultado
}

// 2. Permitir buscar un producto por nombre
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
function encontrarProducto(productos, productoAEncontrar) {
    return productos.find(producto => producto.nombre === productoAEncontrar)
}
// let lechuga = encontrarProducto(verduras, "lechuga")
// console.log(lechuga);

// Permitir recibir un valor y que te indique todos los productos que vendieron más que ese valor.
function vendiMasQue(productos, num) {
    let resultado = productos.filter(producto => producto.kilosVendidos > num)
    return resultado
}

// Encontrar un producto y asignarle un nuevo precio —reutilizar el código que te permite encontrar producto por nombre—.
let producto = encontrarProducto(verduras, "lechuga").precioPorKilo = 110 //mediante la funcion creada previamente busco solo el producto lechuga y accediendo a su propiedad precioPorKilo le indico el nuevo valor
// console.log(verduras);

// Calcular la ganancia total luego de pagar 45% de las ganancias en impuestos.
let gananciaBruto = gananciaTotal(verduras)
let gananciaEnNeto = gananciaBruto - gananciaBruto * 0.45
console.log(gananciaEnNeto);
