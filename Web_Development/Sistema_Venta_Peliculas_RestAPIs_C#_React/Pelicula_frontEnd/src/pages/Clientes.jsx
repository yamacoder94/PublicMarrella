import styled from "styled-components";
import { traeClientes } from "../services/clienteService";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
} from "reactstrap";
import TablaCliente from "../components/TablaCliente";

export function Clientes() {
  const [clientes, setclientes] = useState([]);

  const mostrarClientes = async () => {
    const data = await traeClientes();
    console.log(data);

    // if (data && Object.keys(data).length > 0) {
    //   setclientes(data.data);
    //   console.log(data.data);
    // } else {
    //   console.log("Error en la lista");
    // }

    if (data && data.status === 200) {
      setclientes(data.data);
      console.log(data.data);
    } else {
      console.log("Error en la lista");
    }
  };

  useEffect(() => {
    mostrarClientes();
  }, []);

  return (
    <Container
      style={{
        marginTop: "5vh",
        height: "100vh",
      }}
    >
      <Row>
        <Col sm="12">
          <Card
            style={{
              boxShadow: " 0 0 5px rgba(0, 0, 0, 0.2)",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <CardHeader>
              <h5>Clientes</h5>
            </CardHeader>
            <CardBody>
              <Button
                size="sm"
                color="primary"
                outline
                //onClick={() => setMostrarModal(!mostrarModal)}
              >
                Nuevo Cliente
              </Button>
              <hr></hr>
              <TablaCliente
                data={clientes}
                // setEditar={setEditar}
                // mostrarModal={mostrarModal}
                // setMostrarModal={setMostrarModal}
                // eliminaUsuario={eliminaUsuario}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <ModalUsuario
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        guardarUsuario={guardarUsuario}
        editar={editar}
        setEditar={setEditar}
        actulizaUsuario={actulizaUsuario}
      /> */}
    </Container>
  );
}
// const Container = styled.div`
//   height: 100vh;
// `;
