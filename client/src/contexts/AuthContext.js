import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider( { children } ) {
    const [auth, setAuth] = useState({});

    function login(userData) {
        setAuth({user: userData});
        sessionStorage.setItem('user', JSON.stringify(userData));
    }

    function logout() {
        setAuth({user: null});
        sessionStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}