import { Button, Container, TextField } from "@mui/material";
import { Icon } from "@mui/material";

import React, { useState } from "react";
import { registrar } from "../Services/usuarioService";
import { useNavigate } from "react-router-dom";
import sha1 from "sha1";
const Registro = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  //Se encargar de trabjar los cambios dentro del formulario
  //ira almacenando la data dentro de usuario
  const handleChange = (e) => {
    /*
    if (e.target.name === "nombre")
      setUsuario({ ...usuario, nombre: e.target.value });
    if (e.target.name === "apellido")
      setUsuario({ ...usuario, apellido: e.target.value });
    if (e.target.name === "email")
      setUsuario({ ...usuario, email: e.target.value });
    if (e.target.name === "password")
      setUsuario({ ...usuario, password: e.target.value });
    //console.log([e.target.name], e.target.value);*/
    setUsuario({
      ...usuario,
      [e.target.name]:
        e.target.name === "password" ? sha1(e.target.value) : e.target.value,
    }); //en caso que el campo que estamos escribiendo sea password, se encarga de encriptarlo
  };

  //se encarga de tomar la informacion del submit y hace el llamado al api
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario);
    await registrar(usuario); //aca es donde se llama a usuarioService que contiene la info
    //para el llamado de API
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "grey" }}>Venta de Peliculas</h2>
        <h2>Registrate ahora</h2>
        <Icon color="action">account_circle</Icon>
        &nbsp;&nbsp;
        <TextField
          name="nombre"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Ingresa tu nombre"
          style={{ width: 300 }}
          variant="standard"
        ></TextField>
        &nbsp;&nbsp;
        <TextField
          name="apellido"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Ingresa tu apellido"
          style={{ width: 300 }}
          variant="standard"
        />
        <br></br>
        <br></br>
        <br></br>
        <Icon color="action">mail_outline</Icon>
        &nbsp;&nbsp;
        <TextField
          name="email"
          type="email"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Ingresa tu email"
          style={{ width: 300 }}
          variant="standard"
        />
        <br />
        <br />
        <br />
        <Icon color="action">vpn_key</Icon>
        &nbsp;&nbsp;
        <TextField
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Ingresa tu password"
          style={{ width: 300 }}
          variant="standard"
        />
        <br />
        <br />
        <hr />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigation("/")}
        >
          Volver
        </Button>
        &nbsp;
        <Button type="submit" variant="contained" color="success">
          Registrar
        </Button>
      </form>
    </Container>
  );
};

export default Registro;
