import React, { useState, useEffect } from "react";
import Pelicula from "./pelicula.jsx";
import { obtienerPeliculas } from "../Services/peliculasServices.js";
//../ baja un directorio
import { Grid } from "@mui/material";

const Peliculas = (props) => {
  const [peliculas, setPeliculas] = useState([]);
  //se inicializa como un array vacio

  //Podria ser lo mismo que ComponentDidMount
  useEffect(() => {
    cargarPelicula();
    //cambia el estado del componente
  }, []);
  //Si no se agrega [] , el useEffect se ejecuta hasta que el componente cambia de estado

  //podria ser como ComponentDidUpdate
  useEffect(() => {
    console.log("Se ejecuta cuando cambia el estado ");
  });
  //aca se ejecuta al inicio por que carga el componente
  //y una vez se carga la lista y el componente se actuliza , se vuelve a correr este useEffect

  //carga las peliculas
  const cargarPelicula = async () => {
    //aca axios replaza fetch
    //todo component axios que se ejecuta retorna un objeto que se llama data
    //siempre sera para axios asi
    // luego convertimos data en pelis
    //lo que tiene pelis luego se asigna usando setPeliculas
    //que actuliza el estado de peliculas
    const { data: pelis } = await obtienerPeliculas(
      localStorage.getItem("idUsuario")
    );
    //se usa async and await por que podria darse que se ejecute setPeliculas
    //sin que  se haya obtenido al informacion en data : pelis
    setPeliculas(pelis);
  };

  return (
    <>
      <div>
        <h2>Peliculas</h2>
        {/* <button onClick={() => cargarPelicula()}>Cargar Peliculas</button> */}
      </div>
      <hr></hr>
      <Grid container spacing={2}>
        {/* Aca es donde se dibujan las peliculas */}
        {peliculas.map((pelicula) => (
          // Agarra la lista de peliculas , la mapea y luego crea un
          //objeto tipo pelicula (con el layout de cada elemento) y lo dibuja
          <Pelicula datos={pelicula} key={pelicula.idPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Peliculas;
