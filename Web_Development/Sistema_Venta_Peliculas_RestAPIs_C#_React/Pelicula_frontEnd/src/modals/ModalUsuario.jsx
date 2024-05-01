import React, { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
} from "reactstrap";

const modeloUsuario = {
  idUsuario: 0,
  nombre: "",
  correo: "",
  numeroTelefonico: "",
  idRol: "",
  clave: "",
  esActivo: true,
};

const ModalUsuario = ({
  mostrarModal,
  setMostrarModal,
  guardarUsuario,
  editar,
  setEditar,
  actulizaUsuario,
}) => {
  const [contacto, setContacto] = useState(modeloUsuario);

  const actualizarDato = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    // Una vez que recibe los datos , se los asigna a setContacto
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
      //   de esta forma , agarra todo lo que ya estuviera en contacto y agrega lo q viene en e
    });
  };

  const enviarDatos = () => {
    console.log("LLegamos a enviarDatos");
    if (contacto.idUsuario == 0) {
      console.log("entramos en el if ==0");
      console.log(contacto);
      const modifiedObject = Object.fromEntries(
        Object.entries(contacto).filter(([key, value]) => key !== "idUsuario")
      );
      console.log(modifiedObject);
      guardarUsuario(modifiedObject);
    } else {
      console.log("Llegamos al else para editar usuario");
      actulizaUsuario(contacto);
    }
    setContacto(modeloUsuario);
    //con essto la informacion del modal se eliminar luego de que se edita un contacto
  };

  useEffect(() => {
    //si trae la info del usuario para poder editar
    if (editar != null) {
      setContacto(editar);
    } else {
      setContacto(modeloUsuario);
    }
  }, [editar]);

  const cerrarModal = () => {
    setMostrarModal(!mostrarModal);
    setEditar(null);
  };

  return (
    <Modal isOpen={mostrarModal}>
      <ModalHeader>
        {contacto.idUsuario == 0 ? "Nuevo Contacto" : "Editar Contacto"}
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              name="nombre"
              onChange={(e) => actualizarDato(e)}
              value={contacto.nombre}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Correo</Label>
            <Input
              name="correo"
              onChange={(e) => actualizarDato(e)}
              value={contacto.correo}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Telefono</Label>
            <Input
              name="numeroTelefonico"
              onChange={(e) => actualizarDato(e)}
              value={contacto.numeroTelefonico}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>IdRol</Label>
            <Input
              name="idRol"
              onChange={(e) => actualizarDato(e)}
              value={contacto.idRol}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Clave</Label>
            <Input
              name="clave"
              onChange={(e) => actualizarDato(e)}
              value={contacto.clave}
            ></Input>
          </FormGroup>
          {/* <FormGroup>
            <Label>EsActivo</Label>
            <Input
              name="esActivo"
              onChange={(e) => actualizarDato(e)}
              value={contacto.esActivo}
            ></Input>
          </FormGroup> */}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          size="sm"
          className="me-2"
          outline
          onClick={enviarDatos}
        >
          Guardar
        </Button>
        <Button
          color="danger"
          size="sm"
          className="me-2"
          outline
          onClick={cerrarModal}
        >
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalUsuario;
