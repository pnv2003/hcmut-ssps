import React from "react";
import LogoSSPS from "./LogoSSPS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import "./../styles/admin-header.css";
import Language from "./Language";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
    const { getUser, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <header className="admin-header">
            <LogoSSPS />

            <div className="action">
                <Language lang="vie" />
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faBell} /> 
                <FontAwesomeIcon icon={faUser} />
                <p>{getUser().firstName}</p>
                <a href="#" onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} color="#0D99FF"/></a>
            </div>   
        </header>
    );
}