import axios from "axios";

// export function enviaVenta(venta) {
//   console.log("Enviando la venta:", venta);
//   return axios.post("Venta/", venta);
// }

export function enviaVenta(venta) {
  console.log("Enviando la venta:", venta);
  return axios.post("Venta/", venta, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function traeVentas() {
  return axios.get("Venta/");
}
