import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

function NavBar01(args) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Nav
        horizontal="end"
        style={{ background: "#DDD", height: "63px", paddingTop: "5px" }}
      >
        <Stack direction="row" spacing={0.5} style={{ marginRight: "20px" }}>
          <NavItem style={{ paddingTop: "1px" }}>
            <Tooltip title="Notificaciones">
              <div>
                <IoIosNotificationsOutline
                  size={"2em"}
                  style={{ marginTop: "1.5vh", color: "rgb(51, 51, 51)" }}
                />
                <Badge
                  badgeContent={4}
                  color="success"
                  style={{
                    //position: "absolute",
                    bottom: "25%",
                    right: "110%",
                    //transform: "translateX(-50%)",
                  }}
                ></Badge>
              </div>
            </Tooltip>
          </NavItem>

          <NavItem>
            <NavLink>
              {/* <CiUser
                aria-describedby={id}
                size={"2em"}
                style={{ color: "rgb(51, 51, 51)" }}
                onClick={handleClick}
              /> */}
              <Avatar
                aria-describedby={id}
                onClick={handleClick}
                src="../src/assets/pexels-olly-733872.jpg"
                sx={{ cursor: "pointer" }}
              />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ p: "16px 20px " }}>
                  <Typography variant="subtitle1">
                    Alejandra Argüello
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    alejandra.arguello@disef.com
                  </Typography>
                </Box>
                <hr />

                <MenuList
                  disablePadding
                  sx={{ p: "8px", "& .MuiMenuItem-root": { borderRadius: 1 } }}
                >
                  <MenuItem
                    component={Link}
                    to="/usuarioLogeado01"
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <FaUserCircle size={"1.5em"} />
                    </ListItemIcon>
                    Perfil
                  </MenuItem>

                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    <ListItemIcon>
                      <IoIosLogOut size={"1.5em"} />
                    </ListItemIcon>
                    Cerrar Sesion
                  </MenuItem>
                </MenuList>
              </Popover>
            </NavLink>
          </NavItem>
        </Stack>
      </Nav>
    </div>
  );
}

export default NavBar01;
