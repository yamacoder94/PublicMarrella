import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "reactstrap";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

const TablaUsuario = ({
  data,
  setEditar,
  mostrarModal,
  setMostrarModal,
  eliminaUsuario,
}) => {
  const enviarDatos = (usuario) => {
    setEditar(usuario);
    setMostrarModal(!mostrarModal);
  };

  //#region Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Number of items per page

  // Get current items
  const lastIndex = currentPage * recordsPerPage;
  //esto nos lleva al ultimo item
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);

  // Change page
  //const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  //#endregion

  // useEffect(() => {
  //   console.log("hace esto");

  // }, [mostrarModal]);

  return (
    <>
      <Table striped responsive>
        <thead>
          <tr>
            <th className="text-center">Nombre</th>
            <th className="text-center">Correo</th>
            <th className="text-center">NumeroTelefonico</th>
            <th className="text-center">Rol</th>
            <th className="text-center">Activo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length < 1 ? (
            // Si es menor a 1
            <tr>
              <td colSpan="4">Sin registros</td>
            </tr>
          ) : (
            //Caso contrario
            records.map((item) => (
              <tr key={item.idUsuario}>
                <td className="text-center">{item.nombre}</td>
                <td className="text-center">{item.correo}</td>
                <td className="text-center">{item.numeroTelefonico}</td>
                <td className="text-center">{item.idRol}</td>
                {/* <td>{item.esActivo.toString()}</td> */}
                <td className="text-center">
                  {item.esActivo ? (
                    <AiFillCheckCircle style={{ color: "green" }} />
                  ) : (
                    <AiOutlineCloseCircle style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <Button
                    color="warning"
                    size="sm"
                    className="me-2"
                    outline
                    onClick={() => {
                      enviarDatos(item);
                    }}
                  >
                    Editar
                  </Button>

                  <Button
                    color="danger"
                    size="sm"
                    className="me-2"
                    outline
                    onClick={() => {
                      console.log(item.idUsuario);
                      eliminaUsuario(item.idUsuario);
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      {/* Pagination */}
      {/* <Pagination className="justify-content-center">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, i) => (
            <PaginationItem key={i} active={i + 1 === currentPage}>
              <PaginationLink onClick={() => paginate(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          <PaginationLink next onClick={() => paginate(currentPage + 1)} />
        </PaginationItem>
      </Pagination> */}
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "action" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default TablaUsuario;
