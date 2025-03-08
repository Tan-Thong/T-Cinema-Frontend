import React, { useEffect, useState } from "react";
import "./listmovies.css"
import Movie from "../../home-page/components/Movie";
import MovieModel from "../../../models/MovieModel";
import { findAll } from "../../../api/MovieAPI";
function ListMovies() {
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
    
        <div className="list-movies">
            <div className="buttons">
                <button>PHIM ĐANG CHIẾU</button>
                <button>PHIM SẮP CHIẾU</button>
            </div>

            <div className="movies-wrapper">
                {
                    movies.map((movie) => (
                        <Movie movie={movie}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ListMovies;