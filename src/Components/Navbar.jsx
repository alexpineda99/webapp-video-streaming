import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box sx={{ backgroundColor: "#513532", marginTop: "auto" }}>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
        <Link className="menu-item--small" to="">
          Settings
        </Link>
    </Box>
  );
}

export default Navbar;
