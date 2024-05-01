import React, { useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { enviaVenta } from "../../services/ventaService";

export default function MontoFactura({
  subtotalGeneral,
  setSubtotalGeneral,
  descuento,
  detalleFactura,
  selectedIdCliente,
}) {
  const [venta, setVenta] = useState([]);
  const today = new Date(); // Create a new Date object with the current date and time
  const day = String(today.getDate()).padStart(2, "0"); // Get the day and pad with leading zero if necessary
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get the month and pad with leading zero if necessary
  const year = today.getFullYear(); // Get the full year

  const formattedDate = `${day}-${month}-${year}`; // Format the date as DD-MM-YYYY

  // const handleSubmit = () => {
  //   // Handle form submission logic here

  //   if (subtotalGeneral === 0) {
  //     console.log("Factura vacia");
  //   } else {
  //     const ventaItem = {
  //       fechaRegistro: formattedDate,
  //       subTotal: subtotalGeneral,
  //       descuento: descuento,
  //       total: subtotalGeneral,
  //       detalleVenta: detalleFactura,
  //     };
  //     //setVenta([...venta, ventaItem]);
  //     setVenta([...venta, ventaItem]);
  //     console.log("Venta:", ventaItem);

  //     //convert to string
  //     const jsonString = JSON.stringify(ventaItem);
  //     console.log("Venta en json:", jsonString);
  //   }
  // };

  const handleSubmit = async () => {
    // Handle form submission logic here

    if (subtotalGeneral === 0) {
      console.log("Factura vacia");
    } else {
      const ventaItem = {
        cliente: selectedIdCliente,
        fechaRegistro: formattedDate,
        subTotal: subtotalGeneral,
        descuento: descuento,
        total: subtotalGeneral,
        detalleVenta: detalleFactura,
      };
      //setVenta([...venta, ventaItem]);
      setVenta([...venta, ventaItem]);
      console.log("Venta:", ventaItem);

      //convert to string
      const jsonString = JSON.stringify(ventaItem);
      console.log("Venta en json:", jsonString);
      const response = await enviaVenta(jsonString);
      console.log("Venta Enviada");
    }
  };

  const generatePrintableText = () => {
    // Construct the printable text with different sections
    const topSection = `Fecha de Registro: ${formattedDate}\n`;
    const bottomSection = `Subtotal: ${subtotalGeneral}\nDescuento: ${descuento}\n`;

    // Concatenate the sections to form the final printable text
    const printableText = topSection + "\n" + bottomSection;

    return printableText;
  };

  const handlePrint = () => {
    // Generate the printable text
    const printableText = generatePrintableText();

    // Open a new window for printing
    const printWindow = window.open("", "_blank");

    // Write the printable text to the new window
    printWindow.document.write(printableText);

    // Close the document for printing
    printWindow.document.close();

    // Print the document
    printWindow.print();
  };

  return (
    <>
      <TextField
        required
        disabled
        id="subtotal"
        label="SubTotal"
        variant="standard"
        value={subtotalGeneral}
      />

      <TextField
        style={{ marginTop: "10px" }}
        disabled
        required
        id="descuento"
        label="Descuento"
        variant="standard"
        value={descuento}
      />

      <TextField
        style={{ marginTop: "10px" }}
        disabled
        required
        id="total"
        label="total"
        variant="standard"
      />
      <hr></hr>
      <Button
        style={{ marginTop: "20px" }}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Facturar
      </Button>
    </>
  );
}
