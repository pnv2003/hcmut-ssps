import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function LoginRequiredAdmin() {
    console.log("You're admin no?");
    const { auth, setAuth, getUser } = useAuth();
    const location = useLocation();

    // const currentUser = JSON.parse(sessionStorage.getItem('user'));
    // const loggedInAsAdmin = useRef(false);
    
    // useEffect(() => {
    //     console.log("Check session effect!!!!!!!!!!!!!");
    //     if (currentUser?.isAdmin) {
    //         console.log("Yooooooo Assssminnnnn");
    //         setAuth({user: currentUser});
    //         loggedInAsAdmin.current = true;
    //     }
    // }, []);

    // if (auth?.user?.isAdmin || loggedInAsAdmin.current) {
    //     return <Outlet />
    // }

    const user = getUser();
    if (user?.isAdmin) {
        return <Outlet />
    }
    console.log("Gotta login as assmin bruh");
    return (
        <Navigate 
            to="/forbidden"
            state={{
                from: location
            }}
            replace
        />
    );
}