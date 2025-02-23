import React from "react";
import "./detailpage.css"

const DetailPage : React.FC = (props) => {
    return (
        <div className="main">
            <div className="banner-wrapper  bg-black">
                <div className="img relative d-flex justify-content-center">
                    <div className="blur-left">
                        <img className="" src="./../images/banners/blur-left.png" />
                    </div>
                    <img className="banner" src="./../images/banners/banner1.jpg" alt="" />
                    <div className="blur-right">
                        <img className="" src="./../images/banners/blur-right.png" />
                    </div>
                </div>
            </div>
            <div className="detail-wrapper">
                <div className="thumbnail-wrapper">
                    <img src="./../images/movies/thumbnail-nha-gia-tien.jpg" alt="" />

                    <div className="detail">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;