import axios from "./axiosServices";

export function obtenerFavorito(idUsuario) {
  console.log("Estamos en el obtener favoritos: " + idUsuario);
  return axios.get("Favorito/" + idUsuario);
  //con el mas , lo que hace es q agrega el idUsario al URL entonces seria xxxxx.api/Favorito/2
  //asumiendo que 2 es el idUsuario
}

export function agregaFavorito(favorito) {
  return axios.post("Favorito/Agregar", favorito);
  //de esta forma lo q hace es q manda un objeto
}

export function eliminarFavorito(favorito) {
  console.log(favorito);
  return axios.post("Favorito/Eliminar/", favorito);
}
