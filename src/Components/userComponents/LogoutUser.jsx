import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout} from "../../State/actions-creators";

function LogoutUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/logout", { withCredentials: true })
      .then((res) => {
        dispatch(logout())
        navigate("/", { replace: true });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
  });
}

export default LogoutUser;
