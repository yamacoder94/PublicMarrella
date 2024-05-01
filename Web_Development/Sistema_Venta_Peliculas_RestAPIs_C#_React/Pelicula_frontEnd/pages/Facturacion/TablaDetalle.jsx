// import * as React from "react";
// import Box from "@mui/material/Box";

// //#region Librerias table
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// //#endregion

//#region Librerias enhaced table
import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useEffect } from "react";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
//#endregion

//#region funciones para enhaced table

//#region Datos tabla defecto
function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

//#endregion

//#region funciones para filtro de pagina asc dec
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

//#region getComparator
// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }
//#endregion

//#endregion

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

//#region stableSort
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

//#endregion

//#region Cabeceras
const headCells = [
  {
    id: "idProducto",
    numeric: true,
    disablePadding: true,
    label: "Codigo Producto",
  },
  {
    id: "descripcion",
    numeric: false,
    disablePadding: false,
    label: "Descripcion",
  },
  {
    id: "marca",
    numeric: false,
    disablePadding: false,
    label: "Marca",
  },
  {
    id: "precio",
    numeric: true,
    disablePadding: false,
    label: "Precio",
  },
  {
    id: "quantity",
    numeric: false,
    disablePadding: false,
    label: "Cantidad",
  },

  {
    id: "isChecked",
    numeric: false,
    disablePadding: false,
    label: "Descuento",
  },
  {
    id: "subTotal",
    numeric: true,
    disablePadding: false,
    label: "SubTotal",
  },
];

//#endregion

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  //#region Render del tableHead
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {/* Se mapean las cabeceras de las tablas ----------------------------------------------*/}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            align={headCell.numeric ? "left" : "right"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
            {/* 
                    Fin de mapeo  ----------------------------------------------*/}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
  //#endregion
}

//#region propiedades que recibe el toolbar del header
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
//#endregion

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  //#region botones del header (toolbar)
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Detalle Factura
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              console.log("Aca vendria la funcion del boton delete");
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
//#endregion

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
//#endregion

export default function TablaDetalle({ data2, onDeleteRow }) {
  //   const [rows, setRows] = React.useState([]);

  //   const handleDeleteRow = (id) => {
  //     console.log(id);
  //     onDeleteRow(id);
  //     const updatedRows = rows.filter((row) => row.id !== id);
  //     setRows(updatedRows);
  //   };

  //   return (
  //     <Box sx={{ height: 400, width: "100%" }}>
  //       <TableContainer component={Paper}>
  //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>Codigo</TableCell>
  //               <TableCell align="right">Descripcion</TableCell>
  //               <TableCell align="right">Marca</TableCell>
  //               <TableCell align="right">Precio</TableCell>
  //               {/* <TableCell align="right"></TableCell> */}
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {data2.map((row) => (
  //               <TableRow
  //                 key={row.idProducto}
  //                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //               >
  //                 <TableCell component="th" scope="row">
  //                   {row.idProducto}
  //                 </TableCell>
  //                 <TableCell align="right">{row.descripcion}</TableCell>
  //                 <TableCell align="right">{row.marca}</TableCell>
  //                 <TableCell align="right">{row.precio}</TableCell>
  //                 {/* <TableCell align="right">{row.protein}</TableCell> */}
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </Box>
  //   );

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("descripcion");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    console.log("estamos en el metodo del boton de sort");
    console.log(property); //esto trae descripcion
    console.log(orderBy); //esto trae idproducto
    console.log(order); //esto trae asc

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    console.log(isAsc); //y esto trae falso
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data2.map((n) => n.idProducto);
      console.log(newSelected);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    console.log("Y este boton?");
    console.log(data2);
    console.log(id);
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log("estoy en el handle Change");
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("estoy en el handleChangeRowsPerPage");
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  //es el que proboca ese salto al final del pagination
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  //#region visibleRows
  //   const visibleRows = React.useMemo(
  //     () =>
  //       stableSort(rows, getComparator(order, orderBy)).slice(
  //         page * rowsPerPage,
  //         page * rowsPerPage + rowsPerPage
  //       ),
  //     [order, orderBy, page, rowsPerPage]
  //   );
  //#endregion

  return (
    //#region Inicio de Tabla
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data2.length} //si lo cambio no deselecciona todas
            />
            <TableBody>
              {data2.map((row, index) => {
                const isItemSelected = isSelected(row.idProducto);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.idProducto)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.idProducto}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.idProducto}
                    </TableCell>
                    <TableCell align="right">{row.descripcion}</TableCell>
                    <TableCell align="right">{row.marca}</TableCell>
                    <TableCell align="right">{row.precio}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="center">
                      {row.isChecked ? (
                        <AiFillCheckCircle style={{ color: "green" }} />
                      ) : (
                        <AiOutlineCloseCircle style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="right">{row.subTotal}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data2.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
    //#endregion
  );
}
