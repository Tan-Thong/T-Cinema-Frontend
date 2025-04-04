import "./adminpage.css";
import Navbar from "./components/Navbar";
import TableMovies from "./product/TableMovies";

function AdminPage() {
    return (
        <div className="admin-content">
            <Navbar />
            <div className="main">
                <div className="header px-5">
                    Trang quản lý phim
                </div>
                <div className="list">
                    <div className="add-search px-5">
                        <div className=" d-flex py-3">
                            <button className="btn btn-add">Thêm phim mới</button>
                            <div className="search-wrapper">
                                <div className="search-box">
                                    <i className="fas fa-search search-icon"></i>
                                    <input type="text" className="form-control search-input" placeholder="Search anything..." />
                                    <button className="btn search-button">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                        <form action="" method="post" className="d-flex">
                            <div>
                                <div className="imgs" style={{width: "100%", margin: "0 auto"}}>
                                    <img src="images/movies/thumbnail-dia-dao.jpg" alt="" style={{height: "250px"}}/>
                                    <img src="images/banners/banner-dia-dao.jpg" alt="" style={{height: "250px"}}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Thumbnail</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Banner</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Trailer url</label>
                                    <input type="text" className="form-control" placeholder="Trailer url"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Độ tuổi</label>
                                    <input type="text" className="form-control"  placeholder="Độ tuổi" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Đánh giá</label>
                                    <input type="text" className="form-control"  placeholder="Đánh giá" />
                                </div>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">Tên phim</label>
                                    <input type="text" className="form-control" placeholder="Tên phim" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ngày chiếu</label>
                                    <input type="date" className="form-control" placeholder="Ngày chiếu" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Thời lượng</label>
                                    <input type="text" className="form-control" placeholder="Thời lượng" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quốc gia</label>
                                    <input type="text" className="form-control" placeholder="Quốc gia" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Đạo diễn</label>
                                    <input type="text" className="form-control" placeholder="Đạo diễn" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Example textarea</label>
                                    <textarea className="form-control" rows={6}></textarea>
                                </div>
                                <button className="btn btn-success" style={{width: "100%", marginTop: "auto"}}>Xác nhận</button>
                            </div>
                        </form>
                    </div>

                    <TableMovies />
                </div>
            </div>
        </div>
    )
}

export default AdminPage;