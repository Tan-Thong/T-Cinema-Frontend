import SeatTable from "./components/SeatTable";

function SeatManager() {
    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Trang quản lý ghế</div>
            <div className="add-search px-5">
                <div className="d-flex" style={{ height: "100%", alignItems: "center" }}>
                    <div className="search-wrapper">
                        <div className="search-box">
                            <i className="fas fa-search search-icon"></i>
                            <input type="text" className="form-control search-input" placeholder="Search anything..." />
                            <button className="btn search-button">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: "120px", display: "block", width: "100%"}}></div>
            <SeatTable />
        </div>
    );
}

export default SeatManager;