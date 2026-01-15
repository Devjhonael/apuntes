console.log("DOOM!!!!")
// /+ OBJETO WINDOW
// window => objeto que representa al navegador y todas sus propiedades internas es un objeto global

// Obtener la altura y el ancho del viewport de la pantalla si lo achico otra medida tendra y asi.
// let alto = window.innerHeight;
// let ancho = window.innerWidth;

// console.log(`Ancho: ${ancho}`);
// console.log(`Alto: ${alto}`);

// window.location contiene un obj con información
// de la dirección que se está visitando a través del navegador
// el puerto, href, dominio,hash, etc
// let navegacion = window.location;
// console.log(navegacion);

// let url = navegacion.href;
// console.log(url);

// console.log(navegacion);

// window.document => objeto que tiene toda la información
// DEL DOM!!!!!!!!!!!!! todas sus etiquetas etc la estructura completa
// console.log(window.document);

// $creamo un elemento  en html y para poder cogerlo y hacer maravilla debemos capturarlo con el id que debe tener de atributo
// $ejemplo

let parrafo=document.getElementById("parrafo")

console.log(parrafo.innerHTML)
