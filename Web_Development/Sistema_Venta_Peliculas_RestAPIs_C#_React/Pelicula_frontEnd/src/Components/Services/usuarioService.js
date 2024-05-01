import axios from "./axiosServices";

export function registrar(usuario) {
  return axios.post("Usuario/", usuario);
}

// los nombres de las propiedades tiene que ser los mismo que de la API para que funcione

//llamado al API para el login
export function login(usuario) {
  console.log("estamos en el login service ");
  return axios.post("Login/", usuario);
}
