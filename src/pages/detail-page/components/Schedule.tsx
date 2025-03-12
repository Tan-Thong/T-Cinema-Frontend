import React, { useEffect, useState } from "react";
import "./schedule.css"
import Position from "./Position";
import { findByMovieAndDay } from "../../../api/ShowtimeAPI";
import ShowtimeModel from "../../../models/ShowtimeModel";

const Schedule = ({ movieID }: { movieID: number }) => {
    const [showtimes, setShowtimes] = useState<ShowtimeModel[]>([]); // State lưu danh sách rạp chiếu phim
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        findByMovieAndDay(movieID).then(
            showtimeData => {
                setShowtimes(showtimeData);
            }
        )
    }, [movieID]);

    return (
        <div className="schedule-wrapper">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="">Lịch chiếu</p>
            </div>

            <div className="shedule">
                <div className="list-day">
                    <div className="item">
                        <div className="title">Thứ Bảy</div>
                        <div className="day">08/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Chủ Nhật</div>
                        <div className="day">09/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Thứ Hai</div>
                        <div className="day">10/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Thứ Ba</div>
                        <div className="day">11/03</div>
                    </div>
                </div>

                <Position />
            </div>

            <div className="list-cinemas">
                {
                    showtimes.map((showtime) => (
                        <div className="cinema-item">
                            <p className="name">{showtime.cinemaName}</p>
                            <div className="time-wrapper">
                                <div className="room pe-5">{showtime.roomName}</div>
                                {
                                    showtime.showtimes.map((item) => (
                                        <div className="time">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Schedule;
