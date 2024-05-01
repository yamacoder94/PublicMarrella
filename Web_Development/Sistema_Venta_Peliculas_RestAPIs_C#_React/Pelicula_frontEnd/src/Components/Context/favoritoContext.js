import React, { useEffect, createContext, useState } from "react";
import {
  obtenerFavorito,
  agregaFavorito,
  eliminarFavorito,
} from "../Services/favoritoServices";

//manera de definir un componente de tipo context
export const FavoritoContext = createContext();

// export const FavoritoProvider = (props) => {
//   const [cantidadFav, setCantidadFav] = useState(0);
//   const [itemsFav, setItemsFav] = useState([]);

//   const handleObtenerFavorito = async () => {
//     console.log("Estamos en favorito context en handleObtenerFavorito");
//     console.log(
//       "esto tiene el localStorage: " + localStorage.getItem("idUsuario")
//     );
//     const { data: favoritos } = await obtenerFavorito(
//       localStorage.getItem("idUsuario")
//     );
//     console.log(favoritos);
//     setItemsFav(favoritos);
//     setCantidadFav(favoritos.length);
//   };

//   const handleAgregarFavorito = async (pelicula) => {
//     console.log("llegamos a handleAgregarFavorito");
//     await agregaFavorito({
//       idUsuario: localStorage.getItem("idUsuario"),
//       idPelicula: pelicula.idPelicula,
//     });
//     setCantidadFav(cantidadFav + 1);
//     console.log("se agrego a favorito");
//     // se suma 1por que se agrega un a las peliculas en favorito
//     setItemsFav([...itemsFav, pelicula]);
//     //de esta manera se actuliza la pagina de favoritas luego de que se elimno una
//   };

//   const handleEliminarFavorito = async (pelicula) => {
//     // console.log("llegamos a handleEliminarFavorito");
//     // console.log(pelicula.idPelicula);
//     const { data } = await eliminarFavorito({
//       idUsuario: localStorage.getItem("idUsuario"),
//       idPelicula: pelicula.idPelicula,
//     });
//     const newItems = itemsFav.filter(
//       (item) => item.idPelicula !== pelicula.idPelicula
//     );
//     setItemsFav(newItems); // con esto se actuliza favoritoItem luego de eliminar una pelicula
//     setCantidadFav(cantidadFav - 1);
//     console.log("se elimino a favorito");
//   };

//   useEffect(() => {
//     handleObtenerFavorito();
//   }, []);
//   return (
//     <FavoritoContext.Provider
//       value={{
//         itemsFav,
//         cantidadFav,
//         handleAgregarFavorito,
//         handleEliminarFavorito,
//       }}
//     >
//       {props.children}
//     </FavoritoContext.Provider>
//   );
// };

/*
Se definio el retorno 
Una etiqueta tipo FavoritoContext
Le pasamos un valor de cantidadFav
esto terno todos los estados que quiera exponer 
para que todos los otros componentes lo puedan usar
Desde cualquier lado se puede acceder a la cantida de favoritos 
sin importar en que componenete este
En su lugar seria nombre de usuario logeado

*/

export const FavoritoProvider = (props) => {
  const [cantidadFav, setCantidadFav] = useState(0);
  const [itemsFav, setItemsFav] = useState([]);

  const handleObtenerFavorito = async () => {
    const { data: favoritos } = await obtenerFavorito(
      localStorage.getItem("idUsuario")
    );
    //console.log(favoritos);
    setItemsFav(favoritos);
    setCantidadFav(favoritos.length);
  };

  const handleAgregarFavorito = async (pelicula) => {
    await agregaFavorito({
      idUsuario: localStorage.getItem("idUsuario"),
      idPelicula: pelicula.idPelicula,
    });
    setCantidadFav(cantidadFav + 1);
    setItemsFav([...itemsFav, pelicula]);
  };

  const handleEliminarFavorito = async (pelicula) => {
    const { data } = await eliminarFavorito({
      idUsuario: localStorage.getItem("idUsuario"),
      idPelicula: pelicula.idPelicula,
    });
    const newItems = itemsFav.filter(
      (item) => item.idPelicula !== pelicula.idPelicula
    );
    setItemsFav(newItems);
    setCantidadFav(cantidadFav - 1);
  };

  useEffect(() => {
    localStorage.getItem("idUsuario") && handleObtenerFavorito();
  }, []);

  return (
    <FavoritoContext.Provider
      value={{
        itemsFav,
        cantidadFav,
        handleObtenerFavorito,
        handleAgregarFavorito,
        handleEliminarFavorito,
      }}
    >
      {props.children}
    </FavoritoContext.Provider>
  );
};
