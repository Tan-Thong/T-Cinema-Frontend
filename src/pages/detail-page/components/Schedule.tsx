import React, { useEffect, useState } from "react";
import "./schedule.css";
import Position from "./Position";
import { getShowtimes, getShowtimesByMovieAndDate } from "../../../api/ShowtimeAPI";
import ShowtimeModel from "../../../models/ShowtimeModel";

const Schedule = ({ movieID }: { movieID: number }) => {
    const [showtimes, setShowtimes] = useState<ShowtimeModel[]>([]);
    const [selectedDay, setSelectedDay] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("all");
    const [selectedCinema, setSelectedCinema] = useState<string>("all");
    const [startIndex, setStartIndex] = useState(0);
    const [days, setDays] = useState<{ day: string; title: string }[]>([]);

    // Lọc theo thành phố và rạp
    const filteredShowtimes = showtimes.filter(showtime =>
        (selectedCity === "all" || showtime.room?.cinema?.city === selectedCity) &&
        (selectedCinema === "all" || showtime.room?.cinema?.cinemaName === selectedCinema)
    );

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
        setSelectedDay(next7Days[0].day); // đặt ngày mặc định
    }, []); // Chỉ chạy 1 lần

    useEffect(() => {
        if (selectedDay) {
            const year = new Date().getFullYear();
            const [day, month] = selectedDay.split('-');
            const fullDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

            getShowtimesByMovieAndDate(movieID, fullDate)
                .then(setShowtimes)
                .catch(console.error);
        }
    }, [movieID, selectedDay]);

    const groupedShowtimes = filteredShowtimes.reduce((acc, showtime) => {
        const cinemaName = showtime.room?.cinema?.cinemaName ?? "";
        const roomName = showtime.room?.roomName ?? "";
        const roomId = showtime.room?.roomId ?? 0;
        const key = `${cinemaName}-${roomName}`;

        if (!acc[key]) {
            acc[key] = {
                cinemaName,
                roomName,
                roomId,
                times: [],
                movieID: movieID,
            };
        }

        acc[key].times.push({
            showtimeId: showtime.showtimeId,
            time: showtime.showTime,
        });

        return acc;
    }, {} as Record<string, {
        cinemaName: string;
        roomName: string;
        roomId: number;
        times: { showtimeId: number; time: string }[];
        movieID: number;
    }>);


    return (
        <div className="schedule-wrapper">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="" style={{color: "#252422"}}>Lịch chiếu</p>
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
                <div className="list-cinemas">
                    {Object.values(groupedShowtimes).length > 0 ? (
                        Object.values(groupedShowtimes).map((group, index) => (
                            <div key={index} className="cinema-item">
                                <p className="name">{group.cinemaName}</p>
                                <div className="time-wrapper">
                                    <div className="room pe-5">{group.roomName}</div>
                                    {group.times.map(time => (
                                        <a key={time.showtimeId} href={`/showtimes?movieId=${group.movieID}&roomId=${group.roomId}&showtimeId=${time.showtimeId}`}>
                                            <div className="time">{time.time}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="cinema-item" style={{fontSize: "1.4em"}}>Không có suất chiếu</div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Schedule;
