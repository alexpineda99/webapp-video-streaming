import { useState } from "react";
import "../assets/Css/main.scss";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {useSelector, useDispatch} from "react-redux";
import {sumar} from "../State/reducers/actions-creators";

function Home() {
  const [count, setCount] = useState(0);

  const state = useSelector((state)=> console.log(state));
  const dispatch = useDispatch();

  return (
    <div id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <main id="page-wrap">
        <Box className="parallax">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontSize: "4rem",
              color: "#F4F4F4",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                background: "#141228",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              SmashStream{" "}
            </Box>
            <Box
              sx={{
                fontSize: "1.2rem",
                background: "#141228",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <button onClick={()=> dispatch(sumar())}> incrementa redux</button> */}
              {" "}
              Show up and share your skils
            </Box>
          </Box>
          <Footer />
        </Box>
      </main>
    </div>
  );
}

export default Home;
