import axios from "axios";

export function login(usuario) {
  try {
    console.log("Dentro de axios login");
    console.log(usuario);
    return axios.post("Login/", usuario);
  } catch (error) {
    console.error("Error:", error);
  }
}
