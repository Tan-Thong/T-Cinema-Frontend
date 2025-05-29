import React, { useEffect, useState } from "react";
import "./moviesshowing.css"
import { findMoviesByIdNot } from "../../../api/MovieAPI";
import MovieModel from "../../../models/MovieModel";

interface MovieInterface {
    movieId: number;
};

const MoviesShowing: React.FC<MovieInterface> = (props) => {
    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {
        findMoviesByIdNot(props.movieId).then(
            movieData => {
                setMovies(movieData);
            }
        ).catch(

        );
    }, []);
    return (
        <div className="list-movie-showing">
            {movies?.slice(0, 3).map((movie, index) => (
                <a key={movie?.movieId || index} href={`/movies/${movie?.movieId}`}>
                    <div className="movie-wrapper">
                        <div className="buy-ticket">
                            <img
                                src={`https://t-cinema-backend.onrender.com/${movie?.bannerUrl}`}
                                alt=""
                                className="thumbnail"
                            />
                            <div className="button">
                                <div className="btn">Mua vé</div>
                            </div>
                        </div>
                        <p className="movie-title">{movie?.title}</p>
                    </div>
                </a>
            ))}
            <a className="button" href="/movies">Xem thêm</a>
        </div>
    )
}

export default MoviesShowing;