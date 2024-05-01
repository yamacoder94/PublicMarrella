//import servicio from "./axiosServices";

// //funcion que obtiene las peliculas

// export function obtienerPeliculas(idUsuario) {
//   console.log("dentro de obtenerPeliculas");
//   return servicio.get("Pelicula/" + idUsuario);
//   // retorna todo el path ya que trae el baseURL desde axiosServices
// }

// export function buscarPor(buscar) {
//   return servicio.get("Pelicula/BuscarPor/" + buscar);
// }

// export function getDestacadas(estrellas) {
//   return servicio.get("Pelicula/GetDestacadas/" + estrellas);
// }

// export function obtenerPeliculas(idUsuario) {
//   return servicio.get("Pelicula/" + idUsuario);
// }
// export function buscarPor(idUsuario, buscar) {
//   return servicio.get("Pelicula/BuscarPor/" + idUsuario + "/" + buscar);
// }

// export function getDestacadas(idUsuario, estrellas) {
//   console.log("dentro getDestacadas, estrellas :" + estrellas);
//   return servicio.get("Pelicula/GetDestacadas/" + idUsuario + "/" + estrellas);
// }

import servicio from "./axiosServices";

export function obtienerPeliculas(idUsuario) {
  console.log("dentro de obtenerPeliculas " + idUsuario);
  return servicio.get("Pelicula/" + idUsuario);
}
export function buscarPor(idUsuario, buscar) {
  console.log("dentro del Axios buscarPor" + idUsuario, buscar);
  return servicio.get("Pelicula/BuscarPor/" + idUsuario + "/" + buscar);
}

export function getDestacadas(idUsuario, estrellas) {
  return servicio.get("Pelicula/GetDestacadas/" + idUsuario + "/" + estrellas);
}
