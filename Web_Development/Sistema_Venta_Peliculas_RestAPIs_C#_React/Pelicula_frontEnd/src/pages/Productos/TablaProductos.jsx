import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { MagnifyingGlass as MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";
import { Button } from "reactstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};

function valuetext(value) {
  return `${value}°C`;
}

export function TablaProductos({ productos, setProductos }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [imagenModal, setImagenModal] = useState("");
  const [value, setValue] = React.useState([0, 500]);
  //const [filteredProductos,setFilteredProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Metodo que se encarga de litrar productos
  //   const handleStockRangeChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  // Metodo que se encarga de filtrar productos
  const filterProductos = () => {
    const filtered = productos.filter((producto) => {
      const stock = producto.stock;
      return (
        (producto.descripcion
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          producto.marca.toLowerCase().includes(searchQuery.toLowerCase())) &&
        stock >= value[0] &&
        stock <= value[1]
      );
    });
    setFilteredProductos(filtered);
  };

  // useEffect to update filteredProductos whenever productos or searchQuery or value changes
  useEffect(() => {
    filterProductos();
  }, [productos, searchQuery, value]);

  return (
    <Container>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src={imagenModal}
              style={{ width: "400px", height: "400px" }}
            ></img>
          </Box>
        </Modal>

        <Card sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <OutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Buscar producto"
                startAdornment={
                  <InputAdornment position="start">
                    <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
                  </InputAdornment>
                }
                sx={{ maxWidth: "500px" }}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Grid>

            <Grid item xs={8} alignItems="center" container spacing={3}>
              <Grid item align="right" xs={4}>
                <h6 style={{ marginTop: "10px" }}>Buscar por stock :</h6>
              </Grid>
              <Grid align="left" item xs={8}>
                <Box style={{ marginTop: "5px" }}>
                  <Slider
                    style={{ maxWidth: "300px" }}
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    //onChange={handleStockRangeChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={501}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>

        <TableContainer
          component={Paper}
          style={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Codigo</TableCell>
                <TableCell align="center">Imagen</TableCell>
                <TableCell align="center">Descripción</TableCell>
                <TableCell align="right">Marca</TableCell>
                <TableCell align="right">Categoria</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Precio Unitario</TableCell>

                <TableCell align="right">Fecha Registro</TableCell>
                <TableCell align="center">Activo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {productos
              .filter((producto) => {
                const stock = producto.stock;

                return (
                  (producto.descripcion
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    producto.marca
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())) &&
                  stock >= value[0] &&
                  stock <= value[1]
                );
              }) */}
              {filteredProductos
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.idProducto}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="right">
                      {row.idProducto}
                    </TableCell>
                    <TableCell align="center">
                      {row.imagen === null ? (
                        "Sin imagen"
                      ) : (
                        <div align="center">
                          <Avatar
                            onClick={() => {
                              setImagenModal(row.imagen);
                              handleOpen();
                            }}
                            src={row.imagen}
                          />
                        </div>
                      )}
                    </TableCell>

                    <TableCell align="center">{row.descripcion}</TableCell>
                    <TableCell align="right">{row.marca}</TableCell>
                    <TableCell align="right">{row.idCategoria}</TableCell>
                    <TableCell align="right">{row.stock}</TableCell>
                    <TableCell align="right">{row.precio}</TableCell>

                    <TableCell align="right">{row.fechaRegistro}</TableCell>
                    <TableCell align="center">
                      {row.esActivo ? (
                        <AiFillCheckCircle style={{ color: "green" }} />
                      ) : (
                        <AiOutlineCloseCircle style={{ color: "red" }} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredProductos.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;

//export default TablaProductos;
