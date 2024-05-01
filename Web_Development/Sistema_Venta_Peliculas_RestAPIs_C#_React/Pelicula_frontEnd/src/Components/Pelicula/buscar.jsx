import React, { useState, useEffect } from "react";
import { buscarPor } from "../Services/peliculasServices";
import { Grid } from "@mui/material";
import Pelicula from "./pelicula";
import { useParams } from "react-router-dom";

const Buscar = () => {
  const [peliculas, setPeliculas] = useState([]);
  const { valor } = useParams(); //para agarrar lo que viene en el URL

  const handleBuscar = async (buscar) => {
    // console.log("dentro del hanldeBuscar");
    // console.log("busca:" + buscar);
    // const { data: pelis } = await buscarPor(buscar);
    // setPeliculas(pelis);
    const { data: peliculas } = await buscarPor(
      localStorage.getItem("idUsuario"),
      buscar
    );
    setPeliculas(peliculas);
  };

  useEffect(() => {
    handleBuscar(valor);
    // console.log("Aca va el props.match.params.value" + valor);
    //.valor , lo definimos como el valor que se pasa desde body en el routeo
  }, [valor]);

  return (
    <>
      <h2>
        Resultados de la busqueda
        <Grid container spacing={2}>
          {peliculas.map((pelicula) => (
            <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
          ))}
        </Grid>
      </h2>
    </>
  );
};

export default Buscar;
