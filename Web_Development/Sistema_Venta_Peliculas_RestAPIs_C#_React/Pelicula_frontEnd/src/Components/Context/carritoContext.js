import React, { useState, createContext } from "react";
import { comprar } from "../Services/carritoService"; //puedo acceder a carritoService

//manera de definir un componente de tipo context
export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
  const [cantidad, setCantidad] = useState(0);
  const [items, setItems] = useState([]);

  const handleAgregarCarrito = async (pelicula) => {
    console.log("dentro del handleAgregarCarrito");
    setCantidad(cantidad + 1);
    setItems([...items, pelicula]);
  };

  const handleEliminarCarrito = async (pelicula) => {
    const newItems = items.filter(
      (item) => item.idPelicula !== pelicula.idPelicula
    );

    setItems(newItems);
    setCantidad(cantidad - 1);
  };

  const handleEliminarCarritoTodos = async () => {
    setItems([]);
    setCantidad(0);
  };

  const handleComprar = async (peliculas) => {
    console.log("dentro del handleComprar");
    console.log(peliculas);
    console.log(peliculas.idPelicula);

    const carrito = peliculas.map((pelicula) => ({
      // idUsuario: localStorage.getItem("idUsuario"),
      idUsuario: localStorage.getItem("idUsuario"),
      idPelicula: pelicula.idPelicula,
    }));

    console.log("Ya mapeo en carrito");
    console.log(carrito);

    await comprar(carrito);

    handleEliminarCarritoTodos();
  };

  return (
    <CarritoContext.Provider
      value={{
        items,
        setItems,
        cantidad,
        setCantidad,
        handleAgregarCarrito,
        handleEliminarCarrito,
        handleComprar,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};
