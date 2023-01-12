import { useState } from "react";
import "../assets/Css/main.scss";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  const [count, setCount] = useState(0);

  return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* <Navbar /> */}
          <Box className="parallax">
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "4rem",
                color: "#F4F4F4",
                zIndex: 10,
              }}
            >
              <Box sx={{background: "#141228", width: "100%", display: "flex", justifyContent: "center"}}> SmashStream </Box>
              <Box sx={{ fontSize: "1.2rem", background: "#141228", width: "100%", display: "flex", justifyContent: "center"}}>
                {" "}
                Show up and share your skils
              </Box>
            </Box>
          </Box>
          {/* <Footer /> */}
        </Box>
  );
}

export default Home;
