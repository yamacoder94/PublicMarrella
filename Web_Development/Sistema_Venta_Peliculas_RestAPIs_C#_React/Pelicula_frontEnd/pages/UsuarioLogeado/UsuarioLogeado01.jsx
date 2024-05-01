import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { TargetaUsuario } from "./TargetaUsuario";
import { DetalleUsuario } from "./DetalleUsuario";

export function UsuarioLogeado01() {
  return (
    <Container>
      <div>
        <h1
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Gestion de Usuario
        </h1>

        <div style={{ marginRight: "20px", marginLeft: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TargetaUsuario />
            </Grid>
            <Grid item xs={8}>
              <DetalleUsuario />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
