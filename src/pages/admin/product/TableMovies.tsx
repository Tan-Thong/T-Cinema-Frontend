import "./../adminpage.css";

function TableMovies() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Tên phim</th>
                    <th scope="col">Ngày chiếu</th>
                    <th scope="col">Thời lượng</th>
                    <th scope="col">Quốc gia</th>
                    <th scope="col">Đạo diễn</th>
                    <th scope="col">Độ tuổi</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Banner</th>
                    <th scope="col">Trailer</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><img src="images/movies/thumbnail-dia-dao.jpg" alt="" style={{ height: "250px", borderRadius: "6px" }} /></td>
                    <td>Địa đạo</td>
                    <td>04/04/2025</td>
                    <td>128 phút</td>
                    <td>Việt Nam</td>
                    <td>Bùi Thạc Chuyên</td>
                    <td>T16</td>
                    <td>9.7</td>
                    <td>images/banners/banner-dia-dao.jpg</td>
                    <td>https://www.youtube.com/embed/xh6IDHjvytU?si=foNoTvHDcCf-aVS4</td>
                    <td>Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực – Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường.</td>
                    <td>
                        <div className="btn btn-add">Chỉnh sửa</div>
                    </td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td><img src="images/movies/thumbnail-dia-dao.jpg" alt="" style={{ height: "250px" }} /></td>
                    <td>Địa đạo</td>
                    <td>04/04/2025</td>
                    <td>128 phút</td>
                    <td>Việt Nam</td>
                    <td>Bùi Thạc Chuyên</td>
                    <td>T16</td>
                    <td>9.7</td>
                    <td>images/banners/banner-dia-dao.jpg</td>
                    <td>https://www.youtube.com/embed/xh6IDHjvytU?si=foNoTvHDcCf-aVS4</td>
                    <td>Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực – Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường.</td>
                    <td>
                        <div className="btn">Chỉnh sửa</div>
                    </td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td><img src="images/movies/thumbnail-dia-dao.jpg" alt="" style={{ height: "250px" }} /></td>
                    <td>Địa đạo</td>
                    <td>04/04/2025</td>
                    <td>128 phút</td>
                    <td>Việt Nam</td>
                    <td>Bùi Thạc Chuyên</td>
                    <td>T16</td>
                    <td>9.7</td>
                    <td>images/banners/banner-dia-dao.jpg</td>
                    <td>https://www.youtube.com/embed/xh6IDHjvytU?si=foNoTvHDcCf-aVS4</td>
                    <td>Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực – Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường.</td>
                    <td>
                        <div className="btn">Chỉnh sửa</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableMovies;