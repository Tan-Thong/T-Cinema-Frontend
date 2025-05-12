import RoomForm from "./components/RoomForm";
import RoomTable from "./components/RoomTable";

function RoomManager() {
    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Trang quản lý phòng chiếu</div>
            <div className="add-search px-5">
                <div className="d-flex" style={{ height: "100%", alignItems: "center" }}>
                    <button className="btn btn-add">Thêm mới</button>
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
            <RoomForm />
            {/* {showForm && (
                <div id="movieForm">
                    <MovieForm
                        movie={selectedMovie}
                        onSubmitDone={handleFormSubmitted}
                        onCancel={handleCancel}
                    />
                </div>
            )} */}
            <RoomTable />
        </div>
    );
}

export default RoomManager;
