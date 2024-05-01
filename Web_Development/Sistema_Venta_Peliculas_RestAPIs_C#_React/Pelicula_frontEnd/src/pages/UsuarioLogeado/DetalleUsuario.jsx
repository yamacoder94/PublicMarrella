"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" },
];

export function DetalleUsuario() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader
          subheader="Edita tu información de usuario"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Nombre</InputLabel>
                <OutlinedInput
                  defaultValue="Sofia"
                  label="First name"
                  name="firstName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Apellido</InputLabel>
                <OutlinedInput
                  defaultValue="Rivers"
                  label="Last name"
                  name="lastName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Correo Electronico</InputLabel>
                <OutlinedInput
                  defaultValue="sofia@devias.io"
                  label="Email address"
                  name="email"
                  type="email"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Telefono</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Contraseña</InputLabel>
                <OutlinedInput
                  label="contraseña"
                  name="contraseña"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Confirmar </InputLabel>
                <OutlinedInput
                  label="contraseña"
                  name="contraseña"
                  type="password"
                />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Guardar</Button>
        </CardActions>
      </Card>
    </form>
  );
}
