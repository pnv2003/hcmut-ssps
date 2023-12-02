import React from "react";
import { NavLink } from 'react-router-dom';
import "./../styles/navbar.css";
// import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

export default function NavBar(props) {

    const activeStyle = ({ isActive }) => (
        {
            color: "black",
            fontWeight: isActive ? "bold": "auto",
            textDecoration: "none"
        }
    );

    const navbarItems = props.items.map(item => 
        // <li key={`item-${nanoid()}`}>
            <NavLink 
                to={item.link} 
                style={activeStyle}
                className="nav-item"
                key={`item-${nanoid()}`}
            > 
                {item.text}
            </NavLink>
        // </li>
    );

    const staticNavbarItems = props.items.map(item => 
            <a href={item.link} className="nav-item" key={`link-${nanoid()}`}>{item.text}</a>
    );

    function handleClick() {
        let x = document.querySelector('#navbar');
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }

    return (
        <nav className={props.static ? "navbar static" : "navbar"} id="navbar">
            {/* <ul> */}
                {props.static ? staticNavbarItems : navbarItems}
                <a href="#" className="icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} size='1x' color="black" />
                </a>
            {/* </ul> */}
        </nav>
    );
}