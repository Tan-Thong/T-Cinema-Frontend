import React, { useEffect, useState } from "react";
import "./movieinfo.css";
import { useLocation, useParams } from "react-router-dom";
import ShowtimeModel from "../../../models/ShowtimeModel";
import MovieModel from "../../../models/MovieModel";
import { findMovieByID } from "../../../api/MovieAPI";
import SeatModel from "../../../models/SeatModel";
import { getShowtime } from "../../../api/ShowtimeAPI";

const seatLayout = [
    { type: "standard", rows: 3, seatsPerRow: 12 },
    { type: "vip", rows: 4, seatsPerRow: 12 },
    { type: "couple", rows: 1, seatsPerRow: 12 }
];

const seatTypes = [
    { img: "/images/icons/sofa-standard.png", label: "Ghế thường" },
    { img: "/images/icons/sofa-vip.png", label: "Ghế VIP" },
    { img: "/images/icons/sofa-couple.png", label: "Ghế couple" },
    { img: "/images/icons/sofa-checked.png", label: "Ghế đang chọn" },
    { img: "/images/icons/sofa-disable.png", label: "Ghế đã đặt" }
];

interface MovieInfoProps {
    selectedSeats: SeatModel[];
}

const MovieInfo: React.FC<MovieInfoProps> = ({ selectedSeats }) => {

    const [showtime, setShowtime] = useState<ShowtimeModel>();
    const [movie, setMovie] = useState<MovieModel>();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const movieIdNumber = Number(queryParams.get("movieId"));
    const showtimeIdNumber = Number(queryParams.get("showtimeId"))
    useEffect(() => {
        findMovieByID(movieIdNumber).then(movie => {
            setMovie(movie)
        })

        getShowtime(showtimeIdNumber).then(showtime => {
            setShowtime(showtime)
        })
    }, []);

    return (
        <div className="card shadow-sm p-3 bg-light text-dark">
            <img
                src={`http://localhost:8080/${movie?.thumbnailUrl}`}
                alt="Interstellar"
                className="card-img-top rounded"
            />
            <div className="card-body p-0 pt-3">
                <h5 className="card-title fw-bold">{movie?.title}</h5>
                <p className="mb-1"><strong>Thời gian:</strong> {movie?.duration} phút</p>
                <p className="mb-1"><strong>Rạp:</strong> {showtime?.room?.cinema?.cinemaName}</p>
                <p className="mb-1"><strong>Phòng:</strong> {showtime?.room?.roomName}</p>
                <p className="mb-1"><strong>Ngày:</strong> {showtime?.showDate
                    ? new Intl.DateTimeFormat("vi-VN").format(new Date(showtime.showDate))
                    : "Ngày không hợp lệ"}</p>
                <p className="mb-1"><strong>Suất chiếu:</strong> {showtime?.showTime}</p>
                <p className="mb-1">
                    <strong>Số ghế:</strong> {selectedSeats.length > 0
                        ? selectedSeats.map(seat => `${seat.seatRow}${seat.seatColumn}`).join(", ")
                        : "Chưa chọn ghế"}
                </p>

                <p className="fw-bold fs-5">
                    <strong>Tổng:</strong> {selectedSeats.length * 120000} đ
                </p>

            </div>
        </div>
    );
};

export default MovieInfo;
