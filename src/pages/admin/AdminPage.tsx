import "./adminpage.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function AdminPage() {
    return (
        <div className="admin-content">
            <Navbar />
            <div className="admin-main">
                <div className="header px-5">Trang quản lý phim</div>
                <div className="add-search px-5">
                    <div className="d-flex" style={{ height: "100%", alignItems: "center" }}>
                        <a href="add-movies"><button className="btn btn-add">Thêm mới</button></a>
                        <div className="search-wrapper">
                            <div className="search-box">
                                <i className="fas fa-search search-icon"></i>
                                <input type="text" className="form-control search-input" placeholder="Search anything..." />
                                <button className="btn search-button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "60px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminPage;