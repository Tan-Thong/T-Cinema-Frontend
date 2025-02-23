import React from "react";
import "./movie.css"

function Movie() {
    return (
        <div className="movie-item">
            <a href="movies/id">
                <img className="thumbnail" src="./../images/movies/thumbnail-dark-nuns.jpg" alt="" />
                <div className="info">
                    <div className="title d-flex">
                        <span className="grade_18">18</span>
                        <p>Nữ tu bóng tối</p>
                    </div>
                    <div className="date">
                        <p className="time">100 Phút</p>
                        <span>|</span>
                        <p className="day">07/02/2025</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Movie;