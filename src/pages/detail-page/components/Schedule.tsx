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
            const today = new Date();
            const [day, month] = selectedDay.split("-").map(Number);
            const formattedDate = `${today.getFullYear()}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            findByMovieAndDay(movieID, formattedDate)
                .then((showtimeData) => {
                    setShowtimes(showtimeData);
                })
                .catch((error) => {
                    console.error("Lỗi khi gọi API:", error);
                });
        }
    }, [selectedDay, movieID]);

    // Lọc theo thành phố và rạp
    const filteredShowtimes = showtimes.filter(showtime =>
        (selectedCity === "all" || showtime.cinemaCity === selectedCity) &&
        (selectedCinema === "all" || showtime.cinemaName === selectedCinema)
    );

    // Nhóm suất chiếu theo `cinemaName` và `roomName`
    const groupedShowtimes = filteredShowtimes.reduce((acc, showtime) => {
        const key = `${showtime.cinemaName}-${showtime.roomName}`;

        if (!acc[key]) {
            acc[key] = {
                cinemaName: showtime.cinemaName,
                roomName: showtime.roomName,
                showtimes: []
            };
        }

        acc[key].showtimes.push({
            showtimeId: showtime.showtimeId,
            showTime: showtime.showTime
        });

        console.log("Grouped Data:", acc);

        return acc;
        
    }, {} as Record<string, { cinemaName: string; roomName: string; showtimes: { showtimeId: number; showTime: string }[] }>);

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
                {Object.values(groupedShowtimes).length > 0 ? (
                    Object.values(groupedShowtimes).map((group, index) => (
                        <div key={index} className="cinema-item">
                            <p className="name">{group.cinemaName}</p>
                            <div className="time-wrapper">
                                <div className="room pe-5">{group.roomName}</div>
                                {group.showtimes.map((st) => (
                                    
                                    <a key={st.showtimeId} href={`/showtimes?movieId=${movieID}&showtimeId=${st.showtimeId}`}>
                                        <div className="time">{st.showTime}</div>
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
