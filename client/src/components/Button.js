import React from "react";
import "./../styles/button.css";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(
            props.link,
            { replace: (props.replace === true) } 
        );
    }

    return (
        <div onClick={handleClick} className="navbutton">
            {props.text}
        </div>
    );
}