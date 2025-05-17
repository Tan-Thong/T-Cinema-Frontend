import { useState } from "react";
import ShowtimeModel from "../../../models/ShowtimeModel";
import ShowtimeTable from "./components/ShowtimeTable";
import ShowtimeForm from "./components/ShowtimeForm";

function ShowtimeManager() {
    const [selectedShowtime, setSelectedShowtime] = useState<ShowtimeModel | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleEditClick = (showtime: ShowtimeModel) => {
        setSelectedShowtime(showtime);
        setShowForm(true);
        
        const formElement = document.getElementById('roomForm');
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleAddClick = () => {
        setSelectedShowtime(null);
        setShowForm(true);
    };

    const handleFormSubmitted = () => {
        setSelectedShowtime(null);
        setShowForm(false);
        setRefresh(!refresh);
    };

    const handleCancel = () => {
        setSelectedShowtime(null);
        setShowForm(false);
    };

    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Quản lý suất chiếu</div>
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
                    <ShowtimeForm
                        showtime={selectedShowtime}
                        onSubmitDone={handleFormSubmitted}
                        onCancel={handleCancel}
                    />
                </div>
            )}
            <ShowtimeTable onEdit={handleEditClick} refreshSignal={refresh}/>
        </div>
    );
}

export default ShowtimeManager;
