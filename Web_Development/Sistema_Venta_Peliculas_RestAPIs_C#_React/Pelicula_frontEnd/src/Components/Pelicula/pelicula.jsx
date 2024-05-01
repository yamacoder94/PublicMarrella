import React, { useState, useContext, useRef, useEffect } from "react";
import { Button, Paper, Grid, Icon, Rating } from "@mui/material";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";

const Pelicula = ({ datos }) => {
  const { handleAgregarFavorito, handleEliminarFavorito } =
    useContext(FavoritoContext);
  const { handleAgregarCarrito, handleComprar } = useContext(CarritoContext);
  const [itemsPeliculas, setitemsPeliculas] = useState([]);

  const [esFavorita, setEsFavorita] = useState(
    datos.favorito.length ? true : false
  );
  // Si favorito.length es mayor a 0 , retorna un true , caso contrario un false
  const [botones, setBotones] = useState("");
  const favorito = useRef(); //para editar el estado de un elmento html

  useEffect(() => {
    setBotones(datos.carrito.length > 0 ? true : false);
  }, []);

  const setFavorito = (pelicula) => {
    // console.log(pelicula);
    // console.log(pelicula.favorito.length);
    // console.log(esFavorita);

    if (!esFavorita) {
      handleAgregarFavorito(pelicula);
      favorito.current.className =
        "material-icons MuiIcon-root MuiIcon-colorSecondary";
      console.log(favorito.current.className);
    } else {
      // console.log("Camino a eliminar");
      // console.log(pelicula);
      handleEliminarFavorito(pelicula);
      favorito.current.className =
        "material-icons MuiIcon-root MuiIcon-colorDisabled";
      console.log(favorito.current.className);
    }
    setEsFavorita(!esFavorita);
    //con esto alternamos el estado de la pelicula , si es favorita , la niega y viceversa
  };

  // const handleChange = (e) => {
  //   console.log(e);
  //   setitemsPeliculas({ ...itemsPeliculas, e });
  //   console.log(itemsPeliculas);
  // };

  // return (
  //   <>
  //     <Grid container item xs={12} sm={4} lg={3}>
  //       {/* si esto es para el responsive
  //       en modo large vamos a ver 3
  //       en modo small vamos a ver 4
  //       y en xs lo va a mostrar sobre las 12 columnas
  //       item va por que es una tarjeta (card)*/}
  //       <Paper style={{ padding: 5, textAlign: "center" }}>
  //         {/* <div>
  //           <button
  //             ref={favorito}
  //             style={{ backgroundColor: "yellow" }}
  //             onClick={() => setFavorito()}
  //             //nos permite tener logica sobre un objeto
  //             //en este caso , le agregamos favorito al <button>
  //             //de este modo al crear un metodo setFavorito, se puede jugar con los atributos que tiene el boton
  //             //permite crear una referencia con elemento HTML y poder manipularlo
  //           >
  //             Favoritos
  //           </button>
  //         </div> */}

  //         <h2>{datos.titulo}</h2>
  //         {/*  datos.favorito.length > 0 ?"secondary":"disabled"
  //         so datos.favorito.length es mayor a 0 , que lo pinte de secondary , caso contrario que sea disabled
  //         es lo mismo que colocar un if /else pero en una sola linea*/}
  //         <Icon
  //           color={datos.favorito.length > 0 ? "secondary" : "disabled"}
  //           style={{ cursor: "pointer" }}
  //           ref={favorito}
  //           onClick={() => setFavorito(datos)}
  //         >
  //           favorite
  //         </Icon>
  //         <div>
  //           <img width={200} src={datos.portada}></img>
  //         </div>
  //         <div>
  //           <Rating value={datos.estrellas} readOnly></Rating>
  //           {/* esta propiedad admite valores de entre 1 y 5
  //           [por eso se puede usar con datos.estrellas*/}
  //         </div>

  //         <div>{datos.sinopsis}</div>
  //         <br></br>
  //         <div>{`Genero: ${datos.genero}`}</div>
  //         <br></br>
  //         <div>{`Director: ${datos.director}`}</div>
  //         <br></br>
  //         <div>{`Ahno: ${datos.anio}`}</div>
  //         <div>
  //           <b>{`Precio: $ ${datos.precio}`}</b>
  //         </div>
  //         <br></br>

  //         <div>
  //           <hr></hr>
  //           <Button
  //             variant="contained"
  //             color="primary"
  //             // Consecuentemente , luego del click , la propiedad disabled toma el nuevo valor de botones
  //             disabled={botones}
  //             onClick={() => {
  //               //al hacer click , se esta asignando el valor de botones a disabled
  //               setBotones("disabled");
  //               // setitemsPeliculas(datos.idPelicula);
  //               // console.log(itemsPeliculas);
  //               handleComprar([datos]);
  //               // handleChange(datos);
  //               alert("Has comprado esta movie!");
  //             }}
  //           >
  //             Comprar
  //           </Button>
  //           &nbsp;
  //           <Button
  //             variant="outlined"
  //             color="secondary"
  //             disabled={botones}
  //             onClick={() => {
  //               //setBotones("disabled");
  //               handleAgregarCarrito(datos);
  //               setBotones(true);
  //               alert("Agregaste al carrito!");
  //             }}
  //           >
  //             Agregar Carrito
  //           </Button>
  //         </div>
  //       </Paper>
  //     </Grid>
  //   </>
  // );

  return (
    <>
      <Grid container item xs={12} sm={4} lg={3}>
        <Paper style={{ padding: 5, textAlign: "center" }}>
          <h2>{datos.titulo}</h2>
          <Icon
            color={datos.favorito.length > 0 ? "secondary" : "disabled"}
            style={{ cursor: "pointer" }}
            ref={favorito}
            onClick={() => setFavorito(datos)}
          >
            favorite
          </Icon>
          <div>
            <img width={200} src={datos.portada} />
          </div>
          <div>
            <Rating value={datos.estrellas} readOnly />
          </div>
          <div>{datos.sinopsis}</div>
          <br />
          <div>{`Género: ${datos.genero}`}</div>
          <br />
          <div>{`Director: ${datos.director}`}</div>
          <br />
          <div>{`Año: ${datos.anio}`}</div>
          <br />
          <div>
            <b>{`Precio: $ ${datos.precio}`}</b>
          </div>
          <br />

          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={botones}
              onClick={() => {
                handleComprar([datos]);
                setBotones(true);
                alert("¡Has comprado esta película!");
              }}
            >
              Comprar
            </Button>
            &nbsp;
            <Button
              variant="outlined"
              color="secondary"
              disabled={botones}
              onClick={() => {
                handleAgregarCarrito(datos);
                setBotones(true);
              }}
            >
              Agregar al Carrito
            </Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Pelicula;
