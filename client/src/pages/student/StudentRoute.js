import React from "react";
import { Navigate } from "react-router-dom";

export default function StudentRoute() {
    return (
        <Navigate to={'/student/home'} replace />
    );
}