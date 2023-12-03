import React from "react";
import "./../styles/button.css";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
    const navigate = useNavigate();

    function handleClick() {
        if (props.action) {
            props.action();
        }

        if (props.link !== '#') {
            navigate(
                props.link,
                { replace: (props.replace === true) } 
            );
        }
    }

    return (
        <a href="#" onClick={handleClick} className="navbutton">
            {props.text}
        </a>
    );
}