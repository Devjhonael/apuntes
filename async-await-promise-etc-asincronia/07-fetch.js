//cogemos la api para poder consumirlo
const url = "https://reqres.in/api/users?page=1"

const tbody = document.getElementById("tbody");
const alertaCargando = document.getElementById("alertaCargando");
const miTabla = document.getElementById("miTabla");

// esto es sin async y await 
// fetch(url,{
//     method:"GET",
//     headers:{
//       Authorization: "Bearer reqres_6eae7baee3e845bca54b738556bfb5e2"
//     }
//   }).then((response) => {
//   response.json().then((final) => {
//     console.log(final);
//   });
// });n

// para no usaar la doble promesa usamos el async await
const getUsuarios = async () => {
  let response = await fetch(url,{
    method:"GET",
    headers:{
      Authorization: "Bearer reqres_6eae7baee3e845bca54b738556bfb5e2"
    }
  });
  let myJson = await response.json();
  console.log(myJson)
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

getUsuarios().then(({ data }) => {
  dibujarTabla(data);
});
