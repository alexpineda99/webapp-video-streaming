import React, {useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile () {

    const header = useSelector((state) => state.userState.user);
    useEffect(() => {
        axios
        .get("http://localhost:3001/profile", {
            withCredentials: true,
          headers: { auth: header },
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err=> {
            console.log(err)
            // console.log(err.response.status)
        })
    }, []);

    return (

        <div>
            this is my profile
        </div>

    )

}

export default Profile;