import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile () {
    
    const user = useSelector(state=> state.userState.user)

    console.log(user)

    axios.get("http://localhost:3001/profile", {
        headers: {"auth": user},
    })
    .then(res => {
        console.log(res)
    })
    .catch(err=> {
        console.log(err.response.data)
    })


    return (

        <div>
            this is my profile
        </div>

    )

}

export default Profile;