import React from "react";
import { useLocation } from "react-router-dom";

export default function PrinterDetails() {
    const location = useLocation();
    console.log(location.state);

    const printerId = location.state.id;

    return (
        <article className="printer-details">
            <h1>This is printer {printerId}</h1>
        </article>    
    );
}