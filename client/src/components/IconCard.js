import React from "react";
import "../styles/icon-card.css";

export default function IconCard(props) {
    return (
        <div className="icon-card">
            {props.icon}
            <p className="title">
                {props.title}
            </p>
            <p className="description">
                {props.description}
            </p>
        </div>
    );
}