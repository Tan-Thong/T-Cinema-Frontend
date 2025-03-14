import React, { useEffect, useState } from "react";
import "./schedule.css";
import Position from "./Position";
import { findByMovieAndDay } from "../../../api/ShowtimeAPI";
import ShowtimeModel from "../../../models/ShowtimeModel";

const Schedule = ({ movieID }: { movieID: number }) => {
    const [showtimes, setShowtimes] = useState<ShowtimeModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [startIndex, setStartIndex] = useState(0); // Vị trí bắt đầu của carousel
    const [days, setDays] = useState<{ day: string; title: string }[]>([]);

    useEffect(() => {
        findByMovieAndDay(movieID).then((showtimeData) => {
            setShowtimes(showtimeData);
        });
    }, [movieID]);

    useEffect(() => {
        const dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const today = new Date();

        const next7Days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(today.getDate() + i);
            return {
                day: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
                title: i === 0 ? "Hôm Nay" : dayNames[date.getDay()],
            };
        });

        setDays(next7Days);
    }, []);

    // Xử lý nút chuyển tiếp
    const nextSlide = () => {
        if (startIndex < days.length - 5) setStartIndex(startIndex + 1);
    };

    const prevSlide = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    return (
        <div className="schedule-wrapper">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="">Lịch chiếu</p>
            </div>

            <div className="schedule">
                <div className="list-day">
                    <button className="nav-btn left" onClick={prevSlide} disabled={startIndex === 0}>&lt;</button>
                    {days.slice(startIndex, startIndex + 5).map((item, index) => (
                        <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                            <div className="title">{item.title}</div>
                            <div className="day">{item.day}</div>
                        </div>
                    ))}
                    <button className="nav-btn right" onClick={nextSlide} disabled={startIndex >= days.length - 5}>&gt;</button>
                </div>

                <Position />
            </div>


            {/* Danh sách rạp chiếu */}
            <div className="list-cinemas">
                {showtimes.map((showtime, index) => (
                    <div key={index} className="cinema-item">
                        <p className="name">{showtime.cinemaName}</p>
                        <div className="time-wrapper">
                            <div className="room pe-5">{showtime.roomName}</div>
                            {showtime.showtimes.map((item, idx) => (
                                <a href="/booking"><div key={idx} className="time">{item}</div></a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
