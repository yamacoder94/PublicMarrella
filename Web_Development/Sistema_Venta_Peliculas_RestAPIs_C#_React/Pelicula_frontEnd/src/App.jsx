import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import NavBar01 from "./components/NavBar01";
import { Login } from "../src/pages/Login";

export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  //Aca se define el estado incial de sidebarOpen  el cual es true
  //es transferido a Sidebar de este modo
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      {/* 1. Se creo routes donde estan las rutas
//     2. luego esas rutas se importan al app(origen)
//     3.Por esa razon se coloca el browserRputes aqqui
//     4. dentro tiene un contenedor que tiene el sidebar
//     y mis rutas desde routes */}
      <ThemeContext.Provider value={{ setTheme, theme }}>
        {/* ThemeContext provider que trae la info de los styles/thems */}
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            {/* <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <ContentContainer>
                <NavBar01 />
                <MyRoutes />
              </ContentContainer>
            </Container> */}
            <Routes>
              <Route path="/" element={<Login />} />{" "}
              {/* Route to the login component */}
              <Route
                path="*"
                element={
                  // Nested route for the main application after login
                  <Container
                    className={sidebarOpen ? "sidebarState active" : ""}
                  >
                    <Sidebar
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                    <ContentContainer>
                      <NavBar01 />

                      <MyRoutes />
                    </ContentContainer>
                  </Container>
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
//Aca es donde cambia de tamano del sidebar
//empiza con columnas de 90 y luego a  300 cuando esta activo
//Como el SideNavBar esta en todo el codigo , se hace desde el componente principal
const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  //esto hace la transicion
  transition: all 0.3s;
  &.active {
    grid-template-columns: 300px auto;
  }
  color: ${({ theme }) => theme.text};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default App;
