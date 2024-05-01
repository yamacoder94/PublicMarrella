import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Body from "./Components/Body/body.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Header from "./Components/Header/header.jsx";
import Menu from "./Components/Menu/menu.jsx";
import "./index.css";
import { FavoritoProvider } from "./Components/Context/favoritoContext.js";
import { CarritoProvider } from "./Components/Context/carritoContext.js";
import { LoginProvider } from "./Components/Context/loginContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <CarritoProvider>
        <FavoritoProvider>
          <LoginProvider>
            {localStorage.getItem("idUsuario") > 0 && <Header />}
            {localStorage.getItem("idUsuario") > 0 && <Menu />}
            <Body />
            <Footer />
          </LoginProvider>
        </FavoritoProvider>
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Se agrego <FavoritoProvider> para que la informacion de Favorito se pueda usar en todos los componentes
