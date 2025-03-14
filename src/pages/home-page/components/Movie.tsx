import React, { useState } from "react";
import "./movie.css"
import MovieModel from "../../../models/MovieModel";

interface MovieInterface {
    movie: MovieModel;
};

const Movie: React.FC<MovieInterface> = (props) => {
    const [showModal, setShowModal] = useState(false); 
    return (
        <div className="movie-item">
            <a href={`movies/${props.movie.movieId}`} >
                <div className="thumbnail-wrapper">
                    <img className="thumbnail" src={props.movie.thumbnailUrl} alt="" />
                    <div className="thumbnail-action">
                        <button type="button" className="btn-fill">Mua vé</button>
                        <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowModal(true); }}>Trailer</button>
                    </div>
                </div>
                <div className="info">
                    <span className="grade_18">18</span>
                    <p className="info-title">{props.movie.title}</p>
                </div>
            </a>

            {/* Modal hiển thị video */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe width="100%" height="100%"
                            src={props.movie?.trailerUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;