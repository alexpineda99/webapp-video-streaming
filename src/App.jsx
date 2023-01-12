import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/signin",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <div id="outer-container">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <RouterProvider router={router} />
        </main>
      </div>
    </>
  );
}

export default App;
