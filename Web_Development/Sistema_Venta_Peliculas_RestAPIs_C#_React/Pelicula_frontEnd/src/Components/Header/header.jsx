import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import Icon from "@mui/material/Icon";
import { Badge } from "@mui/material";
import { FavoritoContext } from "../Context/favoritoContext";
import { CarritoContext } from "../Context/carritoContext";

const Header = () => {
  const { cantidadFav } = useContext(FavoritoContext);
  const { cantidad } = useContext(CarritoContext);

  const location = useLocation(); // Use useLocation hook

  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location]);

  return (
    <header>
      <h1>Peliculas</h1>
      <br></br>
      <Link to="/favoritos">
        <Icon color="action" fontSize="large">
          favorite
        </Icon>
      </Link>
      <Badge badgeContent={cantidadFav} color="secondary"></Badge>
      &nbsp;&nbsp;
      {/* nbsp los pone uno a lado del otro */}
      <Link to="/carrito">
        <Icon color="action" fontSize="large">
          shopping_cart
        </Icon>
      </Link>
      <Badge badgeContent={cantidad} color="primary"></Badge>
      &nbsp;&nbsp;
      <h2>usuario logeado</h2>
    </header>
  );
};

export default Header;

/*
Ahora que tenemos la cantidad de favoritos desde favoritoContext 
se puede usar aca en el header 
*/
