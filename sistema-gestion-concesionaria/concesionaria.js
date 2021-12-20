/* 2. En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma 
carpeta del archivo donde estás trabajando. Además, necesitarás crear un objeto literal llamado 
concesionaria que contendrá todas las funcionalidades que el cliente solicita. Por último, nuestro 
objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada 
anteriormente. */
let autos = require('./autos')

const concesionaria = {
   autos: autos,

/* 3. Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto 
que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no 
encontrar el mismo, deberá retornar null. */

   buscarAuto: function (patente) {
      for (let i = 0; i < this.autos.length; i++) {
         if (patente === this.autos[i].patente) {
            return autos[i]
         }
      }
      return null
   },

/* 4. Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, 
en caso de encontrar al automóvil, le asigna el estado de vendido. ¿Cómo lo resuelven? 
Recordatorio: Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto. */

   venderAuto: function (patente) {
      let auto = this.buscarAuto(patente)
      if (auto) {
         auto.vendido = true
      }
   },

/* 5. La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos
para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, 
usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer 
los autos que ya fueron vendidos. */

   autosParaLaVenta: function () {
      let disponibles = [];
      for (let i = 0; i < this.autos.length; i++) {
         if (this.autos[i].vendido === false) {
            disponibles.push(this.autos[i])
         }
      }
      return disponibles
   },

/* 6.María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. 
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. 
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. 
Vas a tener que desarrollar la funcionalidad autosNuevos. 
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta? */

   autosNuevos: function () {
      let autosNuevos = [];
      let autosParaVender = this.autosParaLaVenta();
      for (let i = 0; i < autosParaVender.length; i++) {
         if (autosParaVender[i].km < 100) {
            autosNuevos.push(autosParaVender[i])
         }
      }
      return autosNuevos
   },

/* El cliente le pidió saber cuánto dinero generaron las ventas. María te pide que completes la función 
listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido.*/

   listaDeVentas: function() {
      let listaDeVentas = []
      for(i = 0; i < this.autos.length; i++){
         if(this.autos[i].vendido === true){
            listaDeVentas.push(autos[i].precio)
         }
      }
      return listaDeVentas
   },

/* Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas */

    totalDeVentas: function() {
        let listaDeVentas = this.listaDeVentas();
        let totalVentas = 0
        for(i = 0; i < listaDeVentas.length; i++){
            totalVentas += listaDeVentas[i]
        }
        return totalVentas
    },

/* Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega 
una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. 
Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra.
Una es el costo total: si el total de un auto excede lo que la persona puede pagar, no va a comprar el auto.
 Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de 
 la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto 
y una persona y devuelva true si la misma puede comprar el auto. 
Una persona va a ser representada mediante un objeto literal: */

   Persona = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   },

   puedeComprar: function(auto, persona){
      if(persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas)){
         return true
      } else{
         return false
      }
},

/* Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función 
autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
La función debe de realizar los siguientes pasos:
1) Obtener los autos para la venta
2) Por cada uno de los autos debe probar si la persona puede comprarlo.
3) Luego debemos retornar los que pueda comprar.
---Reutilizar funciones anteriores---
*/
   autosQuePuedeComprar: function(persona){
        let autosEnVenta = this.autosParaLaVenta();
        let autosQuePuedeComprar = [];
        for (let i = 0; i < autosEnVenta.length; i++) {
            if (this.puedeComprar(autosEnVenta[i], persona) === true) {
              puedeComprar.push(autosEnVenta[i])  
            }            
        }
        return autosQuePuedeComprar
    }
};