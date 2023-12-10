import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function LoginRequired() {
    console.log("Login required!");
    const { auth, setAuth, getUser } = useAuth();
    const location = useLocation();

    // const currentUser = JSON.parse(sessionStorage.getItem('user'));
    // const loggedIn = useRef(false);

    // console.log(currentUser.isAdmin + " <- thats me!");
    
    // useEffect(() => {
    //     console.log("Check session effect tho");
    //     if (currentUser) {
    //         console.log("Yooooooo br");
    //         setAuth({user: currentUser});
    //         loggedIn.current = true;
    //     }
    // }, []);

    const user = getUser();

    // if (auth?.user || loggedIn.current) {
    //     return <Outlet />
    // }

    if (user) {
        return <Outlet />
    }

    console.log("Go back and login bruh");
    return (
        <Navigate 
            to="/login"
            state={{
                from: location
            }}
            replace
        />
    )
}