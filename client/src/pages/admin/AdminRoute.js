import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute() {
    return (
        <Navigate to={'/admin/dashboard'} replace />
    );
}