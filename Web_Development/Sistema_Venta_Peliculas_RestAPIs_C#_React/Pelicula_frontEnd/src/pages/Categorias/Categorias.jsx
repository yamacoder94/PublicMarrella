import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Categoria } from "./Categoria";

export function Categorias() {
  return (
    <Container>
      <div>
        <h1 style={{ marginLeft: "30px" }}>Categorias</h1>
      </div>
      <Button
        style={{ marginLeft: "30px", marginBottom: "20px" }}
        size="sm"
        color="warning"
        onClick={() => setMostrarModal(!mostrarModal)}
      >
        Nueva Categoria
      </Button>
      <Categoria />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;

const Button = styled.button`
  background-color: #e96e38;
  color: white;
  border: 1px solid #e96e38;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e96e38;
  }
`;
