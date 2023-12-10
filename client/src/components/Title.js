import React from "react";
import "./../styles/title.css";

export default function Title(props) {

    return (
        <div className="title">
            <p className="site-title">Student Smart Printing Service</p>
            <span>by HCMUT</span>
            <p>{props.smallText}</p>
        </div>
    );
}