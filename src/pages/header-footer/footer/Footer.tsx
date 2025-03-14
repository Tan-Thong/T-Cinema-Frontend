import React from "react";

const Footer = () => {
  return (
    <footer className="py-4" style={{backgroundColor: "#1a1a1a", borderTop: "1px solid #333"}}>
      <div className="container text-center">

        {/* Phần Liên Hệ (Dòng dưới, căn giữa) */}
        <div className="mb-4">
          <h5 className="fw-bold">Thông Tin Liên Hệ</h5>
          <ul className="list-unstyled">
            <li className="small">Người thực hiện: <strong>Lê Văn Tấn Thông</strong></li>
            <li className="small">
              Email: <a href="mailto:contact@movietickets.com" style={{color: "#fff"}}><strong>levantanthong.2602@gmail.com</strong></a>
            </li>
            <li className="small">
              Điện thoại: <a href="tel:+84123456789" style={{color: "#fff"}}><strong>+84 348 807 764</strong></a>
            </li>
          </ul>
        </div>

        {/* Phần Giới Thiệu Dự Án (Dòng trên, căn giữa) */}
        <div className="mx-auto mb-4 w-50">
            <h5 className="fw-bold">Project T-Cinema</h5>
            <p className="small">
                T-Cinema là nền tảng trực tuyến giúp người dùng tìm kiếm, đặt vé nhanh chóng tại các rạp trên toàn quốc. 
                Hệ thống cung cấp thông tin phim, suất chiếu, hỗ trợ thanh toán trực tuyến và lưu vé điện tử, mang đến trải nghiệm tiện lợi và hiện đại.
            </p>
        </div>

        <hr className="border-light my-3" />

        <div className="small opacity-75">
          © 2025 T-Cinema. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
