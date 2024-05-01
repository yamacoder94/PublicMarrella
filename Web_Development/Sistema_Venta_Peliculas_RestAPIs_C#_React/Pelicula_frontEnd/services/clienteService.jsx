import axios from "axios";

export function traeClientes() {
  return axios.get("Cliente/");
}
