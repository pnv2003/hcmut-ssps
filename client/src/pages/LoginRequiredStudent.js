import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function LoginRequiredStudent() {
    console.log('Studying or not?');
    const { auth, setAuth, getUser } = useAuth();
    const location = useLocation();

    // const currentUser = JSON.parse(sessionStorage.getItem('user'));
    // const loggedInAsStudent = useRef(false);
    
    // useEffect(() => {
    //     console.log("Check session effect!!!!!!!!!!!!!");
    //     if (currentUser?.isAdmin) {
    //         console.log("Yo, now go studying");
    //         setAuth({user: currentUser});
    //         loggedInAsStudent.current = true;
    //     }
    // }, []);

    // if (!auth?.user?.isAdmin || loggedInAsStudent.current) {
    //     return <Outlet />
    // }

    const user = getUser();
    if (!user?.isAdmin) {
        return <Outlet />
    }
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