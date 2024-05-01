import React, { useState, useEffect, useRef } from "react";
import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ComponentesFactura({
  data,
  onClienteChange,
  selectedCliente,
  descuento,
  selectedIdCliente,
  setSelectedIdCliente,
}) {
  //const [currencies, setCurrencies] = useState([]);

  //   const currencies = [
  //     {
  //       value: "Walmart",
  //       label: "Walmart",
  //     },
  //     {
  //       value: "LaColonia",
  //       label: "LaColonia",
  //     },
  //     {
  //       value: "Varios",
  //       label: "Varios",
  //     },
  //   ];

  const clientes = [
    {
      idCliente: "",
      nombre: "",
      descuento: 0,
      esActivo: true,
    },
  ];

  const labelDescuento = useRef();
  //const [selectedCliente, setSelectedCliente] = useState("");

  const cargaComponentesFactura = (clientes) => {
    console.log(clientes);
    // setSelectedCliente(clientes.nombre); // Update selected cliente
    // labelDescuento.current.value = clientes.descuento;
    setSelectedIdCliente(clientes.idCliente);
    console.log("SelectedIdCliente:", clientes.idCliente);
    onClienteChange(clientes); // Pass selected cliente to parent component
    labelDescuento.current.value = clientes.descuento;
    console.log(labelDescuento.current.value);
  };

  return (
    <div>
      <Item>
        <h5>Componentes de facturas</h5>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Cliente"
              //defaultValue="Generico"
              value={selectedCliente}
              helperText="Ingresa un cliente"
            >
              {data.map((clientes) => (
                <MenuItem
                  key={clientes.idCliente}
                  value={clientes.nombre}
                  onClick={() => {
                    //console.log(clientes);
                    cargaComponentesFactura(clientes);
                  }}
                >
                  {clientes.nombre}
                </MenuItem>
              ))}
            </TextField>
            {/* <TextField
              disabled
              id="outlined-multiline-flexible"
              label="Desuento"
              maxRows={4}
              inputRef={labelDescuento}
            /> */}
            <TextField
              style={{ width: "100px" }}
              disabled
              label="Descuento"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "15ch" }}
              inputRef={labelDescuento}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">C$</InputAdornment>
                ),
              }}
              value={descuento} // Pass descuento as value
            />
          </div>
        </Box>
      </Item>
    </div>
  );
}
