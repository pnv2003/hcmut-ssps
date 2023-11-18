import React from "react";
import { Link } from 'react-router-dom';
import "./../styles/navbar.css";

export default function Navbar(props) {

    const navbarItems = props.items.map(item => 
        <li>{item.text}</li>
    );

    return (
        <nav className="navbar">
            <ul>
                {navbarItems}
            </ul>
        </nav>
    );
}