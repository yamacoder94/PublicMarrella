import styled from "styled-components";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
} from "reactstrap";
import TablaUsuario from "../components/TablaUsuario";
import React, { useState } from "react";
import {
  traeUsuarios,
  agregaUsuarios,
  editarUsuarios,
  eliminarUsuarios,
} from "../services/usuarioService";
import { useEffect } from "react";
import ModalUsuario from "../modals/ModalUsuario";

export function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [editar, setEditar] = useState(null);

  const mostrarUsuarios = async () => {
    const data = await traeUsuarios();

    if (data && Object.keys(data).length > 0) {
      setUsuarios(data.data);
    } else {
      console.log("Error en la lista");
    }
    // console.log(user);
    // setUsuarios(user);
    // // if (user.ok) {
    // //   console.log("entro al if");
    // //   setUsuarios(user);
    // // } else {
    // //   console.log("error en la lista");
    // // }
  };

  useEffect(() => {
    mostrarUsuarios();
  });

  const guardarUsuario = async (usuarios) => {
    console.log(usuarios);
    const response = await agregaUsuarios(usuarios);
    setMostrarModal(!mostrarModal);
    mostrarUsuarios();
  };

  const actulizaUsuario = async (usuarios) => {
    console.log(usuarios);
    const response = await editarUsuarios(usuarios);
    setMostrarModal(!mostrarModal);
    mostrarUsuarios();
  };

  const eliminaUsuario = async (id) => {
    var respuesta = window.confirm("desea eliminar el contacto");
    if (!respuesta) {
      return;
    }
    console.log(id);
    const response = await eliminarUsuarios(id);
    //setMostrarModal(!mostrarModal);
    mostrarUsuarios();
  };

  return (
    <Container style={{ marginTop: "5vh", height: "100vh" }}>
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
              <h5>Usuarios</h5>
            </CardHeader>
            <CardBody>
              <Button
                size="sm"
                color="primary"
                outline
                onClick={() => setMostrarModal(!mostrarModal)}
              >
                Nuevo Usuario
              </Button>
              <hr></hr>

              <TablaUsuario
                data={usuarios}
                setEditar={setEditar}
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                eliminaUsuario={eliminaUsuario}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalUsuario
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        guardarUsuario={guardarUsuario}
        editar={editar}
        setEditar={setEditar}
        actulizaUsuario={actulizaUsuario}
      />
    </Container>
  );
}
