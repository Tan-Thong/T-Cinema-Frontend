// components/RequireAdmin.tsx
import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAdmin({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem("token");
    const decoded = parseJwt(token);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!decoded?.scope?.includes("ADMIN")) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log("Token:", token);
    console.log("Decoded:", decoded);

    return children;
}

function parseJwt(token: string | null) {
    if (!token) return null;
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}
