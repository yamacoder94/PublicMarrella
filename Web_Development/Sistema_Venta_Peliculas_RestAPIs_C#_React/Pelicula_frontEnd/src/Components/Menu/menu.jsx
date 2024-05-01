import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon, TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Menu = () => {
  const navigate = useNavigate();
  const [buscar, setBuscar] = useState("");
  //va a servir para ir actulizando en medida que vayamos actulizando en la caja de busqueda

  const location = useLocation(); // Use useLocation hook

  //recibe como parametro e y luego de manda para el evento onchange
  const handleBuscar = (e) => {
    // console.log("esto estaba en e.target.value " + e.target.value);
    setBuscar(e.target.value);
  };
  //recibe como parametro e y luego de manda para el evento onchange

  const handleLogout = () => {
    console.log("Estamos en el logout");
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location]);

  return (
    <nav>
      <TextField
        name="buscar"
        value={buscar}
        onChange={(e) => handleBuscar(e)}
        placeholder="Busca por genero,titulo,actores..."
        style={{ width: 300 }}
        variant="standard"
      ></TextField>
      <Icon
        color="action"
        style={{ cursor: "pointer" }}
        onClick={() => setBuscar("")}
        //aca se limpia setbuscar con ""
      >
        close
      </Icon>
      &nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/buscar/" + buscar);
          console.log("aca va el path /buscar/" + buscar);
        }}
      >
        <Icon color="action">search</Icon>
        Buscar
      </Button>
      &nbsp;
      <Button variant="contained" onClick={() => navigate("/destacadas")}>
        <Icon color="action">star</Icon>
        Destacadas
      </Button>
      &nbsp;
      <Button
        onClick={() => {
          navigate("/peliculas");
        }}
        variant="contained"
      >
        <Icon color="action">apps</Icon>
        Todas
      </Button>
      &nbsp;
      <Button
        onClick={() => {
          handleLogout();
        }}
        variant="contained"
      >
        <LoginIcon color="action">Todas</LoginIcon>
      </Button>
      {/* <br></br>
      <Link to="/peliculas">Todas</Link> */}
    </nav>
  );
};

export default Menu;
