let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");
let btnToggle = document.getElementById("btnToggle");

let botones = document.getElementById("botones");

let container = document.getElementById("container");


let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");

btnDark.onclick = function () {
  // si estamos en el boton oscuro y presionamos el claro va quedar el claro entonces debemos eliminar el claro y agregar el oscuro
  if (container.classList.contains("btnLightHover") == true) {
    container.classList.remove("btnLightHover");
  }
  container.classList.add("btnDarkHover");
};

//lo mismo de arriba pero invertido
btnLight.onclick = () => {
  if (container.classList.contains("btnDarkHover")) {
    container.classList.remove("btnDarkHover");
  }
  container.classList.add("btnLightHover");
};

btnToggle.onclick = function () {
  if (container.classList.contains("btnLightHover")) {
    container.classList.remove("btnLightHover");
    container.classList.add("btnDarkHover");
  } else if (container.classList.contains("btnDarkHover")) {
    container.classList.remove("btnDarkHover");
    container.classList.add("btnLightHover");
  } else {
    // k tal no impieza con dar ni light entonces empieza con toggle x lo cual le asignamos las clase btnLighHover para k no se vea muy vacio
    container.classList.add("btnLightHover");
  }
};



//esto se encargara de traer los datos y mostrarlo en el select
//recuerda que hay propiedad de los elementos y metodos de los elemento que podemos buscar super interesante
// https://developer.mozilla.org/es/docs/Web/API/Element

//? 1ro propiedades de los elementos
//? 2do metodos de los elementos
//? 3ero eventos de los elementos
// btnTitulo2.onclick = function () {
//   //el innerText setea el contenido de la etiqueta a un valor solamente de string
//   h1.innerText = "titulo mejorado";
// };
// btnTitulo3.onclick = function () {
//   h1.innerHTML = "<h6>titulo letra chica</h6>";
// };

btnSelect.onclick = () => {
  console.log("mira")
    selectPeliculas.removeAttribute("disabled");
    let contenido="";
    peliculas.forEach(objPelicula => {
        contenido +=`<option value="${objPelicula.id}">${objPelicula.title}</option>`
    });
    selectPeliculas.innerHTML=contenido;

};


//  mostrar datos de loteria
let btnGenerar = document.getElementById("btnGenerar");
let lista = document.getElementById("lista");

const llenarNumeros = function () {
  //otra manera creando un nodo
  let li = document.createElement("li");
  //el metodo trunc permite corta de la coma hacia la derecha
  let numeroAleatorio = Math.trunc(Math.random() * (100 - 1) + 1);
  // anadiendo el valor al nodo
  li.innerHTML = `<li>${numeroAleatorio}</li>`;
  
  //agregando ese nodo nuevo al nodo padre
  lista.appendChild(li);
  li.classList.add("item-color");
  li.onclick=()=>{
      alert(`${numeroAleatorio}`)
  }
};
btnGenerar.onclick = function () {
  llenarNumeros();
};

// mostra tabla de covis
let btnMostrar = document.getElementById("btnMostrar");
let tableData = document.getElementById("tableData");
let tbody = document.getElementById("tbody");
// console.log(covid)
const llenarTabla = () => {
  covid.forEach(function (objCovid, i) {
    //la fila
    let tr = document.createElement("tr");

    // 1er campo
    let tdNum = document.createElement("td");
    tdNum.innerText = i + 1;

    //2do campo ... etc
    let tdPais = document.createElement("td");
    tdPais.innerText = objCovid.country;

    let tdInfectado = document.createElement("td");
    tdInfectado.innerText = objCovid.cases;

    let tdFallecido = document.createElement("td");
    tdFallecido.innerText = objCovid.deaths;

    let tdRecuperados = document.createElement("td");
    tdRecuperados.innerText = objCovid.recovered;

    let tdButton = document.createElement("button");
    tdButton.innerText = "Eliminar";

    
    tr.appendChild(tdNum);
    tr.appendChild(tdPais);
    tr.appendChild(tdInfectado);
    tr.appendChild(tdFallecido);
    tr.appendChild(tdRecuperados);
    tr.appendChild(tdButton);
    tbody.appendChild(tr);
    
    tdButton.onclick=()=>{
        if(confirm(`Desea Eliminar a Pais ${objCovid.country}`)===true){
            tr.setAttribute("hidden","hidden")
        }
    }
});
};

btnMostrar.onclick = function () {
  tableData.removeAttribute("hidden");
  llenarTabla();
};



// aplicando localstorage para almacenar provicionalmente 
const inputCodigo = document.getElementById("inputCodigo");
const inputNombre = document.getElementById("inputNombre");
const tebody = document.getElementById("tebody");
const formulario = document.getElementById("formulario");
const mensaje=document.getElementById("mensaje")
const table=document.getElementById("table")

//cuando es una valor nada si podemos obviar la inicializacion pero cuando ya es una array de valores si o si debemos inicializarlo si no como guiardariamos los valores denro del array si este no existiece
// este es mi problema que cuando yo tenga que actualizar la pagina mi lista de productos se va actualizar a cero por que ahi se esta inicializando
let productos = [];

const llenarProductos = function (products) {
  console.log(products)
  let contenido = "";
  products.forEach((objProducts, i) => {
    contenido += `<tr>
		<td>${i + 1}</td>
			<td>${objProducts.codigo}</td>
			<td>${objProducts.nombre}</td>
		</tr>`;
    tebody.innerHTML = contenido;
  });
};

formulario.onsubmit = (e) => {
  console.log("enciando los datos al servidor")
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);
  
  // console.log(productos)
  //?una vez obteniendo el valor y guardarlo en un arreglo lo que debemos hacer es guardarlo en nuestro localSotrage recibe 1era parametro como string y el 2do tbm los 2 deben ser string clave y valor

  //?convierte un objeto o array en un string
  //?para encontrar donde estan las variables creadas en el storage entramos en a consola y aplicacion/ almacenamiento local o almacenamiento session dependiendo donde lo guardaste
  let productosString = JSON.stringify(productos);
  window.localStorage.setItem("listaproductos", productosString);
  llenarProductos(productos);
  // console.log(productos)
};

//^ AHORA POR QUE CREAMOS ESTA FUNCION DE VERIFICAR SI HAY O NO DATOS GUARDADOS EN STORAGE Y ES FUNCION DEBE LLAMAR APENAS EL NAVEGADOR SE ACTUALIZE XK NECESITA LLENAR ESA TABLA CON LOS DATOS QUE TIENE GUARADO
const verificarStorage=function(){
	let productosStorage=window.localStorage.getItem("listaproductos")
	// si el resultado es de tipo objeto normal podemos considerar sin comillas como un string si no como esta en consola
	// console.log(typeof productosStorage)
	if (productosStorage){
		//?si hay elementos entonces debemos convertir nuestro string => json |!! array
		let productosJSON=JSON.parse(productosStorage)
		table.removeAttribute("hidden")

		// llenar los porductos alas tablas
		llenarProductos(productosJSON)
	}else{
		table.setAttribute("hidden","hidden")
		mensaje.innerHTML=`<h2>NO EXISTEN PRODUCTOS</h2>`
	}

}
//* para eliminar el localStorage
//* window.localStorage.removeItem("name_key")
//?metodo que se va ejecutar siempre
verificarStorage()

//? recuerda que productos esta inicializado con [] vacio entonces que cuando ejecuten otra vez este archivo nuevamente se pondra a vacio



//! cuando tenemos el boton guardado en localStorage 2do ejemplo
let inputColor = document.getElementById("inputColor");
let body = document.getElementById("body");

inputColor.onchange = (e) => {
  console.log(typeof e.target.value);
  color = e.target.value;
  //pintar el fondo
  paintBack(color);
};

const paintBack = function (color) {
  console.log(color)

  body.style.backgroundColor = color;
  window.localStorage.setItem("localColor", color);
};

const verificarColor = () => {
  let getColor = window.localStorage.getItem("localColor");
  if (getColor) {
    paintBack(getColor);
    console.log(getColor)
    inputColor.value = getColor;
    console.log('**********')
    console.log(body.value)
  }
};
verificarColor();


//cuando queramos hacer un carrito de compras almacenaremos nuestras credenciales en nuestra maquina personal el problema sera que cuando entremos a otra maquina no podremos colocar nuestras credenciales de nuevo seria desde cero
// - dependera mucho del usuario como kiere k su aplicacion sea k  las credenciales se guarden en los Storage o si no ya seria desde la base de datos nomas k cuando el usuario entre autenticado a su aplicacion entonces este jale de la BD todos lo que tenia alistando para poder comprar