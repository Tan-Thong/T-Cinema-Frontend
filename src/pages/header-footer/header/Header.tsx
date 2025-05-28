import React, { useEffect, useState } from "react";
import "./header.css"

const Header: React.FC = props => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            if (!token) return; // Nếu không có token thì không gọi API

            try {
                const response = await fetch("http://localhost:8080/users/myInfo", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user info");
                }

                const resJson = await response.json();
                const result = resJson.result;
                setUserName(result.fullName);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <header id="header">
            <div className="logo-wrapper">
                <a href="/"><img className="logo" src="./../images/logo/cinema-logo-v8.png" alt="" style={{ width: "50px", marginRight: "50px" }} /></a>
            </div>

            <nav className="menu d-flex fw-bold lh-6">
                <a href="/movies" className="px-3">Phim</a>
                <a href="" className="px-3">Rạp phim</a>
                <a href="/quick-ticket" className="px-3">Mua vé</a>
            </nav>

            <div className="sign-in-wrapper d-flex fw-bold">
                {userName ? (
                    <a href="/profile" style={{ minWidth: "150px" }}>Hi, {userName}</a>
                ) : (
                    <a href="/login" style={{ width: "100px" }}>Đăng nhập</a>
                )}
            </div>
        </header>
    )
}

export default Header;