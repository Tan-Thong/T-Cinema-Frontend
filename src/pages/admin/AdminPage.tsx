import "./adminpage.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function AdminPage() {
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