import React from "react";
import "./header.css"

const Header : React.FC = props => {
    return (
        <header id="header" className="">
                <div className="logo-wrapper">
                    <a href="/"><img className="logo" src="./../images/logo/cinema-logo-v8.png" alt="" style={{width : "50px", marginRight: "50px"}}/></a>
                </div>
                <div className="menu d-flex fw-bold lh-6">
                    <a href="/movies" className="px-3">Phim</a>
                    <a href="" className="px-3">Rạp phim</a>
                    <a href="" className="px-3">Tin tức</a>
                    <a href="" className="px-3">Mua vé</a>
                </div>
                <div className="sign-in-wrapper d-flex fw-bold">
                    <a href="" style={{width: "100px"}}>Đăng nhập</a>
                </div>
        </header>
    )
}

export default Header;