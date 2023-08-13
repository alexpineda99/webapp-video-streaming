import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchIcon from '@mui/icons-material/Search';
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Home() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main>
      <Box sx={{ height: "4rem", background: "#232651" }}>
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "100%",
            fontWeight: 100,
            fontSize: "1.5em",
            letterSpacing: 4,
          }}
          mr={2}
        >
          <span>Smashstream</span>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", flexDirection: "column" }}>
        <Box>
          <Input
            id="input-with-icon-adornment"
            startAdornment={<SearchIcon />}
          />
        </Box>
      </Box>
      <Footer />
    </main>
  );
}

export default Home;
