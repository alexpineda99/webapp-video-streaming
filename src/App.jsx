import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/SignUp";
import SignIn from "./Components/SignIn";

// import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/signup",
    element: <Signup />,
  },,{
    path: "/signin",
    element: <SignIn/>,
  }
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
