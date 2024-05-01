//import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Paper } from "@mui/material";

import { traeClientes } from "../../services/clienteService";
import { traeProductos } from "../../services/productosServicios";

import ComponentesFactura from "./ComponentesFactura";
import TablaDetalle from "./TablaDetalle";
import MontoFactura from "./MontoFactura";
import AgregaProductosFactura from "./AgregaProductosFactura";

export function Facturacion() {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [productos, setProductos] = useState([]);
  const [detalleFactura, setDetalleFactura] = useState([]);
  const [subtotalGeneral, setSubtotalGeneral] = useState(0);
  const [selectedIdCliente, setSelectedIdCliente] = useState(0);

  const mostrarClientes = async () => {
    const data = await traeClientes();

    if (data && data.status === 200) {
      //setClientes(data.data);
      setClientes(data.data);
    } else {
      console.log("Error en la lista");
    }
  };

  const mostrarProductos = async () => {
    const prod = await traeProductos();

    if (prod && prod.status === 200) {
      //setClientes(data.data);

      setProductos(prod.data);
    } else {
      console.log("Error en la lista");
    }
  };

  const handleClienteChange = (cliente) => {
    setSelectedCliente(cliente.nombre);
    setDescuento(cliente.descuento);
  };

  const handleDeleteRow = (idToDelete) => {
    // Filter out the item with the specified ID
    const updatedDetalleFactura = detalleFactura.filter(
      (item) => item.id !== idToDelete
    );

    // Set the state with the updated array
    setDetalleFactura(updatedDetalleFactura);
  };

  useEffect(() => {
    mostrarClientes();
    //console.log(clientes);
    mostrarProductos();

    setDetalleFactura([]);
    //console.log(detalleFactura);
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: "20px", marginTop: "20px" }}>Facturación</h1>

      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <ComponentesFactura
                data={clientes}
                onClienteChange={handleClienteChange}
                selectedCliente={selectedCliente}
                descuento={descuento}
                selectedIdCliente={selectedIdCliente}
                setSelectedIdCliente={setSelectedIdCliente}
              ></ComponentesFactura>
              <Item style={{ marginTop: "15px" }}>
                <AgregaProductosFactura
                  data1={productos}
                  detalleFactura={detalleFactura}
                  setDetalleFactura={setDetalleFactura}
                  subtotalGeneral={subtotalGeneral}
                  setSubtotalGeneral={setSubtotalGeneral}
                  selectedCliente={selectedCliente}
                  descuento={descuento}
                />
              </Item>
              <Item style={{ marginTop: "15px" }}>
                <TablaDetalle
                  data2={detalleFactura}
                  onDeleteRow={handleDeleteRow}
                />
              </Item>
              {/* <TablaDetalle /> */}
            </Grid>
            <Grid item xs={3}>
              <Item style={{ height: "300px" }}>
                <MontoFactura
                  subtotalGeneral={subtotalGeneral}
                  setSubtotalGeneral={setSubtotalGeneral}
                  descuento={descuento}
                  detalleFactura={detalleFactura}
                  selectedIdCliente={selectedIdCliente}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const Contenedor = () => ({
//   marginLeft: "20px",
// });
// const Container = styled.div`
//   height: 100vh;
// `;
