import styled from "styled-components";
import "../styles/Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/loginService";
import { Alert } from "reactstrap";

export function Login() {
  const [usuario, setUsuario] = useState({
    correo: "",
    clave: "",
  });

  const [msg, setMsg] = useState("");

  //#region propiedades alerta
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  //#endregion

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dentro del handleSubmit");
    console.log(usuario);
    // const arrayOfKeyValuePairs = JSON.stringify(usuario);
    // console.log(arrayOfKeyValuePairs);

    const { data: token } = await login(usuario);
    console.log(token);
    if (token !== "") {
      navigation("/Dashboard");
    } else {
      // setMsg("Las credenciales son incorrectas, intente nuevamente");
      setVisible(true);
    }
  };

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log([e.target.name], e.target.value);
  };
  const navigation = useNavigate();

  return (
    <Container>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="email"
              name="correo"
              placeholder="Usuario"
              required
              onChange={(e) => handleChange(e)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="clave"
              placeholder="Clave"
              required
              onChange={(e) => handleChange(e)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Recuerdame
            </label>
            <a href="#">Olvidates tu contrasena?</a>
          </div>
          {/* <h6 style={{ color: "red" }}>{msg}</h6> */}
          <Alert
            color="danger"
            isOpen={visible}
            toggle={onDismiss}
            style={{
              marginBottom: "10px",
              height: "35px",
              textAlign: "center",
            }}
          >
            Credenciales Incorrectas
          </Alert>

          <button type="submit" id="loginButton">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("../src/assets/pexels-joshsorenson-127513.jpg");
  font-family: "Poppins", sans-serif;
  background-size: cover;
  background-position: center;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .wrapper {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(25px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
  }
  .wrapper h1 {
    font-size: 36px;
    text-align: center;
  }
  .wrapper .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }

  .input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
  }

  .input-box input::placeholder {
    color: #fff;
  }

  .input-box .icon {
    position: absolute;
    right: 20px;
    top: 40%;
    transform: translateY(-50);
    font-size: 16px;
  }

  .wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
  }

  .remember-forgot label input {
    accent-color: #fff;
    margin-right: 4px;
  }

  .remember-forgot a {
    color: #fff;
    text-decoration: none;
  }

  .remember-forgot a:hover {
    text-decoration: underline;
  }

  #loginButton {
    width: 100%;
    height: 45px;
    background: #fff;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .wrapper .btn-close {
    /* Custom button styles */
    width: 10px;
    height: 10px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    font-size: 12px;
  }
`;

// import React from "react";

// const Login = () => {
//   return <div></div>;
// };

// export default Login;
