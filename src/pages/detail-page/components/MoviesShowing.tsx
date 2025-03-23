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
            <a href={`/movies/${movies[0]?.movieId}`}>
                <div className="movie-wrapper">
                    <div className="buy-ticket">
                        <img src={movies[0]?.bannerUrl} alt="" className="thumbnail" />
                        <div className="button">
                            <div className="btn">Mua vé</div>
                        </div>
                    </div>
                    <p className="movie-title">{movies[0]?.title}</p>
                </div>
            </a>

            <a href={`/movies/${movies[1]?.movieId}`}>
                <div className="movie-wrapper">
                <div className="buy-ticket">
                        <img src={movies[1]?.bannerUrl} alt="" className="thumbnail" />
                        <div className="button">
                            <div className="btn">Mua vé</div>
                        </div>
                    </div>
                    <p className="movie-title">{movies[1]?.title}</p>
                </div>
            </a>

            <a href={`/movies/${movies[2]?.movieId}`}>
                <div className="movie-wrapper">
                <div className="buy-ticket">
                        <img src={movies[2]?.bannerUrl} alt="" className="thumbnail" />
                        <div className="button">
                            <div className="btn">Mua vé</div>
                        </div>
                    </div>
                    <p className="movie-title">{movies[2]?.title}</p>
                </div>
            </a>
            <a className="button" href="/movies">Xem thêm</a>
        </div>
    )
}

export default MoviesShowing;