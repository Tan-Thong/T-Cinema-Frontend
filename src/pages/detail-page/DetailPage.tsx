import React, { useEffect, useState } from "react";
import "./detailpage.css"
import { useParams } from "react-router-dom";
import MovieModel from "../../models/MovieModel";
import { getMovieByID } from "../../api/MovieAPI";
import MoviesShowing from "./components/MoviesShowing";
import Schedule from "./components/Schedule";

const DetailPage: React.FC = () => {
    const [movie, setMovie] = useState<MovieModel>();
    const { movieId } = useParams();
    const movieIdNumber = Number(movieId);
    const [showModal, setShowModal] = useState(false); // State để hiển thị modal

    useEffect(() => {
        getMovieByID(movieIdNumber).then(
            movieData => {
                setMovie(movieData);
            }
        ).catch();
    }, []);

    return (
        <div className="detail-content">
            <div className="banner-wrapper bg-black">
                <img
                    className="btn-play"
                    src="./../images/icons/play.png"
                    alt="Play Video"
                    onClick={() => setShowModal(true)} // Khi click, mở modal
                />
                <div className="img relative d-flex justify-content-center">
                    <div className="blur-left">
                        <img className="" src="./../images/banners/blur-left.png" />
                    </div>
                    <img className="banner" src={movie?.bannerUrl} alt="" />
                    <div className="blur-right">
                        <img className="" src="./../images/banners/blur-right.png" />
                    </div>
                </div>
            </div>

            {/* Modal hiển thị video */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe width="100%" height="100%"
                            src={movie?.trailerUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}

            <div className="movie-detail-content">
                <div className="movie-detail">
                    <img src={movie?.thumbnailUrl} alt="" />
                    <div className="detail">
                        <div className="detail-title d-flex gap-4 align-items-center">
                            <p className="text-black title">{movie?.title}</p>
                            <div className="classify">T18</div>
                        </div>
                        <div className="detail-section datetime">
                            <div className="d-flex align-items-center">
                                <img src="./../images/icons/clock.png" alt="" />
                                <p className="label">{movie?.duration} Phút</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src="./../images/icons/calendar.png" alt="" className="me-1" />
                                <p className="label">{movie?.releaseDate}</p>
                            </div>
                        </div>
                        <div className="detail-section">
                            <p className="label">Rate:</p>
                            <p className="text">{movie?.rate} star</p>
                        </div>
                        <div className="detail-section">
                            <p className="label">Quốc gia:</p>
                            <p className="text">{movie?.country}</p>
                        </div>
                        <div className="detail-section">
                            <p className="label">Đạo diễn:</p>
                            <p className="text">{movie?.director}</p>
                        </div>
                    </div>
                </div>

                {/* List movies showing */}
                <MoviesShowing />
                <div className="detail-schedule">
                    <div className="desc">
                        <div className="head d-flex">
                            <span className="block"></span>
                            <p className="">Nội dung phim</p>
                        </div>
                        <p className="mt-3">{movie?.movieDescription}</p>
                    </div>

                    <Schedule />
                </div>
            </div>

        </div>
    )
}

export default DetailPage;
