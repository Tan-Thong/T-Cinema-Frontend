import React, { useEffect, useState } from "react";
import "./moviesshowing.css"
import { findAll } from "../../../api/MovieAPI";
import MovieModel from "../../../models/MovieModel";

function MoviesShowing() {
    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {
        findAll().then(
            movieData => {
                setMovies(movieData);
            }
        ).catch(

        );
    }, []);
    return (
        <div className="list-movie-showing">
            <div className="movie-wrapper">
                <img src={movies[0]?.bannerUrl} alt="" className="thumbnail" />
                <p className="movie-title">{movies[0]?.title}</p>
            </div>

            <div className="movie-wrapper">
                <img src={movies[1]?.bannerUrl} alt="" className="thumbnail" />
                <p className="movie-title">{movies[1]?.title}</p>
            </div>

            <div className="movie-wrapper">
                <img src={movies[2]?.bannerUrl} alt="" className="thumbnail" />
                <p className="movie-title">{movies[2]?.title}</p>
            </div>

            <a className="button" href="/movies">Xem thêm</a>
        </div>
    )
}

export default MoviesShowing;