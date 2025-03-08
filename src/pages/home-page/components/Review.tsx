import React from "react";
import "./review.css"

function Review() {
    return (
        <div className="reviews-collection">
            <div className="wrapper">
                <div className="action">
                    <div className="head d-flex">
                        <span className="block"></span>
                        <p className="">Góc điện ảnh</p>
                    </div>
                </div>
                <div className="reviews-wrapper">
                    <div className="review-item-main">
                        <img src="./../images/reviews/nha-gia-tien-review-thumbnail.jpg" alt="" className="thumbnail" />
                        <p className="re-title">
                            [Review] Nhà Gia Tiên: Huỳnh Lập Tiếp Tục Thắng Nhờ Đề Tài Tâm Linh?
                        </p>
                    </div>
                    <div className="reviews-secondary">
                        <div className="review-item d-flex">
                            <img src="./../images/reviews/nha-gia-tien-review-thumbnail.jpg" alt="" className="thumbnail" />
                            <p className="re-title">
                                [Review] Nhà Gia Tiên: Huỳnh Lập Tiếp Tục Thắng Nhờ Đề Tài Tâm Linh?
                            </p>
                        </div>
                        <div className="review-item d-flex">
                            <img src="./../images/reviews/nha-gia-tien-review-thumbnail.jpg" alt="" className="thumbnail" />
                            <p className="re-title">
                                [Review] Nhà Gia Tiên: Huỳnh Lập Tiếp Tục Thắng Nhờ Đề Tài Tâm Linh?
                            </p>
                        </div>
                        <div className="review-item d-flex">
                            <img src="./../images/reviews/nha-gia-tien-review-thumbnail.jpg" alt="" className="thumbnail" />
                            <p className="re-title">
                                [Review] Nhà Gia Tiên: Huỳnh Lập Tiếp Tục Thắng Nhờ Đề Tài Tâm Linh?
                            </p>
                        </div>
                    </div>
                </div>
                <a className="d-flex justify-content-center pt-4" href="">
                    <div className="see-more">Xem thêm</div>
                </a>
            </div>
        </div>
    );
}

export default Review;