import axios from "axios";

export function traeCategoria() {
  return axios.get("Categoria/");
}
