import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/login");
    };
    return (
        <nav className="nav">
            <div className="logo-wrapper">
                <img src="/images/profiles/profile.png" alt="" />
                <h5>Xin chào</h5>
            </div>
            <div className="action-wrapper">
                <div className="action-item"><Link to="movies">Quản lý phim</Link></div>
                <div className="action-item"><Link to="cinemas">Quản lý rạp chiếu phim</Link></div>
                <div className="action-item"><Link to="rooms">Quản lý phòng chiếu</Link></div>
                <div className="action-item"><Link to="showtimes">Quản lý suất chiếu</Link></div>
                <div className="action-item"><Link to="seats">Quản lý ghế</Link></div>
            </div>
            <div className="logout-btn">
                <img src="/images/icons/log-out.png" alt="" style={{ width: "25px" }} />
                <p onClick={handleLogout}>Đăng xuất</p>
            </div>
        </nav>
    )
}

export default Navbar;