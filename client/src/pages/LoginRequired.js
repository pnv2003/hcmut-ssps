import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function LoginRequired() {
    const { auth, setAuth } = useAuth();
    const location = useLocation();

    const currentUser = sessionStorage.getItem('user');
    const loggedIn = useRef(false);
    
    useEffect(() => {
        if (currentUser) {
            setAuth({user: currentUser});
            loggedIn.current = true;
        }
    }, []);

    if (auth?.user || loggedIn) {
        return <Outlet />
    }
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