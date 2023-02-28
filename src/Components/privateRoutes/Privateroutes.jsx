import { Navigate, Outlet } from "react-router-dom";
// user=false;
export function PrivateRoute ({user}) {


    return user ? <Outlet/> : <Navigate to={"/signin"} replace />

}

export function NotAllowedForUser ({user}) {


    return !user ? <Outlet/> : <Navigate to={"/profile"} replace />

}

