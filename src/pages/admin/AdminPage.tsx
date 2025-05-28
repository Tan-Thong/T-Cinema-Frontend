import { useEffect, useState } from "react";
import "./adminpage.css";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function AdminPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", { state: { from: location }, replace: true });
            return;
        }

        fetch("http://localhost:8080/auth/introspect", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        })
            .then(res => {
                if (!res.ok) throw new Error("Lỗi server");
                return res.json();
            })
            .then(data => {
                if (data.result?.valid) {
                    setLoading(false);
                } else {
                    localStorage.removeItem("token");
                    navigate("/login", { state: { from: location }, replace: true });
                }
            })
            .catch(() => {
                localStorage.removeItem("token");
                navigate("/login", { state: { from: location }, replace: true });
            });
    }, [navigate, location]);

    if (loading) {
        return <div>Đang xác thực...</div>;
    }

    return (
        <div className="admin-wrapper">
            <Navbar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPage;
