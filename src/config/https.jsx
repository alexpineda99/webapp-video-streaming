import axios from "axios";
import { loguser, logout } from "../State/actions-creators";
import store from "../State/store/store";

export const axiosInstanceRefreshToken = axios.create({
    baseURL: "http://localhost:3001/refreshtoken"
})

axiosInstanceRefreshToken.interceptors.request.use(
    
    function (config) {
        config.withCredentials = true;
        config.headers["auth"] = store.getState().userState.user
        return config
    },


    function (error) {
        console.log(error)
        return error
    }

)

axiosInstanceRefreshToken.interceptors.response.use(
    function (response) {
        let tokenRefreshed = response.data.accessToken;
        store.dispatch(loguser(tokenRefreshed))
        return response
    },
    function (error) {
        store.dispatch(logout())
        return error
    }
)