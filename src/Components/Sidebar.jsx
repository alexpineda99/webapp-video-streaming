import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import Box from "@mui/material/Box";

export default (props) => {

  let isMenuOpen = (state) => {
    // return state.isOpen;
    console.log(state);
  };

  return (
    // Pass on our props
    <Menu {...props} onStateChange={isMenuOpen}>
      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav">Home</span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> Boxbout </span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> Services </span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> Contact us </span>
      </Box>
    </Menu>
  );
};
