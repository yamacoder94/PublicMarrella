import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

export default function AgregaProductosFactura({
  data1,
  detalleFactura,
  setDetalleFactura,
  subtotalGeneral,
  setSubtotalGeneral,
  selectedCliente,
  descuento,
}) {
  const productos = data1.map((producto) => ({
    id: producto.idProducto,
    descripcion: producto.descripcion,
    marca: producto.marca,
    idCategoria: producto.idCategoria,
    stock: producto.stock,
    precio: producto.precio,
    imagen: producto.imagen,
    esActivo: producto.esActivo,
    fechaRegistro: producto.fechaRegistro,
  }));

  //const [detalleFactura, setDetalleFactura] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [isChecked, setIsChecked] = useState(true);

  //   const handleOptionSelect = (option) => {
  //     if (option) {
  //       setDetalleFactura([...detalleFactura, option]);
  //     } else {
  //       console.log("option esta vacio");
  //     }
  //   };

  const handleOptionSelect = (value) => {
    setSelectedProduct(value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClick = () => {
    if (selectedCliente === "") {
      console.log("Selecciona un cliente");
    } else {
      //En caso que sea la colonia , siempre tendra descuento
      //   if (selectedCliente === "Walmart Nicaragua") {
      //     setIsChecked(true);
      //   }

      const selectedProductData = {
        ...selectedProduct, // Include selected product data
        quantity, // Include quantity
        isChecked, // Include isChecked
      };

      if (selectedProductData.isChecked) {
        console.log("dentro de la operacion con descuento");
        const quantityInt = parseInt(selectedProductData.quantity, 10);
        const descalfo =
          (selectedProductData.precio * quantityInt * descuento) / 100;
        const subTotal = selectedProductData.precio * quantityInt - descalfo;

        //const subTotalDescuento = (subTotal * descuento)/100
        console.log(subTotal);

        const selectProductFinal = {
          ...selectedProductData,
          subTotal,
        };
        console.log("producto con subtotal ", selectProductFinal);

        setDetalleFactura([...detalleFactura, selectProductFinal]); //esto es para la tabla
        subtotalGeneral = subtotalGeneral + selectProductFinal.subTotal;
        setSubtotalGeneral(subtotalGeneral);
        console.log("Esto tiene ahora detalle factura:", detalleFactura);
        console.log("Esto tiene ahora subtotal general", subtotalGeneral);
        console.log("esta es la informacion del cliente", selectedCliente);
        console.log("esta es la informacion del descuento", descuento);
      } else {
        const quantityInt = parseInt(selectedProductData.quantity, 10);
        const subTotal = selectedProductData.precio * quantityInt;

        console.log(subTotal);

        const selectProductFinal = {
          ...selectedProductData,
          subTotal,
        };

        console.log("producto con subtotal ", selectProductFinal);

        setDetalleFactura([...detalleFactura, selectProductFinal]); //esto es para la tabla
        subtotalGeneral = subtotalGeneral + selectProductFinal.subTotal;
        setSubtotalGeneral(subtotalGeneral);
        console.log("Esto tiene ahora detalle factura:", detalleFactura);
        console.log("Esto tiene ahora subtotal general", subtotalGeneral);
        console.log("esta es la informacion del cliente", selectedCliente);
        console.log("esta es la informacion del descuento", descuento);
      }
    }
  };

  // Initialize detalleFactura with the first item from data1 if it exists
  //   useEffect(() => {
  //     if (data1.length > 0) {
  //       setDetalleFactura([data1[0]]);
  //       console.log("desde Agrega Productos  en useEffect");
  //       console.log([data1[0]]);
  //     }
  //   }, [data1]);

  return (
    <>
      {/* <div style={{ display: "flex", alignItems: "center" }}> */}
      {/* <h5 style={{ marginRight: "20px", marginLeft: "20px" }}>
          Agregar productos
        </h5> */}

      {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={productos} // Use productos array as options
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Productos" />}
          getOptionLabel={(option) => option.descripcion} // Custom function to get the label from each option
          onChange={(event, value) => handleOptionSelect(value)}
        /> */}
      {/* <Autocomplete
          
          disablePortal
          id="combo-box-demo"
          options={data1} // Use data1 array as options
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Productos" />}
          getOptionLabel={(option) => option.descripcion}
          onChange={(event, value) => handleOptionSelect(value)} // Call handleOptionSelect when an option is selected
          isOptionEqualToValue={(option, value) => option.id === value?.id} // Customize the equality test
        /> */}
      {/* </div> */}
      <h5>Agregar productos</h5>

      {/* <Stack spacing={2} direction="row">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data1} // Use data1 array as options
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Productos" />}
          getOptionLabel={(option) => option.descripcion}
          onChange={(event, value) => handleOptionSelect(value)} // Call handleOptionSelect when an option is selected
          isOptionEqualToValue={(option, value) => option.id === value?.id} // Customize the equality test
        />
        <TextField
          id="standard-basic"
          label="cantidad"
          variant="standard"
          style={{ width: "150px" }}
        />

        <Fab
          color="primary"
          aria-label="add"
          style={{ marginLeft: "auto", marginRight: "10px" }}
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>
      </Stack> */}

      <Stack spacing={2} direction="row">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data1} // Use data1 array as options
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Productos" />}
          getOptionLabel={(option) => option.descripcion}
          onChange={(event, value) => handleOptionSelect(value)} // Call handleOptionSelect when an option is selected
          isOptionEqualToValue={(option, value) => option.id === value?.id} // Customize the equality test
        />
        <TextField
          id="standard-basic"
          label="cantidad"
          variant="standard"
          style={{ width: "100px" }}
          value={quantity}
          onChange={handleQuantityChange}
        />
        {(selectedCliente === "La Colonia" ||
          selectedCliente === "Generico") && (
          <>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            <h6 style={{ marginTop: "20px" }}>Descuento</h6>
          </>
        )}

        <Fab
          color="primary"
          aria-label="add"
          style={{ marginLeft: "auto", marginRight: "10px" }}
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>
      </Stack>
    </>
  );
}
