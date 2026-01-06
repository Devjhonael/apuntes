// propiedades de los arragelos super!!!
console.log("+++++++ forEach +++++++++++");

// forEach((elemento,i,objeto)=>{})
// forEach(function(){})
// el callback se ejecuta tantas veces como el arreglo tenga de elementos osea traera cada registro del arreglo

// console.log(data.peliculas);
// lo malo es que solamente puedes mostrar todos los elementos del arreglo pero no puedes retornar nada nunca solamente para mostrar
// tampoco podemos guardarlo en una variables asi
// let resultado=data.peliculas.forEach(()=>{})
// data.peliculas.forEach((peli) => {
//   console.table(peli);
// });

console.log("+++++++ filter +++++++++++");
// puede retornar uno o mas elementos de acuerdo a ciertas condiciones sirve como un filtro
// recuerda que es un filtro x lo cual siempre se usa un if casi siempre y cuando coincida ese valor lo mandaras de retorno y lo guardaras en un array

// let numeros = [
//   1, 2, 5, 4, 9, 6, 5, 6, 22, 5, 5, 2, 2, 2, 4, 5, 0, 5, 1, 5, 2, 12, 0, 2,
// ];
// let numerosMayores = numeros.filter((elemento) => {
//   if (elemento > 5) {
//     return elemento;
//   }
// });

// console.table(numerosMayores);

// crear un metodo donde nosotros pasemos los parametros y sea filtrado independentemente
// const filtro = (arreglo, numero) => {
//   let respuesta = arreglo.filter((objArreglo) => {
//     if (objArreglo > numero) {
//       return objArreglo;
//     }
//   });
//   return respuesta;
// };

// let valor = +prompt("ingrese un valor a buscar");
// console.log(filtro(numeros, valor));

console.log("+++++++++ map +++++++++");
//crea un nuevo arreglo ojo con todos datos nuevos y retorna el nuevo
let nombres = ["pamela", "sonia", "lurdes", "jhonael"];
// retornar un arreglo de todos los elementos
//recorre uno x uno los elementos y podemos modificarlo a nuesto gusto
// puede hacer modificaciones a cada elemento
// no funciona los if de filtro xk retorna todo el arr completo

let nombresModificados = nombres.map((name) => {
  return {
    origianl: name,
    miniscula: name.toLowerCase(),
    mayuscula: name.toUpperCase(),
  };
});

// console.log(nombres);

console.log("------ SPLICE --------");
let productos = [
  "plancha",
  "mesa",
  "sillas",
  "ollas",
  "platos",
  "cama",
  "colchon",
  "zapatos",
  "cocina",
  "lampara",
];

//productos.splice(posicion_inicial,elementos_eliminar,elemtos_insertar)
console.log(productos);

//me trae la cantidad de elementos que quiero contando desde 0->n-1
// productos.splice(9)

//desde que posicion que deseo eliminar y la cantidad de elementos a eliminar del arreglo
// productos.splice(1,4)

//desde la posicion 1 vas a eliminar 2 elementos y en esa posicion que iniciaste osea 1 vas a colocar mantequilla (es para agregar puedes agregar 1 o muchos elementos al arreglo indicando esa posicion donde quieres que se coloque)
// productos.splice(1,2,"mantequilla")

console.log(productos);

console.log("----- indexOf -------");
//^ --------- indexOf -------
// -1= cuando no se encuentra el valor buscado
//^ si encuentra el valor entonces retorna la posicion en que sele encontro
// let posicionMouse = productos.indexOf("lampara");
//  console.log(`Posición del mouse: ${posicionMouse}`);

//^ -------- pop -----------
//^ Sirve para extraer el último de un arreglo
//^ la función además, retorna dicho elemento
// console.log("//////////////pop////////////");
let elementoEliminado = productos.pop();
console.log(`Eliminaste: ${elementoEliminado}`);
// console.log(productos);

console.log(window);

console.log("+++++++++ find ++++++++");
// .find encontrará el primer elemento del arreglo que cumpla la condición y retornará ese valor, algo importante es que a diferencia de .filter que crea un arreglo con todos los valores que cumplen una condición, en el caso de .find solo extraerá el valor del primero que cumpla la condición.

let apellido = [
  "maquera",
  "cohaila",
  "rodrigues",
  "lorenzo",
  "marco",
  "maquera",
  "cohaila",
];

//retorna la 1ra coincidencia
const primer=apellido.find(ape=>ape=='cohaila')
console.log(primer)

console.log("+++++++++ some ++++++++");

// .some verificará si un elemento existe o no en el arreglo, a diferencia de los otros métodos que te retornan un arreglo nuevo o el valor, en este caso solo te dirá si existe o no un elemento que cumpla la condición o implementación.

// Supongamos que un cliente llama buscando un auto de la marca Ferrari, en nuestra base de datos no tenemos ninguno pero podremos comprobarlo con un .some
let apellidos = [
  "maquera",
  "cohaila",
  "rodrigues",
  "lorenzo",
  "marco",
  "maquera",
  "cohaila",
];

//retorna la 1ra coincidencia
const primera=apellidos.find(ape=>ape=='cohaila')
console.log(primer)