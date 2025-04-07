import "./adminpage.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function AdminPage() {
    return (
        <div className="admin-content">
            <Navbar />
            <div className="admin-main">
                <div className="header px-5">Trang quản lý phim</div>
                <div style={{marginTop: "60px"}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminPage;