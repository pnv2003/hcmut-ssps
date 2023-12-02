import React from "react";
import "../styles/navbar.css";
// import { nanoid } from "nanoid";

export default function StaticNavBar(props) {
    const navbarItems = props.items.map(item => 
        // <li key={`item-${nanoid()}`}>
            <a href={item.link} className="nav-item">{item.text}</a>
        // </li>
    );

    return (
        <nav className="navbar static">
            {/* <ul> */}
                {navbarItems}
                
            {/* </ul> */}
        </nav>
    );
}