import { Navigate } from "react-router-dom";

export default function ConfigRoute() {
    return (
        <Navigate to={'/admin/config/pgalloc'} replace />
    );
}