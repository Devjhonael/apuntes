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
let arreglo = [4, 20, 1, 0, 5, 63, 98];
imprimirPares(arreglo);

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





//PARA CREAR NUESTROS PROPIOS SNIPPETS
//preferences/configure snippets/selecciona_lenguaje/GO
//el $1 permite dar tab y saltar de 1 a 1

	// "nombre_snippets": {
	// 	"prefix": "palabra_asignada_enter",
	// 	"body": [
	// 		"const $0mifuncion=($1)=>{$2}",
	// 		"$2"
	// 	],
	// 	"description": "descripcion_de_esto"
	// }