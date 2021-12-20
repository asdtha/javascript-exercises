let fs = require('fs');
let autosJSON = fs.readFileSync(__dirname + '/AUTOS.json', 'UTF-8');
let autos = JSON.parse(autosJSON);
console.log(autos)

//console.log(autos);

let carrera = {
    autos: autos,
    //2.B
    autosPorTanda: 5,
    // 2.C
    autosHabilitados: function () {
        return this.autos.filter(auto => auto.sancionado === false);
    },
    //2.D
    listarAutos: function (arrayAutos) {
        arrayAutos.forEach(auto => {
            let estado = auto.sancionado ? "sancionado" : "puede correr";
            console.log("Piloto: " + auto.piloto + ", Patente: " + auto.patente + ", peso en kg: " + auto.peso + ", estado: " + estado);
        });
    },
    //2.E
    buscarPorPiloto: function (piloto) {
        return this.autos.find(auto => auto.piloto === piloto);
    },
    //2.F
    buscarPorAceleracion: function (aceleracion) {
        let autosHabilitados = this.autosHabilitados();
        let autosResultantes = autosHabilitados.filter(auto => auto.aceleracion >= aceleracion)
        return autosResultantes
    },
    // 2G
    ordenarPorAnguloDeGiro: function () {
        return this.autos.sort((a, b) => a.anguloDeGiro - b.anguloDeGiro);
    },
    // 2H
    generarTanda: function (autoCilindrada, autoPeso) {
        let habilitados = this.autosHabilitados();
        let resultado = habilitados.filter(auto =>
            auto.cilindrada <= autoCilindrada
            && auto.peso <= autoPeso
        )
        return resultado.slice(0, this.autosPorTanda)
    },
    //2I
    calcularPodio: function (cilindrada, peso) {
        let tanda = this.generarTanda(cilindrada, peso);
        tanda.sort((a, b) => b.puntaje - a.puntaje)
        tanda.slice(0, 3)
        console.log("El ganador es: "
            + tanda[0].piloto + ", con un un puntaje de: " + tanda[0].puntaje + "; el segundo puesto es para: "
            + tanda[1].piloto + ", con un un puntaje de: " + tanda[1].puntaje + " y el tercer puesto es para: " 
            + tanda[2].piloto + ", con un un puntaje de: " + tanda[2].puntaje);
    }
}



// /* EJ 2C */
console.log("***** Autos Habilitados *****")
console.log(carrera.autosHabilitados())
/* EJ 2D */
console.log("***** Lista de Autos *****")
console.log(carrera.listarAutos(carrera.autos))
// /*EJ 2E*/
console.log("***** Buscar por piloto *****")
console.log(carrera.buscarPorPiloto("Monah Lyal"))
/* EJ 2F */
console.log("***** Buscar por ACELERACION *****")
console.log(carrera.buscarPorAceleracion(1.52))
/* EJ 2G */
console.log("***** Ordenado por Angulo de Giro *****")
console.log(carrera.ordenarPorAnguloDeGiro())
/* EJ 2H */
console.log("***** GENERAR TANDA *****")
console.log(carrera.generarTanda(8000, 1000))
/* EJ 2I */
console.log("***** CALCULAR PODIO*****")
console.log(carrera.calcularPodio(8000, 1000))
