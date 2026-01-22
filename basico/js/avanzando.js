console.log("**********************");

let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // ambas funcionan como un return
    // resolve
    // reject
    // resolve(["02815740", "01845421", "01854216"]);
    // reject("El usuario no se ha encontrado en la base de gatos");
    resolve({
      codigo: 200,
      mensaje: "No se encontró el producto",
      contenido: "Lentes Rayban",
    });
  }, 2000);
});
//~ toda promesa tiene un then si es verdad y un catch si hay error
miPromesa
  .then((rpta) => {
    if (rpta.codigo === 200) {
      console.log("=)");
      console.log(rpta.contenido);
    } else {
      console.log("=(");
      console.log(rpta.mensaje);
    }
  })
  .catch((error) => {
    console.log("Ups! =(");
    console.log(error);
  });

//$ EJERCICIO
let paises = [
  { id: 1, nombre: "Perú" },
  { id: 2, nombre: "Bolivia" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" }
];
let departamentos = [
    { id: 1, nombre: "Lima", paisId: 1 },
  { id: 2, nombre: "Arequipa", paisId: 1 },
  { id: 3, nombre: "Puno", paisId: 1 },
  { id: 4, nombre: "La Paz", paisId: 2 },
  { id: 5, nombre: "Cochabamba", paisId: 2 },
  { id: 6, nombre: "Santa Cruz", paisId: 2 },
];
//~ creamos una funcion fecha y dentro colocamos un proceso asincrono como una promesa
const getPaisById = (id) => {
  let buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
      let pais = paises.find((objPais) => {
        if (objPais.id === id) {
          return objPais;
        }
      });
      if (pais) {
        resolve(pais);
      } else {
        reject("No se encontro el país buscado joven");
      }
    }, 2000);
  });
  return buscando;
};
const getDepartamentosByPaisId = (id) => {
  const buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dptos = departamentos.filter((objDpto) => {
        if (objDpto.paisId === id) {
          return objDpto;
        }
      });
      resolve(dptos);
    }, 3000);
  });
  return buscando;
};
//~ la funcion se convertira en proceso asyncrono y como toda promesa se consume con con then y catch
getPaisById(1)
  .then((paisEncontrado) => {
    console.log(paisEncontrado);
    return getDepartamentosByPaisId(1);
  })
  .then((dptos) => {
    console.log(dptos);
  })
  .catch((mensajeError) => {
    console.log("=(");
    console.log(mensajeError);
  });
getDepartamentosByPaisId(2)
  .then((dptos) => {
    console.log("llegaron los departamentos");
    console.log(dptos);
  })
  .catch(() => {});

//~ aplicando async await
// /**
//  * funcion que retorna tanto el pais como la lista de departamentos
//  * dado el id de un pais
//  *
// va convertir la funcion en una promesa x la cual debemos consumirla con el then y catch esto se usa en ves de consumirla como arriba 2 then entonces ahora es mas facil
const getAllByPaisId = async (id) => {
	let paisEncontrado = await getPaisById(id);
	let departamentosFiltrados = await getDepartamentosByPaisId(id);
  return {
    paisEncontrado: paisEncontrado,
    departamentosFiltrados: departamentosFiltrados,
  };
};

getAllByPaisId(1).then((rptaFinal) => {
  console.log(rptaFinal);
});

/**
 * Las promesas nos ayudan a esperar el resultado
 * de un proceso asincrono
 * - LA PROMESA ES UN PROCESO ASINCRONO SI O SI
 * - TODA PROMESA DEVUELVE UN RESULTADO POSITIVO O NEGATIVO
 * - LAS PROMESAS TIENE 2 PARTES:
 * CREACION Y CONSUMO  = CASI EL 80% SERA DE CONSUMO Y NDA DE CREACION
 * 

RECUERDA QUE DENTRO DE LA PROMESA SIEMPRE DEBE AVER UN PROCESO ASINCRONO*/
//?vamos a convertir esta funcion en una function de tipo async
	//async convierte una function normal a una promesa ejmp:
	//getAllByPaisId = con el async sera una promesa y debemos consumirla con el then

console.log("**********************");