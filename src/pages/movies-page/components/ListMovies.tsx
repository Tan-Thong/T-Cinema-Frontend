import React, { useEffect, useState } from "react";
import "./listmovies.css"
import Movie from "../../home-page/components/Movie";
import MovieModel from "../../../models/MovieModel";
import { findAllMovies, findMoviesByStatus } from "../../../api/MovieAPI";
function ListMovies() {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [status, setStatus] = useState("showing")

    useEffect(() => {
        findMoviesByStatus(status).then(
            movieData => {
                setMovies(movieData);
            }
        ).catch(

        );
    }, [status]);

    return (

        <div className="list-movies">
            <div className="buttons">
                <button className={`${status === "showing" ? "selected" : ""
                    }`}
                    onClick={() => setStatus("showing")}>
                    PHIM ĐANG CHIẾU</button>
                <button className={`${status === "upcoming" ? "selected" : ""
                    }`}
                    onClick={() => setStatus("upcoming")}>
                    PHIM SẮP CHIẾU</button>
            </div>

            <div className="movies-wrapper">
                {
                    movies.map((movie) => (
                        <Movie movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default ListMovies;