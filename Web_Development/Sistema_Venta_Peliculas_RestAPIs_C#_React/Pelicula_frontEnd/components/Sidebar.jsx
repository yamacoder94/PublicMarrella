import styled from "styled-components";
import logo from "../assets/react.svg";
import { v } from "../styles/Variables";
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
//son los iconos
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { BsPeople } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

import React, { useState } from "react";

//Funcion del sidebar
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
    //cambia la variable sidebarOpen
    //cambia de trua a false o viceversa
  };
  //De esta forma podeos jalar los Themes desde ThemeContext
  const { setTheme, theme } = useContext(ThemeContext);
  //Para cambiar entre claro u oscuro
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  //#region control dropDown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //de entrada carga el dropDown como cerrado

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //al llamarse el metodo toggle , este cambia el estadoo de prevState
  const closeDropdown = () => setDropdownOpen(false);

  //#endregion

  return (
    // Una vez que se agregaron los enlaces en region
    //Se pueden hacer los llamados aca
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <div
        className="Logocontent"
        style={{ background: "#fff", marginTop: "0px" }}
      >
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2 style={{ color: "#070708" }}>DISEF</h2>
      </div>
      {/* Se mapea el linksArray 
      Se extraen las propiedades icon, label, to 
      el mapeo genera muchas versiones de todo lo que esta en el linkContainer 
      y usa sus valores para estructurarlo */}

      {linksArray.map(({ icon, label, to, dropdown, items }) => (
        <div className="LinkContainer" key={label}>
          {dropdown ? (
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              direction="right"
              className="Links"
              style={{
                height: "100%",
              }}
              onMouseLeave={closeDropdown}
            >
              <DropdownToggle
                nav
                style={{
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="Linkicon"
                  style={{
                    //display: "flex",
                    fontSize: "25px",
                  }}
                >
                  {icon}
                </div>

                {sidebarOpen && <span>{label}</span>}
              </DropdownToggle>
              <CustomDropdownMenu
                style={{
                  borderRadius: "0px",
                }}
              >
                {/* <DropdownItem>
                  <NavLink to={to}>{label}</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem> */}

                {items.map(({ label, to }) => (
                  <CustomDropdownItem
                    tag={NavLink}
                    to={to}
                    style={{
                      textDecoration: "none",
                    }}
                    key={label}
                  >
                    {label}
                  </CustomDropdownItem>
                ))}
              </CustomDropdownMenu>
            </Dropdown>
          ) : (
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          )}
        </div>
      ))}

      <Divider />
      {/* Inicio menu de abajo */}
      {secondarylinksArray.map(({ icon, label, to, dropdown, items }) => (
        // <div className="LinkContainer" key={label}>
        //   {label == "Configuración" && (
        //     // Si label es configuracion entonces ..
        //     <NavLink
        //       to={to}
        //       className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
        //     >
        //       <div className="Linkicon">{icon}</div>
        //       {sidebarOpen && <span>{label}</span>}
        //       {/* sidebarOpen && significa en caso que el sidebar este abierto ,mostrar este label */}
        //     </NavLink>

        //

        //   )}
        // </div>
        //#region El que sirve
        // <div className="LinkContainer" key={label}>
        //   {label === "Configuración" && (
        // <UncontrolledDropdown
        //   direction="right"
        //   className="Links"
        //   style={{ height: "100%" }}
        // >
        //   <DropdownToggle
        //     nav
        //     style={{
        //       color: "inherit",
        //       display: "flex",
        //       alignItems: "center",
        //     }}
        //   >
        //     <div
        //       className="Linkicon"
        //       style={{
        //         //display: "flex",
        //         fontSize: "25px",
        //       }}
        //     >
        //       {icon}
        //     </div>

        //     {sidebarOpen && <span>{label}</span>}
        //   </DropdownToggle>
        //   <DropdownMenu>
        //     <DropdownItem>
        //       <NavLink to={to}>{label}</NavLink>
        //     </DropdownItem>
        //     <DropdownItem divider />
        //     <DropdownItem>Reset</DropdownItem>
        //   </DropdownMenu>
        // </UncontrolledDropdown>

        //   )}
        // </div>
        //#endregion
        <div className="LinkContainer" key={label}>
          {dropdown ? (
            <UncontrolledDropdown
              direction="right"
              className="Links"
              style={{ height: "100%" }}
            >
              <DropdownToggle
                nav
                style={{
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="Linkicon"
                  style={{
                    //display: "flex",
                    fontSize: "25px",
                  }}
                >
                  {icon}
                </div>

                {sidebarOpen && <span>{label}</span>}
              </DropdownToggle>
              <DropdownMenu>
                {/* <DropdownItem>
                  <NavLink to={to}>{label}</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem> */}
                {items.map(({ label, to }) => (
                  <DropdownItem
                    tag={NavLink}
                    to={to}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={label}
                  >
                    {label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          )}
        </div>
      ))}
      <Divider />
      {/* Boton de cambio de tema */}
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        {/* Si sidebarOpen es true se muestrael span*/}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </Container>
  );
}
//#region Data links
//Este es como un JSON que luego pasa los enlaces de los links en el menu
//Aca viene los llamados a los componentes
const linksArray = [
  {
    label: "Dashboard",
    icon: <AiOutlineLineChart />,
    to: "/dashboard",
  },

  {
    label: "Usuarios",
    icon: <FaRegUser />,
    to: "/usuarios",
  },
  {
    label: "Clientes",
    icon: <BsPeople />,
    to: "/clientes",
  },
  {
    label: "Proveedores",
    icon: <AiOutlineShop />,
    to: "/proveedores",
  },
  {
    label: "Inventario",
    icon: <AiOutlineApartment />,
    to: "/null",
    dropdown: true,
    items: [
      { label: "Productos", to: "/productos" },
      { label: "Categorias", to: "/categorias" },
    ],
  },
  {
    label: "Facturación",
    icon: <AiOutlineFileText />,
    to: "/facturacion",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics />,
    to: "/reportes",
  },
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/home",
  },
];
//Links de segundo menu
const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/null",
    dropdown: true,
    items: [
      { label: "Productos", to: "/productos" },
      { label: "Facturacion", to: "/facturacion" },
      { label: "Proveedores", to: "/proveedores" },
    ],
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
    //Una vez tenga el login listo , aca solo seria agregar /
  },
];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: #fff;
  //color: ${(props) => props.theme.text};

  background: #25476a;
  //background:${(props) => props.theme.bg}

  position: sticky;
  //padding-top: 20px;
  z-index: 1000 !important;
  .Sidebarbutton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    //background: ${(props) => props.theme.bgtgderecha};
    background: #25476a;

    box-shadow: 0 0 3px ${(props) => props.theme.bg3},
      0 0 5px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    padding-top: 40px;

    padding-bottom: ${v.lgSpacing};
    .imgcontent {
      display: flex;
      padding-bottom: 10px;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  // Aca se define la clase de LinkContainer
  .LinkContainer {
    margin: 8px 0;

    padding: 0 15%;
    :hover {
      //background: ${(props) => props.theme.bg3};
      background: #6994c2;
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      //color: ${(props) => props.theme.text};
      color: #fff;
      height: 50px;

      &:hover {
        color: #070708;
      }

      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        //esto de arriba es  para que se renderice bien en todos los navegadores
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
                themeUse === "light" ? v.lightcheckbox : v.checkbox};

              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
//aca es para cambiar los estilos del dropdown
const CustomDropdownItem = styled(DropdownItem)`
  &:hover {
    background: ${(props) => props.theme.bg3};
    color: ${(props) => props.theme.text};
  }

  &.active {
    // background: ${(props) => props.theme.bg4};
    // color: ${(props) => props.theme.text};
    background: #fff;
    color: ${(props) => props.theme.bg4};
  }
`;

const CustomDropdownMenu = styled(DropdownMenu)`
  z-index: 1000 !important;
  border-radius: 0px;
  padding: 2px 2px;
`;
//#endregion
