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

            <div className="movie-detail-content">
                <div className="movie-detail">
                    <img src="./../images/movies/thumbnail-nha-gia-tien.jpg" alt="" />
                    <div className="detail">
                        <div className="detail-title d-flex gap-4 align-items-center">
                            <p className="text-black title">Nhà Gia Tiên</p>
                            <div className="classify">T18</div>
                        </div>
                        <div className="detail-section datetime">
                            <div className="d-flex align-items-center">
                                <img src="./../images/icons/clock.png" alt="" />
                                <p className="label">117 Phút</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src="./../images/icons/calendar.png" alt="" />
                                <p className="label">19/02/2025</p>
                            </div>
                        </div>
                        <div className="detail-section">
                            <p className="label">Quốc gia:</p>
                            <p className="text">Việt Nam</p>
                        </div>
                        <div className="detail-section">
                            <p className="label">Nhà sản xuất:</p>
                            <p className="text">17 Production</p>
                        </div>
                        <div className="detail-section">
                            <p className="label">Thể loại:</p>
                            <p className="text">Hài</p>
                        </div>
                        <div className="detail-section">
                            <p className="label">Đạo diễn:</p>
                            <p className="text">Huỳnh Lập</p>
                        </div>
                    </div>

                    <div className="desc">
                        <div className="head d-flex">
                            <span className="block"></span>
                            <p className="">Nội dung phim</p>
                        </div>
                        <p className="mt-3">Nhà Gia Tiên xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình, có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất ngờ nhìn thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu thoát và không tiếp tục làm phiền mình, Mỹ Tiên bắt tay cùng Gia Minh lên kế hoạch giữ lấy căn nhà gia tiên đang bị họ hàng tranh chấp, đòi ông nội chia tài sản. Đứng trước hàng loạt bí mật động trời trong căn nhà gia tiên, liệu Mỹ Tiên có vượt qua được tất cả để hoàn thành di nguyện của Gia Minh?</p>
                    </div>
                </div>
                <div className="list-movie">

                </div>
            </div>
        </div>
    )
}

export default DetailPage;