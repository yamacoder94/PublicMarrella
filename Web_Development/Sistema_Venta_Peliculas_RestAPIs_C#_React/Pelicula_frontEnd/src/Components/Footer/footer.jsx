import React from "react";
import Icon from "@mui/material/Icon";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Venta de Perico - copy right</p>
      <Icon color="primary" fontSize="large">
        email
      </Icon>
      &nbsp;&nbsp;
      <Icon color="primary" fontSize="large">
        facebook
      </Icon>
    </footer>
  );
};

export default Footer;
