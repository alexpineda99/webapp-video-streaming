import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Link to={"/"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#141228",
        }}
      >
        <Typography variant="h1" style={{ color: "white" }}>
          404
        </Typography>
        <Typography variant="h1" style={{ color: "white" }}>
          Page not found
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          I think you just went to a page non-existing page.
        </Typography>
        <Typography variant="h5" style={{ color: "white" }}>
          Click anywhere on the screen if you want to search for something.
        </Typography>
      </Box>
    </Link>
  );
}
