import { Navigate } from "react-router-dom";

export default function LogRoute() {
    return (
        <Navigate to={'/admin/log/print'} replace/>
    );
}