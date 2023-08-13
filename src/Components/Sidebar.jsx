import React from "react";
import { slide as Menu } from "react-burger-menu";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default (props) => {
  const user = useSelector((state) => state.userState.user);

  let isMenuOpen = (state) => {
    // return state.isOpen;
  };

  return (
    // Pass on our props
    <Menu {...props} onStateChange={isMenuOpen}>
      {!user ? (
        <Box>
          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              <Link to={"/"}> Home </Link>
            </span>
          </Box>

          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              {" "}
              <Link to={"/signin"}> Sign In </Link>{" "}
            </span>
          </Box>

          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              {" "}
              <Link to={"/signup"}> Sign Up </Link>{" "}
            </span>
          </Box>

          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav"> Contact us </span>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              <Link to={"/"}> Home </Link>
            </span>
          </Box>
          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              {" "}
              <Link to={"/profile"}> Profile </Link>{" "}
            </span>
          </Box>
          <Box sx={{ marginTop: "10%", color: "#fff" }}>
            <span className="text-nav">
              {" "}
              <Link to={"/logout"}> Logout </Link>{" "}
            </span>
          </Box>
        </Box>
      )}
    </Menu>
  );
};
