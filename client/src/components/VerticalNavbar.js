import { nanoid } from "nanoid";
import React from "react";
import { NavLink } from "react-router-dom";
import './../styles/vertical-navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryHalf, faChartSimple, faHouse, faLocationDot, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faClipboard, faFile } from "@fortawesome/free-regular-svg-icons";

export default function VerticalNavbar(props) {
    const items = [
        { text: 'Trang chủ', link: '/admin/dashboard', icon: <FontAwesomeIcon icon={faHouse} /> },
        { text: 'Máy in', link: '/admin/printer/info', icon: <FontAwesomeIcon icon={faPrint} />},
        { text: 'Trạng thái', link: '/admin/printer/status', icon: <FontAwesomeIcon icon={faBatteryHalf} />},
        { text: 'Cấp phát', link: '/admin/config/pgalloc', icon: <FontAwesomeIcon icon={faCalendar} /> },
        { text: 'Tài liệu', link: '/admin/config/file', icon: <FontAwesomeIcon icon={faFile} /> },
        { text: 'Vị trí', link: '/admin/config/location', icon: <FontAwesomeIcon icon={faLocationDot} /> },
        // { text: 'Thống kê', link: '/admin/stat', icon: <FontAwesomeIcon icon={faChartSimple} /> },
        { text: 'Lịch sử', link: '/admin/log', icon: <FontAwesomeIcon icon={faClipboard} /> }
    ];

    const activeStyle = ({ isActive }) => (
        {
            color: isActive ? "#3AC9D6" : "black",
            fontWeight: isActive ? "bold": "auto",
            textDecoration: 'none'
            // backgroundColor: isActive ? "#0D99FF" : "white"
        }
    );

    // const subActiveStyle = ({ isActive }) => (
    //     {
    //         color: isActive ? "#0D99FF" : "black",,
    //         // backgroundColor: isActive ? "#0D99FF" : "white"
    //     }
    // );

    const navbarItems = items.map(item => {

        // const navbarChildItems = item.child?.map((subitem) => 
        //     <li key={`subitem-${nanoid()}`}>
        //         <NavLink 
        //             to={subitem.link}
        //             style={subActiveStyle}
        //             className="sub-nav-item"
        //             key={`subitem-${nanoid()}`}
        //         >
        //             <span>{subitem.icon}</span>
        //             <p>{subitem.text}</p>
        //         </NavLink>
        //     </li>
        // );

        return (
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
                {/* {navbarChildItems} */}
            </li>
        )
    });

    return (
        <aside className="vertical-navbar">
            <ul>
                {navbarItems}
            </ul>
        </aside>
    );
}