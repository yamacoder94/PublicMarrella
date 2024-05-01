import React from "react";
import Peliculas from "../Pelicula/peliculas";
import { Route, Routes } from "react-router-dom";
import Favorito from "../Favorito/favorito";
import Carrito from "../Carrito/carrito";
import Destacadas from "../Pelicula/destacadas";
import Buscar from "../Pelicula/buscar";
import Registro from "../Registro/registro";
import Login from "../Login/login";

//para el ruteo a carrito y favorito

const Body = () => {
  return (
    //Aca se tiene que crear los paths para luego ser usados con Link
    //Los paths se pueden llamar de donde sea .. header , menu etc

    <section>
      <Routes>
        {/* Cada vez q se ponga cualquier url , nos llevara directamente a login page */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/peliculas" element={<Peliculas />}></Route>
        <Route path="/favoritos" element={<Favorito />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/destacadas" element={<Destacadas />}></Route>
        <Route path="/buscar/:valor" element={<Buscar />}></Route>
        {/* de esta forma decimeos que /buscar va a recbir un parametro 
        una vez recibimos el URL /buscar/valor , nos deberia de llevar al componente buscar*/}
        <Route path="/buscar/" element={<Peliculas />}></Route>
        <Route path="/registro/" element={<Registro />}></Route>
      </Routes>
    </section>
  );
};

export default Body;
