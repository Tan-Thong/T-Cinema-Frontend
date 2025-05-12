

function RoomForm() {
    return (
        <form className="d-flex">
            <div>
                <div className="mb-3">
                    <label className="form-label">Rạp:</label>
                    <input type="text" className="form-control" placeholder="Tên phim"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Tên phòng:</label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Loại phòng</label>
                    <input type="text" className="form-control" placeholder="Thời lượng"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Sức chứa</label>
                    <input type="text" className="form-control" placeholder="Quốc gia"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Số hàng ghế:</label>
                    <input type="text" className="form-control" placeholder="Đạo diễn"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Số cột ghế</label>
                    <textarea className="form-control" rows={7}></textarea>
                </div>
                <button className="btn btn-success mb-3" style={{ width: "100%", marginTop: "auto", height: "40px"}} type="submit">Xác nhận</button>
                <button className="btn btn-secondary" style={{ width: "100%", marginTop: "auto", height: "40px"}} type="button">Hủy</button>
            </div>
        </form>
    );
}

export default RoomForm;
