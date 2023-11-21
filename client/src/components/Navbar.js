import React from "react";
import { NavLink } from 'react-router-dom';
import "./../styles/navbar.css";

export default function NavBar(props) {

    const activeStyle = ({ isActive }) => (
        {
            color: "black",
            fontWeight: isActive ? "bold": "auto",
            textDecoration: "none"
        }
    );

    const navbarItems = props.items.map(item => 
        <li>
            <NavLink 
                to={item.link} 
                style={activeStyle}
                state={{ auth: item.auth }}
            > 
                {item.text}
            </NavLink>
        </li>

    );

    return (
        <nav className="navbar">
            <ul>
                {navbarItems}
            </ul>
        </nav>
    );
}