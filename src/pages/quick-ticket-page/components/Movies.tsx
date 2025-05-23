import React, { useEffect, useState } from "react";
import "./movies.css"
import Movie from "../../home-page/components/Movie";
import MovieModel from "../../../models/MovieModel";
import { findMoviesByStatus } from "../../../api/MovieAPI";
function Movies() {
    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {
        findMoviesByStatus("showing").then(
            movieData => {
                setMovies(movieData);
            }
        ).catch(

        );
    }, []);

    return (
        <div className="list">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="" style={{color: "#252422"}}>Chọn phim</p>
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

export default Movies;