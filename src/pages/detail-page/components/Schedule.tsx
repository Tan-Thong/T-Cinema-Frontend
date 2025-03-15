import React, { useEffect, useState } from "react";
import "./schedule.css";
import Position from "./Position";
import { findByMovieAndDay } from "../../../api/ShowtimeAPI";
import ShowtimeModel from "../../../models/ShowtimeModel";

const Schedule = ({ movieID }: { movieID: number }) => {
    const [showtimes, setShowtimes] = useState<ShowtimeModel[]>([]);
    const [selectedDay, setSelectedDay] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("all");
    const [selectedCinema, setSelectedCinema] = useState<string>("all");
    const [startIndex, setStartIndex] = useState(0);
    const [days, setDays] = useState<{ day: string; title: string }[]>([]);

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
        setSelectedDay(next7Days[0].day);
    }, []);

    // Gọi API khi `selectedDay` thay đổi
    useEffect(() => {
        if (selectedDay) {
            // Chuyển định dạng từ "dd-MM" sang "yyyy-MM-dd"
            const today = new Date();
            const [day, month] = selectedDay.split("-").map(Number);
            const formattedDate = `${today.getFullYear()}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            // console.log("📡 Gọi API với:", { movieID, selectedDay: formattedDate });

            findByMovieAndDay(movieID, formattedDate)
                .then((showtimeData) => {
                    setShowtimes(showtimeData);
                })
                .catch((error) => {
                    console.error("Lỗi khi gọi API:", error);
                });
        }
    }, [selectedDay, movieID]);

    const filteredShowtimes = showtimes.filter(showtime =>
        (selectedCity === "all" || showtime.cinemaCity === selectedCity) &&
        (selectedCinema === "all" || showtime.cinemaName === selectedCinema)
    );

    return (
        <div className="schedule-wrapper">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="">Lịch chiếu</p>
            </div>

            <div className="schedule">
                <div className="list-day">
                    <button className="nav-btn left" onClick={() => setStartIndex(Math.max(0, startIndex - 1))}>&lt;</button>
                    {days.slice(startIndex, startIndex + 5).map((item, index) => (
                        <div key={index} className={`item ${item.day === selectedDay ? "active" : ""}`}
                            onClick={() => setSelectedDay(item.day)}>
                            <div className="title">{item.title}</div>
                            <div className="day">{item.day}</div>
                        </div>
                    ))}
                    <button className="nav-btn right" onClick={() => setStartIndex(Math.min(days.length - 5, startIndex + 1))}>&gt;</button>
                </div>

                <Position
                    selectedCity={selectedCity} setSelectedCity={setSelectedCity}
                    selectedCinema={selectedCinema} setSelectedCinema={setSelectedCinema}
                />
            </div>

            <div className="list-cinemas">
                {filteredShowtimes.length > 0 ? (
                    filteredShowtimes.map((showtime, index) => (
                        <div key={index} className="cinema-item">
                            <p className="name">{showtime.cinemaName}</p>
                            <div className="time-wrapper">
                                <div className="room pe-5">{showtime.roomName}</div>
                                {showtime.showtimes.map((item, idx) => (
                                    <a key={idx} href={`/booking?movieId=${movieID}&showtimeId=${showtime.showtimeId}`}>
                                        <div className="time">{item}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="list-null">Không có lịch chiếu</div>
                )}
            </div>
        </div>
    );
};

export default Schedule;
