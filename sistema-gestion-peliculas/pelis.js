// dado el json PELICULAS.JSON, necesitamos poder leer su contenido y manejarlo como un array de objetos 
//para poder realizar el siguiente sistema de gestion de pelis

// pido el modulo file system
const fs = require('fs')
// utilizando el modulo leo el json clases 
let peliculasJSON = fs.readFileSync('./peliculas.json','utf-8')
// parseo el string con el json a un array de objetos
let peliculas = JSON.parse(peliculasJSON) 

let sistemaDePeliculas = {
    //agregar las peliculas que nos trajimos de nuestro archivo json. esta bien que aparezca como un array vacio o que deberia haber en su lugar?
    listaPeliculas : peliculas, 
    //metodo para poder agregar peliculas a listaPeliculas
    agregarPelicula: function(peliculaNueva){
        return this.listaPeliculas.push(peliculaNueva)
    },
    //metodo para buscar peliculas por su titulo, recibe el titulo por parametro
    buscarPeliPorTitulo: function(titulo){
        return this.listaPeliculas.find(pelicula => pelicula.titulo === titulo)       
    },
    //metodo para buscar peliculas por su director, que lo recibe por parametro
    buscarPeliPorDirector: function(director){
        return this.listaPeliculas.find(pelicula => pelicula.director === director)
    },
    //modifica la propiedad ganoOscar, es decir, si lo habia ganado se lo saca y si no se lo entrega!
    modificarOscar: function(pelicula){
        if(pelicula.ganoOscar){ // la condición es evaluada como true
            pelicula.ganoOscar = false
        } else {
            pelicula.ganoOscar = true
        }
    },
    //metodo para obtener una lista de pelis que sean del genero que le pasemos por parametro
    filtrarPeliculasPorGenero: function(genero){
        return this.listaPeliculas.filter(pelicula => pelicula.genero === genero)
    },
    //metodo que filtra las peliculas que tengan una calificacion mayor a la que le indiquemos por parametro
    filtrarPeliculaPorCalificacion: function(calificacion){
        return this.listaPeliculas.filter(pelicula => pelicula.calificacionIMDB > calificacion)
    },
    ////metodo que ordene la lista de peliculas por su duracion de menor a mayor
    ordenarPelisPorDuracion: function(){
        return this.listaPeliculas.sort( (a,b) => a.duracion - b.duracion)
    },
    //metodo para ordernar las peliculas por su calificacion de MAYOR A MENOR!!!
    ordenarPelisPorCalificacion: function(){
        return this.listaPeliculas.sort( (a,b) => b.calificacionIMDB - a.calificacionIMDB)
    },
    //metodo para poder sumarle una x cantidad de puntaje al que ya contienen las peliculas, 
    //retorna un array solo con la nueva calificacion.
    sumarCalificacion: function(num){
        return this.listaPeliculas.map(pelicula => pelicula.calificacionIMDB + num)
    },
    // metodo que encuentra una sola pelicula y le modifica el genero existente 
    //(puede agregarle uno, eliminarlo y dejarlo pendiente o simplemente reemplazarlo por otro)
    modificarGenero: function(nombrePeli, nuevoGenero) {
        let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli)

        peliEncontrada.genero = peliEncontrada.genero.split()
        peliEncontrada.genero.push(nuevoGenero)
        console.log("genero agregado correctamente");
   },
   eliminarGenero: function(nombrePeli, generoaEliminar) {
    let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli)
    let indice = peliEncontrada.genero.indexOf(generoaEliminar); 
    peliEncontrada.genero.splice(indice, 1)
    console.log("genero eliminado correctamente");
},  
//metodo que al ingresarle una cantidad de minutos, me devuelva una lista de peliculas cuya duracion sea menor a la ingresada
    peliculasQuePuedoVer:function(minutos) {
    return this.listaPeliculas.filter( pelicula => pelicula.duracionEnMinutos < minutos )
},
//metodo que al ingresarle una cantidad de minutos y el nombre de una pelicula, la busque y
// le encuentre, y me diga si los minutos que yo tengo, alcanzan para que termine de ver la pelicula.
    tengoTiempoDeVerla:function(tituloPeli, minutos) {
    let pelicula = this.listaPeliculas.find( pelicula => pelicula.titulo === tituloPeli )
   return pelicula.duracion <= minutos
},
//metodo que al ingresarle una calificacion ELIMINE todas las peliculas cuya calificacion sea menor a la ingresada por parametro y decuelva las peliculas eliminadas.
eliminarPorCalificacion:function(calificacion) {
    let nuevasPelis = filtrarPeliculaPorCalificacion(calificacion)
    let pelisEliminadas = this.listaPeliculas.filter(peli => peli.calificacinoIMDB < calificacion )
    this.listaPeliculas = nuevasPelis
    return pelisEliminadas
}, //filtro la nueva lista de pelis, y las que van a quedar afuera. guardo la nueva lista, y retorno las que quedaron afuera
}


console.log(sistemaDePeliculas.buscarPeliPorDirector("Jesse Peretz"))
sistemaDePeliculas.eliminarGenero("Career Girls", "Drama")
console.log(sistemaDePeliculas.listaPeliculas[0]);

