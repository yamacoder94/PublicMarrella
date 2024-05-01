import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const TablaCliente = ({ data }) => {
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
  return (
    <div style={{ zIndex: -1 }}>
      <Table striped responsive>
        <thead>
          <tr>
            <th className="text-center">Nombre</th>
            <th className="text-center">Descuento</th>

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
              <tr key={item.idCliente}>
                <td className="text-center">{item.nombre}</td>
                <td className="text-center">{item.descuento}</td>

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
                      //enviarDatos(item);
                      console.log("Editar Cliente");
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
                      console.log("Eliminar Cliente");
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
    </div>
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

export default TablaCliente;
