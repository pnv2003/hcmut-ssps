import React from "react";
import "./../styles/title.css";

export default function Title(props) {

    return (
        <div className="title">
            <p className="site-title">Student Smart Printing Service <span>by HCMUT</span> </p>
            <p>{props.smallText}</p>
        </div>
    );
}