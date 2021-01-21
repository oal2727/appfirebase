import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import {Link} from "react-router-dom"
const NavbarComponent = ({ children }) => {
  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
         <Link as={Typography} style={{textDecoration:"none",color:"white"}} to="/">App Firebase</Link> 
        {children}
      </Toolbar>
    </AppBar>
  );
};
export default NavbarComponent;
