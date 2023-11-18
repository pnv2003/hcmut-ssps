import React from "react";

export default function Poster(props) {
    return (
        <div className="poster">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}