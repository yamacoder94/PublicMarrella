import axios from "./axiosServices";

export function comprar(carrito) {
  console.log("en axios carrito");
  return axios.post("Carrito/Comprar/", carrito);
}
