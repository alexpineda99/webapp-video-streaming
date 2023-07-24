import {LOGUSER, LOGUSER_KEEPSESSION, LOGOUT} from "../types";

export const loguser = (data) =>({type: LOGUSER, payload: data});
export const logout = () => ({type: LOGOUT})
export const loguser_keepsession = (data) =>({type: LOGUSER_KEEPSESSION, payload: data});