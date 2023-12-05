import React from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

export default function PrinterDetails() {
    const location = useLocation();
    const printer = location.state.printer;
    console.log(printer);

    return (
        <AdminLayout>
            <article className="printer-details">
                <h1>This is printer {printer.id}</h1>
            </article>  
        </AdminLayout>
          
    );
}