import { useState } from "react";
import "../assets/Css/main.scss";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box sx={{height: "4rem", backgroundColor: "#141228", color: "#F4F4F4", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "auto"}}>

    <Box sx={{width: "100%", display: "contents"}}>
      Alexandro Pineda
    </Box>

    </Box>
  );
}

export default Footer;
