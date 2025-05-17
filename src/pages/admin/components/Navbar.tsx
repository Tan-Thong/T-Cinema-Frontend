import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <div className="logo-wrapper">
                <img src="/images/profiles/avatar.jpg" alt="" />
                <h5>Xin chào, Tấn Thông</h5>
            </div>
            <div className="action-wrapper">
                <div className="action-item"><Link to="movies">Quản lý phim</Link></div>
                <div className="action-item"><Link to="cinemas">Quản lý rạp chiếu phim</Link></div>
                <div className="action-item"><Link to="rooms">Quản lý phòng chiếu</Link></div>
                <div className="action-item"><Link to="showtimes">Quản lý suất chiếu</Link></div>
                <div className="action-item"><Link to="seats">Quản lý ghế</Link></div>
                <div className="action-item">Quản lý tin tức</div>
                <div className="action-item">Thống kê</div>
            </div>
            <div className="logout-btn">
                <img src="/images/icons/log-out.png" alt="" style={{ width: "25px" }} />
                <p>Đăng xuất</p>
            </div>
        </nav>
    )
}

export default Navbar;