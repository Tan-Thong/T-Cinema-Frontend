import { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";
import MovieModel from "../../../models/MovieModel";
import "./movieManager.css"

function MovieManager() {
    const [selectedMovie, setSelectedMovie] = useState<MovieModel | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleEditClick = (movie: MovieModel) => {
        setSelectedMovie(movie);
        setShowForm(true);
        
        const formElement = document.getElementById('movieForm');
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleAddClick = () => {
        setSelectedMovie(null); // Form sẽ hiểu là chế độ "Thêm mới"
        setShowForm(true);
    };

    const handleFormSubmitted = () => {
        setSelectedMovie(null);
        setShowForm(false);
        setRefresh(!refresh);
    };

    const handleCancel = () => {
        setSelectedMovie(null);
        setShowForm(false);
    };

    return (
        <div style={{width: "100%"}}>
            <div className="header px-5">Trang quản lý phim</div>
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
                    <MovieForm
                        movie={selectedMovie}
                        onSubmitDone={handleFormSubmitted}
                        onCancel={handleCancel}
                    />
                </div>
            )}
            <MovieTable onEdit={handleEditClick} refreshSignal={refresh} />
        </div>
    );
}

export default MovieManager;
