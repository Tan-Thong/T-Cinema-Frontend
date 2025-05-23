import React, { useEffect, useState } from "react";
import "./quickTicketPage.css"
import Schedule from "../detail-page/components/Schedule";
import Movies from "./components/Movies";
import MovieModel from "../../models/MovieModel";
import { findMoviesByStatus } from "../../api/MovieAPI";

const QuickTicketPage: React.FC = (props) => {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [status, setStatus] = useState("showing")

    useEffect(() => {
        findMoviesByStatus("showing").then(
            movieData => {
                setMovies(movieData);
            }
        ).catch(

        );
    }, []);
    return (
        <div className="quick-ticket-wrapper">
            <div className="quick-ticket-content">
                <div className="quick-ticket-section">

                    <div className="head d-flex">
                        <span className="block"></span>
                        <p className="" style={{ color: "#252422" }}>Chọn phim</p>
                    </div>
                    <div className="movies-wrapper">
                        {
                            movies.map((movie) => (
                                <div className="movie-item">
                                    <div className="thumbnail-wrapper">
                                        <img className="thumbnail" src={`http://localhost:8080/${movie.thumbnailUrl}`} alt="" />
                                    </div>
                                    <div className="info">
                                        <p className="info-title">{movie.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <Schedule movieID={1} />
                </div>
            </div>
        </div>
    )
}

export default QuickTicketPage;