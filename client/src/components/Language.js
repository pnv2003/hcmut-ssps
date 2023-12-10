import React from "react";
import VietnamFlag from "./../assets/img/vietnam.png";
import USAFlag from "./../assets/img/united-states.png";
import "./../styles/language.css";

export default function Language(props) {
    let flag = VietnamFlag;
    let name = 'Tiếng Việt';

    switch (props.lang) {
        case 'usa':
            flag = USAFlag;
            name = 'English';
            break;
        default:
            break;
    }

    return (
        <div className="language">
            <div>
                <img src={flag} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    );
}