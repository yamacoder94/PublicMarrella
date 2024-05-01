import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const user = {
  name: "Alejandra Argüello",
  avatar: "../src/assets/pexels-olly-733872.jpg",
  jobTitle: "Propietario",
  country: "Nicaragua",
  city: "Managua",
  timezone: "GTM-7",
};

export function TargetaUsuario() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <div>
            {/* <Avatar src={user.avatar} sx={{ height: "80px", width: "80px" }} /> */}
            <Avatar src={user.avatar} sx={{ height: "80px", width: "80px" }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: "center" }}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.jobTitle}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <hr />
      <CardActions>
        <Button fullWidth variant="text">
          Subir foto
        </Button>
      </CardActions>
    </Card>
  );
}
