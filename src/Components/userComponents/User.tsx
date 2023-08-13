import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface User {
  username?: String;
  avatar?: String;
  followers?: Number;
  following?: Number;
}

function User() {
  let { username } = useParams();
  let [_username, setUsername] = useState("");
  let [following, setFollowing] = useState(false);
  let [user, setUser] = useState<Array<User>>([]);
  const header = useSelector((state: any) => state.userState.user);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/${username}`, {
        headers: { auth: header },
      })
      .then((res) => {
        if (res.data.sameUser) {
          return navigate("/profile");
        }
        setUser(res.data.infoUser);
        let checkFollowing = res.data.infoUser.followers.filter(
          (user) => user.username === res.data.currentUser
        );
        if (checkFollowing.length > 0) {
          setFollowing(true);
        }
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log("Error getting user: " + err);
        // navigate("/usernotfound");
      });
  }, [following]);

  const followUser = () => {
    axios
      .get(`http://localhost:3001/follow/${username}`, {
        headers: { auth: header },
      })
      .then((res) => {
        setFollowing(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unfollowUser = () => {
    console.log("unfollow");
    axios
      .get(`http://localhost:3001/unfollow/${username}`, {
        headers: { auth: header },
      })
      .then((res) => {
        setFollowing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <img src={user.avatar} className="user-avatar" />
          <p>@{user.username} </p>
          <Box
            mt={5}
            mb={5}
            display={"flex"}
            width={"50%"}
            justifyContent={"space-evenly"}
          >
            <Box
              display={"flex"}
              width={"10%"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <span>Following</span>
              <span>{user.following?.length}</span>
            </Box>
            <Box
              display={"flex"}
              width={"10%"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <span>Followers</span>
              <span>{user.followers?.length}</span>
            </Box>
          </Box>
          <Box mb={5}>
            {" "}
            {following ? (
              <Button
                variant="contained"
                size="small"
                onClick={() => unfollowUser()}
              >
                {" "}
                Unfollow{" "}
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={() => followUser()}
              >
                {" "}
                Follow{" "}
              </Button>
            )}{" "}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default User;
