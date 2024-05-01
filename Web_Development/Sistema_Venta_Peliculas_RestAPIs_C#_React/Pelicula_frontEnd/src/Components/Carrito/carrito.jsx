// import React, { useContext } from "react";
// import { CarritoContext } from "../Context/carritoContext";
// import { Button } from "@mui/material";

// const Carrito = ({ pelicula }) => {
//   const { handleEliminarCarrito } = useContext(CarritoContext);
//   return (
//     <>
//       <h2>CARRITO</h2>
//       <Button
//         variant="outlined"
//         color="secondary"
//         onClick={() => {
//           console.log("Para el carrito");
//           // handleAgregarCarrito(pelicula);
//         }}
//       >
//         Agregar al Carrito
//       </Button>
//     </>
//   );
// };

// export default Carrito;

import React, { useContext } from "react";
import CarritoItem from "../Carrito/carritoItem";
import { Grid, Button } from "@mui/material";
import { CarritoContext } from "../Context/carritoContext";

const Carrito = () => {
  const { items, handleComprar } = useContext(CarritoContext);

  return (
    <>
      <h2>
        Mi Carrito{" "}
        {items.length === 0 ? (
          "(No tienes películas en tu carrito)"
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleComprar(items);
            }}
          >
            Comprar Ahora
          </Button>
        )}
      </h2>

      <Grid container spacing={2}>
        {items.map((pelicula) => (
          <CarritoItem pelicula={pelicula}></CarritoItem>
        ))}
      </Grid>
    </>
  );
};

export default Carrito;
