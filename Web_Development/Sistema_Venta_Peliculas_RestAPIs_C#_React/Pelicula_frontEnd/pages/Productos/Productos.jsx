import styled from "styled-components";
import { TablaProductos } from "./TablaProductos";
import { traeProductos } from "../../services/productosServicios";
import React, { useEffect, useState } from "react";

export function Productos() {
  const [productos, setProductos] = useState([]);

  const mostrarProductos = async () => {
    const prod = await traeProductos();

    if (prod && prod.status === 200) {
      //setClientes(data.data);

      setProductos(prod.data);
      console.log(prod.data);
    } else {
      console.log("Error en la lista");
    }
  };

  useEffect(() => {
    mostrarProductos();
  }, []);

  return (
    <Container>
      <h1 style={{ marginLeft: "20px", marginTop: "20px" }}>Productos</h1>
      <TablaProductos productos={productos} setProductos={setProductos} />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
