import { useState } from "react";
import RoomForm from "./components/RoomForm";
import RoomTable from "./components/RoomTable";
import RoomModel from "../../../models/RoomModel";
import MovieForm from "../movie/components/MovieForm";

function RoomManager() {
    const [selectedRoom, setSelectedRoom] = useState<RoomModel | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleEditClick = (room: RoomModel) => {
        setSelectedRoom(room);
        setShowForm(true);
        
        const formElement = document.getElementById('roomForm');
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleAddClick = () => {
        setSelectedRoom(null);
        setShowForm(true);
    };

    const handleFormSubmitted = () => {
        setSelectedRoom(null);
        setShowForm(false);
        setRefresh(!refresh);
    };

    const handleCancel = () => {
        setSelectedRoom(null);
        setShowForm(false);
    };

    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Trang quản lý phòng chiếu</div>
            <div className="add-search px-5">
                <div className="d-flex" style={{ height: "100%", alignItems: "center" }}>
                    <button className="btn btn-add" onClick={handleAddClick}>Thêm mới</button>
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
            {showForm && (
                <div id="roomForm">
                    <RoomForm
                        room={selectedRoom}
                        onSubmitDone={handleFormSubmitted}
                        onCancel={handleCancel}
                    />
                </div>
            )}
            <RoomTable onEdit={handleEditClick} refreshSignal={refresh}/>
        </div>
    );
}

export default RoomManager;
