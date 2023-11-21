import React from "react";
import "../styles/navbar.css";

export default function StaticNavBar(props) {
    const navbarItems = props.items.map(item => 
        <li>
            <a href={item.link}>{item.text}</a>
        </li>
    );

    return (
        <nav className="navbar static">
            <ul>
                {navbarItems}
            </ul>
        </nav>
    );
}