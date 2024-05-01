import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { traeVentas } from "../../services/ventaService";
import { useState } from "react";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { height } from "@mui/system";

export default function TablaVenta() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ventas, setVentas] = useState([]);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const mostrarVentas = async () => {
    const data = await traeVentas();

    if (data && Object.keys(data).length > 0) {
      setVentas(data.data);
    } else {
      console.log("Error en la lista");
    }
  };

  useEffect(() => {
    mostrarVentas();
  }, []);

  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4 style={{ marginRight: "10px" }}>Facturacion por Fecha</h4>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Fecha de Inicio"
                value={startDate}
                onChange={handleStartDateChange}
              />
              &nbsp;&nbsp;
              <DatePicker
                label="Fecha Final"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </LocalizationProvider>
          </div>
        </CardContent>
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Venta</TableCell>
              <TableCell align="right">Fecha Registro</TableCell>
              <TableCell align="right">Id Usuario</TableCell>
              <TableCell align="right">Id Cliente</TableCell>
              <TableCell align="right">SubTotal</TableCell>
              <TableCell align="right">Descuento</TableCell>
              <TableCell align="right">Impuesto</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ventas
              .filter((venta) => {
                const fechaRegistro = dayjs(venta.fechaRegistro);
                return (
                  (!startDate ||
                    fechaRegistro.isSame(startDate, "day") ||
                    fechaRegistro.isAfter(startDate, "day")) &&
                  (!endDate ||
                    fechaRegistro.isSame(endDate, "day") ||
                    fechaRegistro.isBefore(endDate, "day"))
                );
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.idVenta}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.idVenta}
                  </TableCell>
                  <TableCell align="right">{row.fechaRegistro}</TableCell>
                  <TableCell align="right">{row.idUsuario}</TableCell>
                  <TableCell align="right">{row.idCliente}</TableCell>
                  <TableCell align="right">{row.subTotal}</TableCell>
                  <TableCell align="right">{row.descuento}</TableCell>
                  <TableCell align="right">{row.impuestos}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={ventas.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
