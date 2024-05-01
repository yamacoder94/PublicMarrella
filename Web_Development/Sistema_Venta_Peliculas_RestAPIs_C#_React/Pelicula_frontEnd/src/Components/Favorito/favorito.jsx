import React, { useContext, useEffect } from "react";
import FavoritoItem from "./favoritoItem";
import { Grid } from "@mui/material";
import { FavoritoContext } from "../Context/favoritoContext";

const Favorito = ({ pelicula }) => {
  const { itemsFav } = useContext(FavoritoContext);

  useEffect(() => {
    // Update the document title using the browser API
    //Cada vez q
    console.log(itemsFav);
  });
  return (
    <>
      <h2>
        Mis Favoritos{" "}
        {itemsFav.length === 0 &&
          "(No tienes películas favoritas en tu lista.)"}
      </h2>
      <Grid container spacing={2}>
        {itemsFav.map((pelicula) => (
          <FavoritoItem
            pelicula={pelicula}
            key={pelicula.idPelicula}
          ></FavoritoItem>
        ))}
      </Grid>
    </>
  );
};

export default Favorito;
