import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/SignIn";
import Sidebar from "./Components/Sidebar";

// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/signin",
    element: <Signin />,
  },
]);

function App() {
  return (
    <>
      <div>
          <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
