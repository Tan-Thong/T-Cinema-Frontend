import React from "react";
import "./movie.css"
import MovieModel from "../../../models/MovieModel";

interface MovieInterface {
    movie : MovieModel;
};

const Movie : React.FC<MovieInterface> = (props) => {
    return (
        <div className="movie-item">
            <a href={`movies/${props.movie.movieId}`} >
                <img className="thumbnail" src={props.movie.thumbnailUrl} alt="" />
                <div className="info">
                    <div className="title d-flex">
                        <span className="grade_18">18</span>
                        <p>{props.movie.title}</p>
                    </div>
                    <div className="date">
                        <p className="time">{props.movie.duration} Phút</p>
                        <span>|</span>
                        <p className="day">{props.movie.releaseDate}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Movie;