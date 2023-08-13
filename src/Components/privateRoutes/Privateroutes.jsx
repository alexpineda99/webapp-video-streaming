import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute ({user}) {

    return user ? <Outlet/> : <Navigate to={"/"} replace />

}

export function NotAllowedForUser ({user}) {

    return !user ? <Outlet/> : <Navigate to={"/profile"} replace />

}

