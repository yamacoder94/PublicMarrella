import React, { useContext, useEffect } from "react";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";
import { Button, Rating, Paper, Grid } from "@mui/material";

const FavoritoItem = ({ pelicula }) => {
  const { handleEliminarFavorito } = useContext(FavoritoContext);
  // const { handleAgregarCarrito } = useContext(CarritoContext);
  const { handleAgregarCarrito } = useContext(CarritoContext);

  //desestructuramos el metodo handleEliminarFavorito desde FavoritoContext

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(pelicula);
  // });

  return (
    <>
      <Grid container item xs={12} sm={12} lg={12}>
        <Paper style={{ padding: 5, textAlign: "center", width: "100%" }}>
          <table style={{ width: "100%" }}>
            <tr>
              <td>
                <img width={60} src={pelicula.portada} />
              </td>
              <td>
                <h2>{pelicula.titulo}</h2>
                <Rating value={pelicula.estrellas} readOnly></Rating>
              </td>
              <td>{`Año: ${pelicula.anio}`}</td>
              <td>{`Precio: $ ${pelicula.precio}`}</td>
              <td>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    console.log(pelicula);
                    handleEliminarFavorito(pelicula);
                  }}
                >
                  Quitar
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    console.log("Para el carrito");
                    handleAgregarCarrito(pelicula);
                    handleEliminarFavorito(pelicula);
                  }}
                >
                  Agregar al Carrito
                </Button>
              </td>
            </tr>
          </table>
        </Paper>
      </Grid>
    </>
  );
};

export default FavoritoItem;
