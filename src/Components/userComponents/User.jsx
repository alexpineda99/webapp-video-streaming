import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function User() {
  let { username } = useParams();
  console.log(username)

  return <div>User</div>;
}

export default User;
