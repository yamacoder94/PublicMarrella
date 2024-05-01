import { Button, Container, TextField } from "@mui/material";
import { Icon } from "@mui/material";
import sha1 from "sha1";
import { login } from "../Services/usuarioService";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/loginContext";
import { FavoritoContext } from "../Context/favoritoContext";

const Login = () => {
  const [usuario, setUsuario] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const { handleLogin } = useContext(LoginContext);
  const { handleObtenerFavorito } = useContext(FavoritoContext);

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: usuarioValido } = await login(usuario);
    console.log(usuarioValido);
    if (usuarioValido) {
      handleLogin(usuarioValido.idUsuario, usuarioValido.token);
      handleObtenerFavorito();
      window.location.href = "/destacadas";
      //navigation({ pathname: "/destacadas" });
    } else setMsg("Las credenciales son incorrectas, intente nuevamente.");
  };

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]:
        e.target.name === "password" ? sha1(e.target.value) : e.target.value,
    });
    console.log(usuario);
  };
  // const handleChange = (e) => {
  //   setUsuario({
  //     ...usuario,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  /*useEffect(() => {
    email !== null && history.push({ pathname: "/destacadas" });
  }, []);*/

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "grey" }}>Venta de Películas</h2>
        <h2>Bienvenido</h2>
        <Icon color="action">mail_outline</Icon>&nbsp;
        <TextField
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Ingresa tu email"
          required
          style={{ width: 300 }}
        />
        <br />
        <br />
        <Icon color="action">vpn_key</Icon>&nbsp;
        <TextField
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="Ingresa tu password"
          required
          style={{ width: 300 }}
        />
        <br />
        <br />
        <h4 style={{ color: "red" }}>{msg}</h4>
        <hr />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigation({ pathname: "/registro" })}
        >
          Regístrate
        </Button>
      </form>
    </Container>
  );
};

export default Login;
