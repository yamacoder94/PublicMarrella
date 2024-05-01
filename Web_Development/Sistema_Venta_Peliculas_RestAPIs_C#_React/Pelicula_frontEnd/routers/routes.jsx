import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Usuarios } from "../pages/Usuarios";
import { Productos } from "../pages/Productos/Productos";
import { Reportes } from "../pages/Reportes/Reportes";
import { Facturacion } from "../pages/Facturacion/Facturacion/";
import { Proveedores } from "../pages/Proveedores";
import { Categorias } from "../pages/Categorias/Categorias";
import { Dashboard } from "../pages/Dashboard";
import { Clientes } from "../pages/Clientes";

import { UsuarioLogeado01 } from "../pages/UsuarioLogeado/UsuarioLogeado01";

export function MyRoutes() {
  return (
    <Routes>
      {" "}
      {/* Nested routes for the main application */}
      <Route path="/home" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/facturacion" element={<Facturacion />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/usuarioLogeado01" element={<UsuarioLogeado01 />} />
    </Routes>
  );
}
