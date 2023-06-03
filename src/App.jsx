import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import User from "./Components/userComponents/User";
import {
  PrivateRoute,
  NotAllowedForUser,
} from "./Components/privateRoutes/Privateroutes";
import Profile from "./Components/userComponents/Profile";
import NotFound from "./Components/Main Pages/NotFound";
import { useSelector } from "react-redux";

function App() {
  const userToken = useSelector((state) => state.userState.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="*" element={<NotFound />} />
        {/* Routes not allowed for user */}
        <Route element={<NotAllowedForUser user={userToken} />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        {/* Private routes */}
        <Route element={<PrivateRoute user={userToken} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
