import "./navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <div className="logo-wrapper">
                <img src="images/profiles/avatar.jpg" alt="" />
                <h5>Xin chào, Tấn Thông</h5>
            </div>
            <div className="action-wrapper">
                <div className="action-item">Quản lý phim</div>
                <div className="action-item">Quản lý ghế</div>
                <div className="action-item">Quản lý suất chiếu</div>
                <div className="action-item">Quản lý rạp</div>
                <div className="action-item">Quản lý tin tức</div>
                <div className="action-item">Thống kê</div>
            </div>
            <div className="logout-btn">
                <img src="./../images/icons/log-out.png" alt="" style={{ width: "25px" }} />
                <p>Đăng xuất</p>
            </div>
        </nav>
    )
}

export default Navbar;