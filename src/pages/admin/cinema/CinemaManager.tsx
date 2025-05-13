import { useState } from "react";
import CinemaModel from "../../../models/CinemaModel";
import CinemaForm from "./components/CinemaForm";
import CinemaTable from "./components/CinemaTable";

function CinemaManager() {
    const [selectedCinema, setSelectedCinema] = useState<CinemaModel | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleEditClick = (cinema: CinemaModel) => {
        setSelectedCinema(cinema);
        setShowForm(true);
        
        const formElement = document.getElementById('cinemaForm');
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleAddClick = () => {
        setSelectedCinema(null);
        setShowForm(true);
    };

    const handleFormSubmitted = () => {
        setSelectedCinema(null);
        setShowForm(false);
        setRefresh(!refresh);
    };

    const handleCancel = () => {
        setSelectedCinema(null);
        setShowForm(false);
    };

    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Trang quản lý rạp chiếu phim</div>
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
                <div id="movieForm">
                    <CinemaForm cinema={selectedCinema}
                        onSubmitDone={handleFormSubmitted}
                        onCancel={handleCancel} />
                </div>
            )}
            <CinemaTable onEdit={handleEditClick} refreshSignal={refresh}/>
        </div>
    );
}

export default CinemaManager;
