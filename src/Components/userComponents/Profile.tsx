import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import Button from "@mui/material/Button";

interface Userprofile {
  username: String;
  avatar: String;
  followers: Number;
  following: Number;
}

function Profile() {
  let [user, setUser] = useState<Array<Userprofile>>([]);
  let [userProfile, setUserprofile] = useState("");
  const header = useSelector((state: any) => state.userState.user);
  useEffect(() => {
    axios
      .get("http://localhost:3001/profile", {
        withCredentials: true,
        headers: { auth: header },
      })
      .then((res) => {
        console.log(res.data);
        setUserprofile(res.data.infoUser);
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.status)
      });
  }, []);

  return (
    <>
      <Sidebar />
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ fontSize: "1.1rem", background: "#232651" }}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"90%"}
          minHeight={"100vh"}
          sx={{ background: "#141228" }}
        >
          <img src={userProfile.avatar} className="user-avatar" />
          <p>@{userProfile.username} </p>
          <span>Following</span>
          <span>{userProfile.following?.length}</span>
          <span>Followers</span>
          <span>{userProfile.followers?.length}</span>
          <Box
            mt={5}
            mb={5}
            display={"flex"}
            width={"50%"}
            justifyContent={"space-evenly"}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
