import React, { useEffect, useState } from "react";
import "./moviescollection.css"
import Movie from "./Movie";
import MovieModel from "../../../models/MovieModel";
import { findAll } from "../../../api/MovieAPI";

function MoviesCollection() {
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
        <div className="movies-collection">
            <div className="action">
                <div className="head d-flex">
                    <span className="block"></span>
                    <p className="">Phim</p>
                </div>
                <div className="d-flex btns px-3">
                    <div className="px-3">Phim đang chiếu</div>
                    <div className="px-3">Phim sắp chiếu</div>
                </div>
            </div>
            <div className="movies-wrapper">
                {
                    movies.map((movie) => (
                        <Movie movie={movie}/>
                    ))
                }
            </div>
            <a className="d-flex justify-content-center pt-5" href="/movies">
                <div className="see-more">Xem thêm</div>
            </a>
        </div>
    );
}

export default MoviesCollection;