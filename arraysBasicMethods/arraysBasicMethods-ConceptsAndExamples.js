// .push

let colores = ["Azul", "Blanco", "Rojo", "Verde"];
colores.push("Violeta", "Amarillo"); //Permite agregar al final del array un dato en particular. Puede recibir como parametro uno o mas elementos separados por ,
console.log(colores);

// .pop
let nombres = ["Juana", "Mariana", "Pablo"];
nombres.pop(); // No recibe parametros y siempre saca el ultimo elemento del array
console.log(nombres);

// el .pop tiene la particularidad que ademas de sacar el ultimo elemento, tambien retorna ese dato. Por lo que si se necesita el mismo lo mas recomendable es Almacenar la ejecucion del metodo en una nueva variable:
let names = ["Juana", "Mariana", "Pablo"];
let elUltimo = names.pop();
console.log(elUltimo);

// shift(); y unshift(); tambien agregan y quitan elementos pero al principio del array
let nombress = ["Juana", "Mariana", "Pablo"];
let elPrimero = nombress.shift(); //guarda el primer elemento en la nueva variable
console.log(nombress);
console.log(elPrimero); // ["Mariana", "Pablo"] // "Juana"

//unshift: agrega elementos al principio

let colors = ["Azul", "Blanco", "Rojo", "Verde"];
colors.unshift("Amarillo", "Violeta"); 
console.log(colors);

//Ejercicios
//join
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
   let fraseNueva = arrayFrase.join(); // Le asigna la frase a la nueva variable
  console.log(fraseNueva);

  // Arrays pop
  let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  let alumnoEgresado = estudiantes.pop();  // saca el ultimo y lo guarda en una variable
  console.log(alumnoEgresado);
  
 // push
  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  estudiantes.push({nombre: 'Juan', promedio: 5, curso: 'iOS'}); // lo agrega al objeto
  estudiantes.push({nombre: 'Miguel', promedio: 2, curso: 'Android'}); //los agrega al objeto

  // shift
  let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
    let alumnoDeBaja = estudiantes.shift(); // saca el primer elemento y lo guarda en la variable
    console.log(estudiantes);
    

    //unshift
    let estudiantes = [
        {
          nombre: 'Alvaro',
          promedio : 9,
          curso : 'Android',
        },
        {
          nombre: 'Daniel',
          promedio : 6,
          curso : 'Full Stack',
        },
        {
          nombre: 'Alexis',
          promedio : 3,
          curso : 'iOS',
        }
      ]
      estudiantes.unshift({nombre: "Mariana", promedio: 9, curso: "Full Stack"});
      estudiantes.unshift({nombre: "Francisco", promedio: 2, curso: "Android"});
      console.log(estudiantes);
      
 
