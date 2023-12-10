import React from "react";
import { Navigate } from "react-router-dom";

export default function PrinterRoute() {
    return (
        <Navigate to={'/admin/printer/info'} replace />
    )
}