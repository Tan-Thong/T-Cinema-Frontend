import React, { useEffect } from "react";
import "./carousel.css"

import { initializeCarousel } from "./carouselhandler"; // Import function từ file ts

const Carousel: React.FC = () => {
    useEffect(() => {
        initializeCarousel(); // Gọi hàm khi component được mount
    }, []);
    return (
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <video className="img" id="heroVideoBg" playsInline autoPlay loop muted>
                        <source type="video/mp4"
                            src="./../videos/trailer1.mp4" />
                        <source type="video/webm"
                            src="./../videos/trailer1.mp4" />
                    </video>
                    <div className="content">
                        <div className="title">TOP 1</div>
                        <div className="topic">NHÀ GIA TIÊN</div>
                        <div className="buttons">
                            <button>MUA VÉ</button>
                            <button>XEM THÊM</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <video className="img" id="heroVideoBg" playsInline autoPlay loop muted>
                        <source type="video/mp4"
                            src="./../videos/trailer2.mp4" />
                        <source type="video/webm"
                            src="./../videos/trailer2.mp4" />
                    </video>
                    <div className="content">
                        <div className="title">TOP 2</div>
                        <div className="topic">NỮ TU BÓNG ĐÊM</div>
                        <div className="buttons">
                            <button>MUA VÉ</button>
                            <button>XEM THÊM</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <video className="img" id="heroVideoBg" playsInline autoPlay loop muted>
                        <source type="video/mp4"
                            src="./../videos/trailer3.mp4" />
                        <source type="video/webm"
                            src="./../videos/trailer3.mp4" />
                    </video>
                    <div className="content">
                        <div className="title">TOP 3</div>
                        <div className="topic">CAPTAIN AMERICA</div>
                        <div className="buttons">
                            <button>MUA VÉ</button>
                            <button>XEM THÊM</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <video className="img" id="heroVideoBg" playsInline autoPlay loop muted>
                        <source type="video/mp4"
                            src="./../videos/trailer4.mp4" />
                        <source type="video/webm"
                            src="./../videos/trailer4.mp4" />
                    </video>
                    <div className="content">
                        <div className="title">TOP 4</div>
                        <div className="topic">NỤ HÔN BẠC TỶ</div>
                        <div className="buttons">
                            <button>MUA VÉ</button>
                            <button>XEM THÊM</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* thumbnail */}
            <div className="thumbnail">
                <div className="item">
                    <img className="img" src="./../images/carousel/banner4.jpg" />
                </div>
                <div className="item">
                    <img className="img" src="./../images/carousel/banner1.jpg" />
                </div>
                <div className="item">
                    <img className="img" src="./../images/carousel/banner2.jpg" />
                </div>
                <div className="item">
                    <img className="img" src="./../images/carousel/banner3.jpg" />
                </div>
            </div>

            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
        </div>
    )
}

export default Carousel;