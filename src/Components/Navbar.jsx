import { useState } from "react";
import "../assets/Css/main.scss";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box sx={{ backgroundColor: "#513532", marginTop: "auto" }}>
      <div>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a>
      </div>
    </Box>
  );
}

export default Navbar;
