import axios from "axios";

export function traeProductos() {
  return axios.get("Producto/");
}
