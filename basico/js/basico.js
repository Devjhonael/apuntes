//! Bienvenido a curso basico de js

//^ DECLARACION DE VARIABLES
let edad = 20; //normales
const pi = 3.1416; //constantes

//^ FORMAS DE IMPRIMIR
console.log(edad + " => " + pi); //concatenando
console.log(`edad ${edad} constante pi ${pi}`); //backticks

//^ OPERADORES
console.log("+ - * /(cociente) %(residuo)");

//^ CONDICIONALES IF = OPERADOR TERNARIO
// if (condicion) {
//   ("si cumple");
// } else {
//   ("no cumple");
// }
// condicion ? "si cumple" : "no cumple";

// ^COMPARADORES ARITMETICOS
console.log("> < >= <= !== == ===");

//^ COMPARADORRES LOGICOS
console.log("Y=&& O=|| not=!");

//* ARREGLOS
let vacio = []; //declaracion
let nombres = ["pedro", "juan"];
console.log(nombres[0]);

// *METODOS DE ARREGLOS
// *arreglo.metodo
console.log(`cantidad de elementos: ${nombres.length}`);
nombres.push("beatriz"); //agrega un nuevo elemento
console.log(nombres);

//@ OBJETOS
let objPersona = {
  nombre: "Jorge",
  peso: 72,
  casado: false,
  hobbies:['saltar','caminar','andas en bicicleta']
};
console.log(`${objPersona.nombre} ${objPersona['peso']}`)

//@agregar un nuevo atributo
objPersona.apellido="maquera"
console.log(objPersona)

//#FUNCIONES
//# 1. Funciones que no retornan valor ni reciben parametros
function Saludar() {
  console.log("Hello world");
}
Saludar() //#llamar ala funcion

//# 2. Funciones que retornar valor y no reciben parametros
//# /** = con esto podemos documentar nuestra funcion
function retornaNombre() {
  let nombre = "Jhonatan";
  return nombre;
}
let respuesta=retornaNombre()
console.log(respuesta)

//# 3. Funciones que reciben parametros y retornan valor(una forma de reclarar cada funcion que utilizamos)
/**
 * Funcion que recibe dos numeros y calcula
 * el binomio cuadrado perfecto de ambos
 * @param {number} a primer numero
 * @param {number} b segundo numero
 * @return {number} El resultado del binomio
 */
function retornarBinomio(a, b) {
  let rpta = a * a + 2 * a * b + b * b;
  return rpta;
}
console.log(retornarBinomio(2,3))

//# 4. Funciones que no retornan valor y que reciben parametros
function imprimirPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}
//# invocando a la función 4
let arreglos = [4, 20, 1, 0, 5, 63, 98];
imprimirPares(arreglos);

//#PARAMETROS POR DEFECTO DE UNA FUNCION 
/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar.
 * Si el algoritmo encuentra el nombre buscado dentro del arreglo,
 * retorna true, en caso contrario retorna false
 * @param {array} nombres
 * @param {string} busqueda
 * @return {boolean}
 */
function buscarNombre(nombres = [], busqueda = "") {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      // la sentencia return en una función, no sólo retorna un valor
      // sino que también hace que la función deje de ejecutarse en esa
      // sentencia, no importa si está dentro un for, while, if, etc
      return true;
    }
  }
  // ¿que significa que el ciclo for acabe?
  return false;
}

// let nombres = ["martin", "jaime", "anita", "paola", "daniel"];
// let resultadoBusqueda = buscarNombre();
// console.log(resultadoBusqueda);


//# FUNCIONES ANONIMAS (las funciones anonimas son funciones cuyo valor se guarda en una variable.)

//#las funciones siempre se crean con CONST xk no se modifica buena practica
const sumar = function (a, b) {//no tiene nombre es anonima
  return a + b;
};

let rpta = sumar(7, 8);
console.log(rpta);

//# FUNCIONES DE FLECHA ARROW FUNCTION
const sumarFlecha = (a, b) => {//IGUALES A LAS ANONIMAS
  return a + b;
};
console.log(sumarFlecha(500, 20));


// FUNCIONES DENTRO DE OTRAS FUNCIONES
const areaCirculo = (radio) => {
  const PI = 3.1416;

  const cuadrado = (numero) => {
    return numero * numero;
  };

  return PI * cuadrado(radio);
};

let rpta2 = areaCirculo(13);
console.log(rpta2);


//#FUNCIONES DE FLECHAS SIMPLIFICADAS
//# Regla 1: Si la función sólo tiene una linea de ejecución
// se pueden omitir las llaves "{}"
const sumarE = (a, b) => console.log(a + b);
sumarE(52, 11);

//# Regla 2: Si la función recibe 1 parametro solamente
// se pueden omitir los paréntesis
const cuadrado = numero => console.log(numero * numero);
cuadrado(12);

//# Regla 3: Si la función sólo tiene una linea de ejecución y a su vez
// retorna un valor
// Se puede obviar la palabra reservada 'return ' y en su lugar, encerrar ()
// el retorno en un paréntesis
const cubo = n => (n*n*n);
console.log(cubo(5));

//$ LOS METODOS DE LOS STRING MAS UTILIZADOS
let mensaje="bienvenido 2026"
console.log(`minuscula: ${mensaje.toLocaleLowerCase()}`)
console.log(`mayuscula: ${mensaje.toUpperCase()}`)
console.log(`cantidad de palabras: ${mensaje.length}`)
console.log(`elimina espacios: ${mensaje.trim()}`)
console.log(`validar extensiones prefijo: ${mensaje.endsWith()}`)

//% METODOS UTILIZADOS DE LISTA DE ARREGLOS
//% arreglo.forEach(()=>{}) muestra lo que esta dentro
//% /**
//%  * El callback se ejecuta tantas veces como elementos
//%  * tenga el arreglo, el callback recibe hasta 3 elementos
//%  * (elemento_actual, iteracion?, copia_del_arreglo?)=>{}
//%  */
//% ? significa que ese parámetro es opcional

// % FOREACH
let arreglo = ["Jorge", "Luis", "Karla", "Jane"];
arreglo.forEach((nombre) => {
  console.log(nombre);
    // en cada vuelta pueden dibujar un producto
  // en forma de card en el DOM para un E-COMMERCE creando una variable contenido
});


//% FILTER
// /**
//  * Funcion de los arreglos que recibe un callback en el cual
//  * se pueden RETORNAR un arreglo de elementos de acuerdo a ciertas condiciones
//  * Sirve como un filtro de elementos
//  * Ejecuta el callback tantas veces como elementos tenga
//  * (elemento_actual, iteracion?, copia_del_arreglo?)=>{}
//  */
let numeros = [20, 1, 7, 82, 6, 9, 32, 10, 0, 45];

let mayoresIgualesQueDiez = numeros.filter((elemento, i, arreglo) => {
  if (elemento >= 10) {
    return elemento;
  }
});
console.log(mayoresIgualesQueDiez);

//% MAP
// /**
//  * Devuelve un arreglo de la misma cantidad de elementos del arreglo }
//  * original con las transformaciones que el usuario le haga a cada elemento
//  * A diferencia del filter, la función map no puede retornar menos elementos
//  */
let nombre = ["Joaquin", "Maria", "Thamara", "Allison", "Jorge"];
let nombresMayusculas = nombres.map((name) => {
  return {
    original: name,
    minuscula: name.toLowerCase(),
    mayuscula: name.toUpperCase(),
  };
});
console.log(nombresMayusculas);

//% FIND
/**nos retorna la 1ra coincidencia que se relacione con la busqueda */
let nombresito = [
  { nombre: "Jose", apellido: "Martinez" },
  { nombre: "Mia", apellido: "Lune" },
  { nombre: "Kiwi", apellido: "DeMontaña" },
  { nombre: "Mia", apellido: "Lune" },
];

let busqueda = nombresito.find((buscar) => buscar.nombre === "Mia");
let busqueda2 = nombresito.find((buscar) => buscar.nombre === "Kiwi");
let busqueda3 = nombresito.find((buscar) => buscar.nombre === "Miaurwick");

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);


//% Some
//**
// Sirve para buscar elementos de un array por medio de la comparación por parametro y retorna true o false, se usa para verificar que el elemento existe.
//  */
let nombress = [ 
		{nombre: "Jose", apellido: "Martinez"},
		{nombre: "Mia", apellido: "Lune"},
		{nombre: "Kiwi", apellido: "DeMontaña"},
		{nombre: "Mia", apellido: "Lune"},
];

let busquedaa = nombress.some((buscar) => buscar.nombre === "Mia");
console.log(busquedaa); // Retornara Treu ya que si existe //


// array.splice(posicion_inicia, elementos_a_eliminar, elementos_a_insertar)
console.log("--SPLICE--");
let productos = [
  "TV Samsung",
  "Tablet Android",
  "Laptop Razer",
  "Smartphone Xiaomi",
];
// A partir de la posición 1, eliminar 1 elemento
// productos.splice(1, 1);
// console.log(productos);
// A partir de la posición 0, eliminar 1 elemento e insertar el elemento "PC gamer"
// productos.splice(0, 1, "PC gamer");
// console.log(productos);
// A partir de la posición 2, no eliminar elementos e insertar 2 nuevos elementos
// productos.splice(2, 0, "Mouse HyperX", "Audífonos Razer");
// console.log(productos);

// --------- indexOf -------
console.log("--indexOf --");
let posicionMouse = productos.indexOf("Mouse HyperX");
console.log("Posición del mouse:");
console.log(posicionMouse);

// & PROPIEDADES DE FECHAS
// & FALTA  COMPLETAR

// - PROPIEDADES DE MATH
//- FALTA COMPLETAR


  // +CLASES
  // 1 modelo de necegocio es narrar todo lo que quieres que haga tu aplicacion
// 2 obtener requerimientos

// /**
//  * Los nombres de las clases deben iniciar con una Mayúscula
//  */
// class Restaurant {
//   aforo;
//   nroMesas;
//   direccion;
//   categoria;
//   telefonos;
//   nombre;
//   delivery;
//   /**
//    * Para la 'tipificacion':
//    * Será tipo "A" si el aforo es mayor a 500 personas
//    * Será tipo "B" si es aforo es mayor a 300 personas
//    * Será tipo "C" si el aforo es menor igual a 300 personas
//    */
//   tipificacion;

//   /**
//    * Funcion que se ejecuta automaticamente al momento de crear un objeto
//    * da valores iniciales a un objeto
//    */
//   constructor(
//     _aforo = 0,
//     _nroMesas = 0,
//     _direccion = "Sin Dirección",
//     _categoria = "Sin Categoria",
//     _telefonos = [],
//     _nombre = "Sin Nombre",
//     _delivery = false
//   ) {
//     // this : acceder al scope interno de la clase.
//     // this: se usa para acceder a los atributos y métodos de la clase.
//     this.aforo = _aforo;
//     this.nroMesas = _nroMesas;
//     this.direccion = _direccion;
//     this.categoria = _categoria;
//     this.telefonos = _telefonos;
//     this.nombre = _nombre;
//     this.delivery = _delivery;

//     //podemos hacer evaluaciones o comparaciones 
//     if (this.aforo > 500) {
//       this.tipificacion = "A";
//     } else if (this.aforo > 300) {
//       this.tipificacion = "B";
//     } else {
//       this.tipificacion = "C";
//     }
//   }
//   //asi se crean los metodos dentro de una clase
//   imprimirTelefonos() {
//     console.log(`Teléfonos del restaurant: ${this.nombre}`);
//     for (let i = 0; i < this.telefonos.length; i++) {
//       console.log(`📞 ${this.telefonos[i]}`);
//     }
//   }

//   imprimirTelefonos2() {
//     for (const tel of this.telefonos) {
//       console.log(`Telefono: ${tel}`);
//     }
//   }

//   toString() {
//     return this.nombre;
//   }

// }

// Instanciando una clase : Creando un objeto a partir de una clase
// let objTanta = new Restaurant(
//   800,
//   200,
//   "Vallecito",
//   "Comida Criolla",
//   ["974204853", "974854512"],
//   "Tanta",
//   true
// );

// let objAstrid = new Restaurant();

// Modificando los atributos de un objeto
// objAstrid.aforo = 1000;

// console.log(objTanta);
// console.log(objAstrid);

// objTanta.imprimirTelefonos();
// objTanta.imprimirTelefonos2();

// PARA CREAR NUESTROS PROPIOS SNIPPETS
// preferences/configure snippets/selecciona_lenguaje/GO
// el $1 permite dar tab y saltar de 1 a 1

// 	"nombre_snippets": {
// 		"prefix": "palabra_asignada_enter",
// 		"body": [
// 			"const $0mifuncion=($1)=>{$2}",
// 			"$2"
// 		],
// 		"description": "descripcion_de_esto"
// 	}