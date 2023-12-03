import { nanoid } from "nanoid";
import React from "react";
import { NavLink } from "react-router-dom";
import './../styles/vertical-navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faHouse, faPrint, faSliders } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

export default function VerticalNavbar(props) {
    const items = [
        { text: 'Trang chủ', link: '/admin/', icon: <FontAwesomeIcon icon={faHouse} /> },
        { text: 'Máy in', link: '/admin/printer', icon: <FontAwesomeIcon icon={faPrint} /> },
        { text: 'Cấu hình', link: '/admin/config', icon: <FontAwesomeIcon icon={faSliders} /> },
        { text: 'Thống kê', link: '/admin/stat', icon: <FontAwesomeIcon icon={faChartSimple} /> },
        { text: 'Lịch sử', link: '/admin/log', icon: <FontAwesomeIcon icon={faClipboard} /> },
    ]

    const activeStyle = ({ isActive }) => (
        {
            color: "black",
            fontWeight: isActive ? "bold": "auto",
            textDecoration: "none"
        }
    );

    const navbarItems = items.map(item => 
        <li key={`item-${nanoid()}`}>
            <NavLink 
                to={item.link} 
                style={activeStyle}
                className="nav-item"
                key={`item-${nanoid()}`}
            > 
                <span>{item.icon}</span>
                <p>{item.text}</p>
            </NavLink>
        </li>
    );

    return (
        <aside className="vertical-navbar">
            <ul>
                {navbarItems}
            </ul>
        </aside>
    );
}