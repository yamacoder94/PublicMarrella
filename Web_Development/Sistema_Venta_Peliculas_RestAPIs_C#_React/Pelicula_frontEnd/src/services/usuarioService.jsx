import axios from "./axiosService";

export function traeUsuarios() {
  return axios.get("Usuario/");
}

export function agregaUsuarios(usuarios) {
  try {
    console.log();
    const response = axios.post("Usuario/", usuarios);

    console.log(response.data); // Log the response data
  } catch (error) {
    console.error("Error:", error);
  }
}

export function editarUsuarios(usuarios) {
  try {
    const response = axios.put("Usuario/Editar", usuarios);

    console.log(response.data); // Log the response data
  } catch (error) {
    console.error("Error:", error);
  }
}

export function eliminarUsuarios(id) {
  try {
    const response = axios.delete("Usuario/Eliminar/" + id);

    console.log(response.data); // Log the response data
  } catch (error) {
    console.error("Error:", error);
  }
}
