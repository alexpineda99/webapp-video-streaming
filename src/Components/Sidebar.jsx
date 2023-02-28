import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default (props) => {

  let isMenuOpen = (state) => {
    // return state.isOpen;
  };

  return (
    // Pass on our props
    <Menu {...props} onStateChange={isMenuOpen}>
      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"><Link to={"/"}> Home </Link></span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> <Link to={"/signin"}> Sign In </Link> </span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> <Link to={"/signup"}> Sign Up </Link> </span>
      </Box>

      <Box sx={{marginTop: "10%", color: "#fff"}}>
        <span className="text-nav"> Contact us </span>
      </Box>
    </Menu>
  );
};
