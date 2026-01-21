
// *siempre es mas facil crearlo todo las ventanas y todo y solo usarlo los bontones para ocultarlo y abrirlo por que es mas facil y sencillo

console.log("************************************")
// console.log("DOOM!!!!")
// // /+ OBJETO WINDOW
// // window => objeto que representa al navegador y todas sus propiedades internas es un objeto global

// // Obtener la altura y el ancho del viewport de la pantalla si lo achico otra medida tendra y asi.
// // let alto = window.innerHeight;
// // let ancho = window.innerWidth;

// // console.log(`Ancho: ${ancho}`);
// // console.log(`Alto: ${alto}`);

// // window.location contiene un obj con información
// // de la dirección que se está visitando a través del navegador
// // el puerto, href, dominio,hash, etc
// // let navegacion = window.location;
// // console.log(navegacion);

// // let url = navegacion.href;
// // console.log(url);

// // console.log(navegacion);

// // window.document => objeto que tiene toda la información
// // DEL DOM!!!!!!!!!!!!! todas sus etiquetas etc la estructura completa
// // console.log(window.document);


// // $creamos un elemento  en html y para poder cogerlo y hacer maravilla debemos capturarlo con el id que debe tener de atributo
// // $ejemplo

// let parrafo=document.getElementById("parrafo")
// console.log(`ver su contenido: ${parrafo.innerHTML}`)

// // $cambiar su contenido con html y automaticamente se mostrar en el html actualizado en pantalla
// parrafo.innerHTML="<h1>Hola aqui aprenderas mucho</h1>"

// console.log(parrafo.innerHTML)
// // $podemos colocar estilos desde JavaScript
// parrafo.style.backgroundColor = "#444444";
// parrafo.style.padding="10px"
// parrafo.style.color="white"

// //! agregar clases desde javascript
// console.log("==========")
// let header = document.getElementById("header");
// console.log(`muestra lista de clases de un elemento: ${header.classList}`);

// header.classList.add("clase4","clase5")
// console.log(`agregago una o n clase:${header.classList}`)

// console.log(`comprueba si existe la clase V o F:${header.classList.contains("clase4")}`)

// header.classList.remove("clase1","clase2")
// console.log(`elimino una o n clase: ${header.classList}`)

// let cuadrado=document.getElementById("cuadrado")
// console.log(`altura del elemento: ${cuadrado.clientHeight}`)
// console.log(`ancho del elemento: ${cuadrado.clientWidth}`)

// console.log(`mide distancia entre su padre(body) y su hijo techo: ${parrafo.offsetTop}`)
// console.log(`mide la distancia desde la parte izquierda: ${parrafo.offsetLeft}`)

// console.log(`Devuelve la cantidad de pixeles que el elemento lleva como scroll interno: ${cuadrado.scrollTop}`);

// //^ MANIPULACION DEL DOOM
// // ^crear un nuevo elemento
// let p=document.createElement("p")

// //^ colocar el contenido al elemento
// p.innerHTML="Soy el nuevo elemento creado"

// //^debo decirle en donde se va colgar el hijo de quien va ser 
// header.appendChild(p)

// //^ eventos
// let boton=document.getElementById("boton")
// boton.onclick=()=>{
//     console.log("presionaste click!")
// }

// //_ atributos en js
// console.log(`Este el valor del atributo: ${parrafo.getAttribute("id")}`)
// parrafo.setAttribute("id","lorenzo")//actualiza el atributo y si no lo crea desde cero
// console.log(`cambio el valor del atributo: ${parrafo.getAttribute("id")}`)
// parrafo.removeAttribute("id")
// console.log(`existe o no el atributo V o F: ${parrafo.hasAttribute("id")}`)

// &DESTRUCTURACION

// & DESTRUCTURACION EN ARRAY
const colores = ["rojo", "verde", "azul"];
const [a, b, c] = colores;
console.log(a)
console.log(b)
console.log(c)
const [primero, , tercero] = colores;
console.log(primero)
console.log(tercero)

// & DESTRUCTURACION OBJETOS
const persona = { nombre: "Ana", edad: 30 };
const { nombre, edad } = persona;

// & OPERADOR REST




console.log("************************************")