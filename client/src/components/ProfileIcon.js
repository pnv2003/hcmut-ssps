import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./../styles/student-profile-icon.css";
import { useAuth } from "../contexts/AuthContext";

export default function ProfileIcon() {
    const { getUser } = useAuth();

    return (
        <div className="student-profile-icon">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            <p className="profile-name">{getUser().firstName}</p>
        </div>
    );
}