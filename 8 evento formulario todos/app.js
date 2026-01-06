//* este proyecto es para validar los formulario si esta no en la base de datos y con un mensajito si se puede o no hacerlo

//^INFO: http://mialtoweb.es/eventos-ii-eventos-mas-importantes-en-javascript/
// ESTE PROYECTO SE SIRVE CUANDO 
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let formulario = document.getElementById("formulario");
let helperEmail = document.getElementById("helperEmail");

// obteer todo lo que escribes pero cuando salgas del input entonces recien te moestrara el valor q sea quedado

// inputEmail.onchange=function(){
//     console.log(inputEmail.value);
// }

//cuando suelte el boton del teclado  alli se despira el evento pero previo a eso cuando nosotros tecleamos para k se vea lo que escribimos presionamos se guarda la tecla y soltamos => recien se muestra en pantalla esa letra
// inputEmail.onkeyup=function(){
// console.log(inputEmail.value);
// }

// es lo mismo pero arrevez  cuando presionemo de arriba a bajo la tecla recien saltara el evento x lo tanto alli ocurre el evento en el anterior cuando sueltas el boton recien ocurre el evento
// inputEmail.onkeydown=function(){
// console.log(inputEmail.value);
// }

// aqui vamos a empezar a realizar el ejercicio
/**
 * creando el metodo de validacion de correo
 */

const validarEmail = function (email) {
  //valdiar si es un correcto valido osea con estructura de un correo
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //muestra true o false si comprende la expresion regular o no
  //verificar si cumple o no el formato de un correo
//   console.log(regexEmail.test(email));
  if (regexEmail.test(email) === false || inputEmail.value==="") {
    helperEmail.removeAttribute("hidden");
    helperEmail.innerText = "Usuario incorrecto";
    helperEmail.classList.add("text-danger");
    inputEmail.classList.add("input-danger");
  } else {
    // verfica si el correo existe o no en nuestra DB
    let resultados = usuarios.filter(function (objUsuario) {
      if (objUsuario.correo === email) {
        return objUsuario.correo;
      }
    });
    console.log(resultados.length);
    //si es mayor a cero kiere decir que ya esta siendo usado ese correo
    if (resultados.length>0) {
        helperEmail.removeAttribute("hidden");
        helperEmail.innerText = "Usuario ya esta siendo usado"
        helperEmail.classList.add("text-danger")
        inputEmail.classList.add("input-danger")
    }else{
        helperEmail.removeAttribute("hidden");
        // helperEmail.removeAttribute("class")
        helperEmail.innerText = "Usuario disponible"
        helperEmail.classList.add("text-success")
        inputEmail.classList.add("input-success")
    }
  }
};
inputEmail.onkeyup = () => {
  validarEmail(inputEmail.value);
};

//enviaremos los datos x el evento submit no por el bottom dandole un evento 
//el evento formulario.onsubmit se ejecuta cuando se hace submit en el formulario
//no cuando al boton se pongo un evento

//si el boton de envio no es submit entonces ese evento onsubmit no se dispara
// si al boton no le pones type="submit" entonces entendera que es submit x defecto

formulario.onsubmit = (e) => {
    e.preventDefault();
    console.log("hola submit")
    //lo que siempre aremos es crear un objeto y mandarle recien al servidor los datos
    let objetoUsuario={
        usuario:inputEmail.value,
        password:inputPassword.value
    }
    console.log(objetoUsuario)
}


// *esto se encarga de traer todos los datos y de pasada traes lo subdatos si se encuentran dentro
let selectPais = document.getElementById("selectPais");
let selectProvincia = document.getElementById("selectProvincia");

// xk usamos una function afuera xk necesitamos que carge automaticamente los paises para luego recien cargar las provincias
const llenarPaises = () => {
  let contenido = `<option value=0>--- Seleccione un pais ---</option>`;
  paises.forEach(function (objPais) {
    contenido += `<option value=${objPais.id}>${objPais.nombre}</option>`;
  });
  selectPais.innerHTML = contenido;
};

llenarPaises();

const llenarDepartamento = function (idPais) {
  let provincias = departamentos.filter((objDepartamento) => {
    if (idPais == objDepartamento.paisId) {
      return objDepartamento;
    }
  });
  console.log(provincias);
  if (provincias.length > 0) {
    selectProvincia.removeAttribute("disabled");
    let contenido = "";
    provincias.forEach((objProvincia) => {
      contenido += `<option value=${objProvincia.id}>${objProvincia.nombre}</option>`;
    });
    selectProvincia.innerHTML = contenido;
  } else {
    selectProvincia.innerText = "";
    selectProvincia.setAttribute("disabled", "disabled");
  }
};

/**
 * elemento.onchange evento que se ejecuta cada vez que el valor de un elemento
 * cambia (en el caso del select, cada vez que un nuevo option es seleccionado)
 * @param {*} e
 */
selectPais.addEventListener("change", function () {
  llenarDepartamento(selectPais.value);
});

// if (x>5) {
//     console.log("x es mayor k 5");
//   }else{
//     console.log("x es menor que 5");
//   }
//   //OPERADOR TERNARIO solamente cuando hay una linea de codigo nada mas
//   x>5? console.log("x es mayor que 5"):console.log("x es menor que 5")


//* otra manera de obtener los datos aqui 
const inputNombre=document.getElementById("inputNombre");
const inputApellido=document.getElementById("inputApellido");
const inputFecha=document.getElementById("inputFecha");
const formula=document.getElementById("formula");

const inputManana=document.getElementById("inputManana");
const inputTarde=document.getElementById("inputTarde");
const inputNoche=document.getElementById("inputNoche");


// es un objeto que va ir al servidor
let objFormulario={
    nombre:"",
    apellido:"",
    fecha:"",
    turno:"manana"
}

const actualizarObjFormulario=(e)=>{
    //el target es el elemento que a ha cambiado cuando le presionamos una letra muestra que input es el que has presionado
    //el target permite sabes en k input a sucedido el evento 
    console.log(e.target.value)

    //para poder actualizar un objeto antes ya debe estar inicializado
    objFormulario[e.target.name]=e.target.value
    console.log(objFormulario)
    
}

//solamente lo referenciamos xk hay una diferencia cuando se compile el archivo js y empieza de arriba abajo si tiene esto () altoke lo va ejecutar automaticamente pero cuando no le colocamos el () entonces only referenciamos indicando que cuando recien se haga onkeyup recien debe ejecutarse la funcion actualizarObjFormulario

inputNombre.onkeyup=actualizarObjFormulario
inputApellido.onkeyup=actualizarObjFormulario
inputFecha.onchange=actualizarObjFormulario

const changeRadio=(e)=>{
    objFormulario[e.target.name]=e.target.value

}

inputManana.onchange=changeRadio
inputTarde.onchange=changeRadio
inputNoche.onchange=changeRadio

formula.onsubmit=function(e){
    e.preventDefault()
    console.log('Enviando datos al servidorsh')
    console.log(objFormulario)
}