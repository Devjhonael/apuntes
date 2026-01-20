* elemento bloqueante ocupa todo el espacio de su elemento padre
- li,ul,form,h,section.article,nav,header,div,ol etc  son bloqueante

* elemento en linea ocupa todo el espacio de su contenido
- a, span,button,i,strong,em,img,input
- a, span, label, strong, br, input, textarea, abbr, acronym, b, basefont, bdo, big, cite, code, dfn, em, font, i, kbd, q, s, samp, select, small, strike, sub, sup, u, u, var
- son apilables. no tienen ni margin-top ni margin-bottom (por mucho que se lo indiques en el CSS). Si tienen margin-left y margin-right.
- no respetan ni width ni height. Estas medidas dependerán del tamaño en píxels de su contenido

-convierte un elemento en linea a un elemento bloqueando con todos sus atributos display:block;

- unicamente  section{display:inline-block;width:33%;} nos permite convertirlo en linea osea al costado de otro elemento pero tener el margin padding ancho y alto como un elemento bloqueante por eso mucho mas comodo

* css = disenar con codigo
- el estilo que se coloca al final le gana al del principio pero en si solamente se chanta los valores que se van a cambiar ejm
body{
    background-color: red;
    color: white;
}


body{
    color: green;
}
=> lo que va afectar o se va reescribir es el el atributo color xk es el unico que esta sufriendo cambios entiendes
- no es bueno par crear correos electronicos para eso usar algunos build que se encargaran de arrastras y crear los correos electronico OJO 

para normalizar usamos normalize 
no se usa etiquetass para usar css solo clases
- todas las etiquetas deben tener clases 
- gracias a ello podemos tener clases con las especificaciones correctas y solo aplicamos a las etiquetas

- por buenas practicas no es bueno usar los selectores ni tampocos los id si no solamente clases
- selectores agrupados es compartir atributos con otras clases osea como modulos
aplica ese atributo a todos las etiquetas que tengan las clases 
.p-first,
.p-second{
    color: red;
}

.p{
    background-color: aqua;
}

-aplica este atributo a un elemento que tenga las 2 clases

-.p-first.p-second{
    color: red;
}

- tiene que ser una etiqueta p y tbm tiene k tener una clase title si no no se aplica
p.title{
    color:red;
}

selectores compuesto descendiente osea que div>p que p este dentro de un div no importa si esta e el medio o alfondo basta con que este dentro y se aplica los estilos

div p{
    colore:red
}


selectores de atributos se usan para seleccionar un elemento en funcion de un atributo cualquera

se usa para los formulario maso menos
input[atributo="valor"]{

}

input[type=text],input[type=password]{
    color:red;
}


que tal los atributos no tienen completo su nombre ^ indicamos que comienze con el nombre de te
input[type^=te]{
    border:1px solid red;
}

$ que termine con jpg hacer estos estilos
[href$=jpg]{
    border:1px solid red;
}

que contenga ed.team usamos un * como es punto usamos ""
[href="ed.team"]{

}

hay 4 operadores

* selector universal selecciona todo
> hijo directo
+ hermano directo
~ hermanos siguientes

*{
    color:red;
}
todo lo que esta dentro de div colocar estos estilos 
div *{
    color:green;
    
}
hijo directo osea dentro del div debe seguirle el p
div >p{
    color:green;   
}
osea sto quiere decir que tiene que ser hermano siguiente osea despues de un div debe hacer un p en la misma estructura
div + p{
    color:green;   
}

que son hermanos siguientes osea despues de div todos los p que sean hermanos de div directo segun su ramificacion
div ~ p{
    color:green;   
}
- mientras mas especifico es una regla ese es el que gana por ejemplo
h1.title{} aqui indicamos que h1 su clase titile osea bien especifico

https://jonassebastianohlsson.com/specificity-graph/
aqui colocamos nuestro css y medimos nuestra especificidad

* cascada= lo que esta al final siempre le gana al inicio
los testilos que viene despues sobre escriben a los estilos anteriores
colocame los 4 bordes y ahora quitame el de derecha para se usa mas o menos

* para saber que estilos estan colocados dentro de un contendor html podemos ir al anvegador y seccionar ese elemento y ahi podemos ver que elementos y que estilos tiene ese elememento o hacer pruebas super facil


*herencia los elemento heredan los estilos de su padre
    <div class="container">
      <h2>Lista de tareas</h2>
      <ul>
        <li>Estudiar CSS</li>
        <li>Estudiar JS</li>
        <li>Estudiar HTML</li>
      </ul>
    </div>
- si al container le pongo color:red; todo lo que esta dentro sera color red los hijos heredan del padre, se heredan normalemente estilos de texto color, alineacion, centrado, tananio de caja
no se hereda padding, margin estilos de caja

.container *{
    border:inherit;
}

- dice que quiere heredar a la fuerza los estilos del padre caso especiales ejmplo:
a{
    color:inherit;
}
-toma el color del padre para que los enlaces no seas de color azul horrible

* layers CSS
- crear capas y separarlo en capsa para tener mejor esturcturado nuestro css
- organizo mi codigo css y lo voy agrupando y declarando en los layers
/* * aqui manda la declaracion se ejecuta por casca aqui no abajo */
@layer theme;
@layer base;
@layer color;

@layer theme{
    body{

        color:blue;
    }
}
@layer base{
    body {

        color:orange;
    }
}

*modelo de caja box-model
-todo es una caja en la web 
- solucionar el layout donde va cada elemento y como me aseguro  que estan en el lugar donde deben estar 

el layout model 
el algoritmo del navegador para entender la geometria de cada elemento HTML luego de procesar el CSS: el tamano, la posicion, la separacion con otros elementos

/* div{
    display: inline o bloque o inline-bloque o none;
} */
inline: lo convierte en un elemento en linea
block: ocupada todo el ancho de su padre


display: none; = elimina el contenido, la etiqueta y el espacio que ocupaba y los que estan abajo suben
visibility:hidden; = elimina el contenido , no la etiqueta y si separa el espacio que tenia 

- recuerda las imagenes son inline-block por lo tanto inline que significa en linea y se pone uno al costado de otro entonces asi se pondran las imagenes
ahora como es inline- block puedo darle un width para que se acomode mejor y recuerda las imagenes son como texto inline-block entonces podemos centrarlo con text-align:center;
* recuerda que se puede centrar elementos inline basta dandole al padre text-align:center

-para centrar un div margin-left:auto; margin-right:auto; 
*{
box-sizing:border-box;
}
- se usa esta propiedad a todo el doc para cuando tenga un caja y le ponga padding margin border no sume su ancho ni alto actual si no que coja de su propio espacio al interior 
- .cuadrado{
    outline:10px solid red;
}
el atributo outline hace referencia a lo que esta afuera del elementos su relieve por fuera no por dentro esto se usa mas comunmente en formularios de los input

-box-shadow: h v blur spread color / inset;
h: movimiento horizontal(positivo derecha )
v: movimiento vertical (positivo abajo)
blur: difumidado 
spread: es que tanto crece o se comprime la sombra en sus cuatro lados

/ las pseudoclases son selectores dinamicos o contextuales. esto significa que su comportamiento va a depender de las circunstancias y siempre usamos los :

- h1:hover{
    color:red;
    cursor:pointer;
}
a:active = va haer todo lo que esta adentro por que se ejecutara cuando le hagas clip
a:visited{
    todo lo que quieres cuando un enlace ya fue visitado
}


a:hover = solo si el usuario pasa el cursos sobre el elemento, normalmente en un enlace

:focus = solo interviene si el usuario selecciona el elemento con los controles del teclado.

:active = Selecciona un elemento cuando el usuario lo activa (por ejemplo, con un clic).





* JS INTERMEDIO












// // PRACTICAS BOOTSTRAP
// // LIBRERIAS PRACTICAR 

// //DESTRUCTURACION
// /**
//  * Destructurar arreglos
//  */

// let nombres = ["Anita", "Lucio", "María", "Omar", "Fernanda"];
// let [a, b, c, d, e] = nombres;
// console.log(e); //Fernanda
// console.log(b); //Lucio

// let [ani, , , , fer] = nombres;
// console.log(fer); //Fernanda
// console.log(ani); //Anita


// // operador rest => ...
// //hacer una copia de un arreglo y almacenarlo aparte
// // con el = estamos hacemo copia hasta de la direccion de memoria y datos mala practica
// let [...nombresTemporal] = nombres;
// console.log(nombresTemporal);

// let [ele1, ele2, ...resto] = nombres;
// console.log(ele1);
// console.log(ele2);
// console.log(resto);
// //console.log(...resto);

// let nombresCopia = ["Juan", ...nombres];
// console.log(nombresCopia);
// console.log(nombres);


// //le estoy pasando un array y solo quiero destructurar 2 valores de ese arreglo
// const dosPrimeros = ([a, b]) => {
//   console.log(a);
//   console.log(b);
// };

// dosPrimeros(nombres);

// //DESTRUCTURACION DE OBJETOVS
// // Destructuración de Objetos

// let restaurant = {
//   nombre: "El pollo real",
//   tipo: "Pollería",
//   aforo: 500,
//   geo: {
//     lat: -70,
//     lng: -16,
//   },
// };

// // Creando una variable "nombre" que es copia de restaurant.nombre
// // tambien podemos cambiar el nombre de aforo a capacidad

// let { nombre, aforo: capacidad } = restaurant;
// console.log(nombre);
// console.log(capacidad);

// let {
//   geo: { lat: latitud, lng: longitud },
// } = restaurant;
// // console.log(geo);//error
// console.log(latitud, longitud);

// const nombreYAforo = ({ nombre, aforo }) => {
//   console.log(nombre, aforo);
// };
// nombreYAforo(restaurant);

// // forma correcta de copiar un objeto por completo
// let copiaRest = { ...restaurant };
// console.log(copiaRest);

// const modificarAforo = (objRestaurant, nuevoAforo) => {
//   return {
//     ...objRestaurant,
//     aforo: nuevoAforo,
//   };
// };

// let restaurantGrande = modificarAforo(restaurant, 5000);
// console.log(restaurantGrande);




// /**
//  * Ejemplo de destructuracion al estilo REACT!
//  */
// // const useState = (estadoInicial) => {
// //   let inicial = estadoInicial;
// //   const modificarEstado = (nuevoEstado) => {
// //     inicial = nuevoEstado;
// //   };

// //   return [inicial, modificarEstado];
// // };

// // const [state, setState] = useState("Jorge");
// // setState("nuevo estado");

// //asincronia
// /**
//  * setTimeout
//  */
// let resultado = [];
// const traerDatos = () => {
//   console.log("Conectándose a la base de gatos");
//   console.log("Los datos llegaron del servidor =)");
//   resultado = [5000, 8500, 10000];
// };

// console.log("LOG 1");

// //funcion asincrona
// setTimeout(traerDatos, 2000);

// console.log("LOG 2");
// console.log(resultado);
// console.log("LOG 3");

// /**
//  * promesas
//  */

// /**
//  * async await
//  */

// /**
//  * fetch (ajax)
//  */


// // PROMESAS

// /**
//  * Las promesas nos ayudan a esperar el resultado
//  * de un proceso asincrono
//  */

// let miPromesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // ambas funcionan como un return
//     // resolve
//     // reject
//     // resolve(["02815740", "01845421", "01854216"]);
//     // reject("El usuario no se ha encontrado en la base de gatos");
//     resolve({
//       codigo: 200,
//       mensaje: "No se encontró el producto",
//       contenido: "Lentes Rayban",
//     });
//   }, 2000);
// });

// miPromesa
//   .then((rpta) => {
//     if (rpta.codigo === 200) {
//       console.log("=)");
//       console.log(rpta.contenido);
//     } else {
//       console.log("=(");
//       console.log(rpta.mensaje);
//     }
//   })
//   .catch((error) => {
//     console.log("Ups! =(");
//     console.log(error);
//   });


// //EJERCICIOS DE PROMESAS
// let paises = [
//   { id: 1, nombre: "Perú" },
//   { id: 2, nombre: "Bolivia" },
//   { id: 3, nombre: "Chile" },
//   { id: 4, nombre: "Argentina" },
// ];

// let departamentos = [
//   { id: 1, nombre: "Lima", paisId: 1 },
//   { id: 2, nombre: "Arequipa", paisId: 1 },
//   { id: 3, nombre: "Puno", paisId: 1 },
//   { id: 4, nombre: "La Paz", paisId: 2 },
//   { id: 5, nombre: "Cochabamba", paisId: 2 },
//   { id: 6, nombre: "Santa Cruz", paisId: 2 },
// ];

// const getPaisById = (id) => {
//   let buscando = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let pais = paises.find((objPais) => {
//         if (objPais.id === id) {
//           return objPais;
//         }
//       });
//       if (pais) {
//         resolve(pais);
//       } else {
//         reject("No se encontro el país buscado joven");
//       }
//     }, 2000);
//   });
//   return buscando;
// };

// const getDepartamentosByPaisId = (id) => {
//   const buscando = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dptos = departamentos.filter((objDpto) => {
//         if (objDpto.paisId === id) {
//           return objDpto;
//         }
//       });
//       resolve(dptos);
//     }, 3000);
//   });
//   return buscando;
// };

// getPaisById(1)
//   .then((paisEncontrado) => {
//     console.log(paisEncontrado);
//     return getDepartamentosByPaisId(1);
//   })
//   .then((dptos) => {
//     console.log(dptos);
//   })
//   .catch((mensajeError) => {
//     console.log("=(");
//     console.log(mensajeError);
//   });

// // getDepartamentosByPaisId(2)
// //   .then((dptos) => {
// //     console.log("llegaron los departamentos");
// //     console.log(dptos);
// //   })
// //   .catch(() => {});



// //PROMESAS USANDO ASYNC - AWAIT

// let paises = [
//   { id: 1, nombre: "Perú" },
//   { id: 2, nombre: "Bolivia" },
//   { id: 3, nombre: "Chile" },
//   { id: 4, nombre: "Argentina" },
// ];

// let departamentos = [
//   { id: 1, nombre: "Lima", paisId: 1 },
//   { id: 2, nombre: "Arequipa", paisId: 1 },
//   { id: 3, nombre: "Puno", paisId: 1 },
//   { id: 4, nombre: "La Paz", paisId: 2 },
//   { id: 5, nombre: "Cochabamba", paisId: 2 },
//   { id: 6, nombre: "Santa Cruz", paisId: 2 },
// ];

// const getPaisById = (id) => {
//   let buscando = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let pais = paises.find((objPais) => {
//         if (objPais.id === id) {
//           return objPais;
//         }
//       });
//       if (pais) {
//         resolve(pais);
//       } else {
//         reject("No se encontro el país buscado joven");
//       }
//     }, 2000);
//   });
//   return buscando;
// };

// const getDepartamentosByPaisId = (id) => {
//   const buscando = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dptos = departamentos.filter((objDpto) => {
//         if (objDpto.paisId === id) {
//           return objDpto;
//         }
//       });
//       resolve(dptos);
//     }, 3000);
//   });
//   return buscando;
// };

// /**
//  * funcion que retorna tanto el pais como la lista de departamentos
//  * dado el id de un pais
//  */
// const getAllByPaisId = async (id) => {
// 	let paisEncontrado = await getPaisById(id);
// 	let departamentosFiltrados = await getDepartamentosByPaisId(id);
//   return {
//     paisEncontrado: paisEncontrado,
//     departamentosFiltrados: departamentosFiltrados,
//   };
// };

// getAllByPaisId(1).then((rptaFinal) => {
//   console.log(rptaFinal);
// });








// const funcionAsincrona = async () => {
//   return 100;
// };

// funcionAsincrona().then((valor) => {
//   console.log(valor);
// });

// //EJEMPLO DE FETCH CONSUMIENDO APIS RECIEN
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <!-- <script src="./06-async-await.js"></script> -->
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"
//       integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX"
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
//     />
//     <title>Document</title>
//   </head>
//   <body>
//     <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button
//         class="navbar-toggler d-lg-none"
//         type="button"
//         data-toggle="collapse"
//         data-target="#collapsibleNavId"
//         aria-controls="collapsibleNavId"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       ></button>
//       <div class="collapse navbar-collapse" id="collapsibleNavId">
//         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//           <li class="nav-item active">
//             <a class="nav-link" href="#"
//               >Home <span class="sr-only">(current)</span></a
//             >
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a
//               class="nav-link dropdown-toggle"
//               href="#"
//               id="dropdownId"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//               >Dropdown</a
//             >
//             <div class="dropdown-menu" aria-labelledby="dropdownId">
//               <a class="dropdown-item" href="#">Action 1</a>
//               <a class="dropdown-item" href="#">Action 2</a>
//             </div>
//           </li>
//         </ul>
//         <form class="form-inline my-2 my-lg-0">
//           <input
//             class="form-control mr-sm-2"
//             type="text"
//             placeholder="Search"
//           />
//           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>

//     <main class="container">
//       <section class="row">
//         <div class="col">
//           <div id="alertaCargando" class="alert alert-info" role="alert">
//             <h4 class="alert-heading">Cargando...</h4>
//           </div>

//           <table class="table animate__animated animate__fadeIn" id="miTabla" hidden="hidden">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Id</th>
//                 <th>Nombre</th>
//                 <th>Apellido</th>
//                 <th>Correo</th>
//                 <th>Foto</th>
//               </tr>
//             </thead>
//             <tbody id="tbody"></tbody>
//           </table>
//         </div>
//       </section>
//     </main>

//     <script src="./07-fetch.js"></script>
//   </body>
// </html>





const url = "https://reqres.in/api/users";
const tbody = document.getElementById("tbody");
const alertaCargando = document.getElementById("alertaCargando");
const miTabla = document.getElementById("miTabla");

// fetch(url).then((response) => {
//   response.json().then((final) => {
//     console.log(final);
//   });
// });

const getUsuarios = async () => {
  let response = await fetch(url);
  let myJson = await response.json();

  return myJson;
};

const dibujarTabla = (usuarios) => {
  usuarios.forEach((objUsu, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${i}</td>
										<td>${objUsu.id}</td>
										<td>${objUsu.first_name}</td>
										<td>${objUsu.last_name}</td>
										<td>${objUsu.email}</td>
										<td><img src='${objUsu.avatar}' 
												class='rounded-circle' width='50'/></td>`;
    tbody.appendChild(tr);
  });
  // muestre la tabla y ocultar el cargando
  miTabla.removeAttribute("hidden");
  alertaCargando.setAttribute("hidden", "hidden");
};

getUsuarios().then((rpta) => {
  dibujarTabla(rpta.data);
});


// --- FINAL CON SEMANA 8 CON DIA2


























































// // let numero1=10;
// // let numero2=20;

// // console.log(numero1+numero2);

// // existen 2 formas de declarar string pero con la nueva especificacion de javasript ES2015 podemos crear template literales o template string la cual escapsulamos en comillas invertidad o backticks
// // Como podéis ver, gracias a los emplate literals obtenemos un código mucho más fácil de leer y legible, a desde 1 y retorna el array restantehorrándonos la concatenación de múltiples strings mediante el operador + .
// // -podemos concatenar o interpolar string de modo que nuestro codigo quede mas limpio a diferencia de:
// // console.log(nombre+ " "+edad);
// // console.log(`nombre ${nombre} apellido ${edad}`)
// // - otro beneficio de usar los backticks es que podemos usar los los enter osea string en varias lineas y poder tener un codigo mas limpio cosa que no podemos usarlo con los '' o ""
// // para el salto de linea tenermos que usar el contraslash
// //const html="<article>\
// //<h1>Hola mundito</h1>\
// //</article>";

// // let nombre="jhonatan";
// // let apellido='maquera';

// // console.log(`mis datos son: ${nombre} ${apellido}`);
// // console.log(nombre+ " "+apellido);
// // console.log(numero2 + numero1)
// // let isCasado=false;
// // let isDivorsiado=true;

// // console.log(isDivorsiado);

// console.log("************** Array y  *********************");
// // let numeros=[10,11,12,13,14]
// // console.log(`cantidad de numeros ${numeros.length}`);

// //acceder a un elemento atravez de su indice
// // console.log(numeros[0]);

// // para mostrar el ultimo elemento = cantidad de elementos -1
// // console.log(`el ultimo elemento ${numeros.length-1}`);
// //add un elemento al final del array
// // numeros.push(1200)

// // let nombres=['pamela','fiorella'];
// // console.log(nombres);

// //elimina el ultimo elemento del array
// //nombres.pop()

// //add pamela al inicio del arreglo
// nombres.unshift("pamela");

// //elimina el 1er elemento del arreglo
// nombres.shift();

// //encontrar el indice de un elemento por su nombre -1 si no se encuentra si hay mas coincidencias va mostrar el 1ro que encuentre
// nombres.indexOf("pamela");

// //.splice elimina o separa el arreglo original en partes indicadas y luego el arreglo inicial tendra el restante de lo dividido
// //.splice crea un nuevo arreglo con los parametros dados .splice(posicion_inicial,posicion_final) y guardamos en una nueva variable
// // console.log(numero.splice(1,5)) crea un arreglo con los datos desde la posicion 1 con  5 elementos hacia delante
// nombres.splice(1, 1);

// // metodo que se encaga de realizar una copia de los valores iniciales y si e padre es modificado o cambiado de valores despues de realizar la copia este copiaArray no se ve afectada
// let copiaArray = nombre.sclice();

// // para unir 2 array en 1 solo
// // const array1 = ['a', 'b', 'c'];
// // const array2 = ['d', 'e', 'f'];
// // const array3 = array1.concat(array2);
// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// console.log("++++++++++++FUNCIONES++++++++++++++");
// //funcion que no retorna nada ni recibe ningun argumento
// // function imprimirFecha(){
// //     let fecha=new Date();
// //     console.log(fecha)
// // }
// //invocando ala funcion imprimir
// // imprimirFecha();

// //function que retorna un valor
// // function retorna_fecha(){
// //     let fecha=new Date();
// //     return fecha;
// // }

// // console.log(retorna_fecha());

// //funcion que recibe parametros y retorna su valor
// //para documenta las funciones
// //basta con colocar /** */ sobre la funcion y automaticamente lo solucionara los parametros y retornos
// /**
//  * funcion que recibe 2 numeros y calcula la suma
// //  * @param {tipo de datos} name_dato - descripcion
//  * @param {number} a 1er numero
//  * @param {number} b 2do numero
//  * @return {number} el resultado de la suma
//  */
// // function suma(a,b){
// //     return a+b;
// // };

// // let rpta=suma(10,0)
// // console.log(rpta);

// // ojo undefined= la variable esta creada pero no tienes un valor adentro
// //null=retorna un valor nulo en alguna busqueda
// // typeof data == para saber que tipo de dato es la variable data

// //funciones con parametros opcionales
// // function suma(a=10,b=30){
// //     console.log(a+b);
// // }

// // suma();

// console.log("---------- funciones anonimas --------------");
// // funciones anonimas fechas son funciones que no tienen nombre
// // cuyo valor se guarda en una variable
// // es nuevo standar usar las funciones anominas y no las otras ahora asi debemos crearlas por referencia
// // lo mejor seria crearlo con const para que asi no se modifique su valor
// // const sumando=function(){
// //     return a+b;
// // };
// // let respuesta=sumando(7,8);
// // console.log(respuesta);

// // con el nuevo standar las funciones arrow function(funciones de flecha) k son funciones anonimas pero otra manera de escribir
// //  ya no hay la palabra reservada function
// // const sumarFecha=(a,b)=>{
// // }
// console.log("+++++++++ CALLBACK +++++++++++++++++");
// // cuando usamos los callback como parametro le pasamos como referencia no como ejecucion de la funcion que seri con el ()
// // const buscarPorDni=(x)=>{
// //     // zona de ejecucion de mostrarResultado
// //     x();
// // }

// // const mostrarResultado=()=>{
// //     console.log('mostrando el resultado')
// // }
// // cuando usamos los callback como parametro le pasamos como referencia y cuando en otro funcion reciba ese callback entonces recien podemos usarlo como () para ejecutar esa function
// // un callback es ejecutar un function dentro de otra funcion pasada como referencia
// // buscarPorDni(mostrarResultado)
// // aplicando otra manera es lo mismo solamente que no esta dentro de una variable si no asi nomas
// // buscarPorDni(()=>{
// //     console.log('mostrando el resultado');
// // })

// // tambien podemos hacerlo como funcion anonima osea no tiene nombre

// // const buscarPorDni =(x,y)=>{

// // }
// //recibe 2 parametros este metodo x y y y cuando lo declaramos alli debemos colocarlo
// // buscarPorDni(function(){
// //     console.log('mostrando el resultadito')
// // },175)

// // la funcion se activa en 2 segundo
// // setTimeout(() => {

// // }, timeout);
// // setTimeout(function(){

// // },10)

// console.log("+++++ function flecha o anonima simplificada ++++++");

// // si la funcion solo tiene una 1 de codigo de ejecucion  entonces puedes omitir la llaves
// // const sumar=(a,b)=> console.log('sumando...');

// //si la function recibe 1 parametro podemos omitir las cosas(){}
// // const cuadrado = a => console.log(a*a);

// //si la function retorna solo una linea de ejecucion podemos obviar el return  por los parentesis
// // const cubo=n =>(n*n*n);

// console.log("++++++++++++ OBJETOS ++++++++++++");
// //los arreglos se basan en sus posiciones y los objetos en sus nombre
// // no se usa mucho el poo en js xk podemos crear objetos sin la necesidad de crear clases entonces x eso no se usa mucho
// // por que bien sabes nostros que debemos crear una clases e instanciar para crear su objeto asi es normalmente

// // como crear un objeto
// let objPersona = {
//   nombre: "jhonatan",
//   apellido: "maquera",
//   edad: 10,
//   peso: 20.1,
//   casado: true,
// };

// // forma de acceder a los objetos con el . podemos haceder a cualquier atributo del objeto
// console.log(objPersona.nombre);
// console.log(objPersona.apellido);
// console.log(objPersona.edad);
// console.log(objPersona.casado);

// console.log(
//   `mi nombre es ${objPersona.nombre} mi apelido ${objPersona.apellido} mi edad es ${objPersona.edad}`
// );

// // forma de 2 de acceder a los objetos con un string en los corchetes
// // esta forma es la mejor para poder acceder a los formularios
// console.log(objPersona.nombre["nombre"]);

// // como modificar los valores del objetito

// objPersona["nombre"] = "jhonael";
// objPersona["apellido"] = "ramos";

// console.log(objPersona);
// // add un nuevo atributo
// objPersona["comida"] = "picante";
// objPersona.postresFavoritos = ["mazamorrita", "el flan", "keke"];

// //ojo para la identacion usamos alf+shit+F y super vacan

// let productos = [
//   { nombre: "TV Samsung 50", precio: 100 },
//   { nombre: "TV Samsung 40", precio: 50 },
//   { nombre: "TV Samsung 30", precio: 25 },
// ];

// //recorrer un array
// for (let i = 0; i < productos.length; i++) {
//   console.log(`Producto ${i}`);
//   console.log(`nombre ${productos[i].nombre}`);
//   console.log(`precio ${productos[i].precio}`);
// }
