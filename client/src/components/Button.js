import React from "react";
import "./../styles/button.css";
import { NavLink } from "react-router-dom";

export default function Button(props) {

    const buttonStyle = (isActive) => (
        {
            color: "white",
            textDecoration: "none"
        }  
    );

    return (
        <NavLink className="navbutton"
            to={props.link}
            style={buttonStyle}
            state={{ auth: props.auth }}>
                {props.text}
        </NavLink>
    );
}