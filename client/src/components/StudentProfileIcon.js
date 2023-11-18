import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./../styles/student-profile-icon.css";

export default function StudentProfileIcon() {
    return (
        <div className="student-profile-icon">
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
            <p className="profile-name">Son</p>
        </div>
    );
}