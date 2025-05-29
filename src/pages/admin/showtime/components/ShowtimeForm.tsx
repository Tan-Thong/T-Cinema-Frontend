import { FormEvent, useEffect, useState } from "react";
import "./showtimeForm.css"
import CinemaModel from "../../../../models/CinemaModel";
import { getCinemas } from "../../../../api/CinemaAPI";
import ShowtimeModel from "../../../../models/ShowtimeModel";
import RoomModel from "../../../../models/RoomModel";
import { findRoomsByCinemaId } from "../../../../api/RoomAPI";
import MovieModel from "../../../../models/MovieModel";
import { findAllMovies } from "../../../../api/MovieAPI";

type ShowtimeFormProps = {
    showtime: ShowtimeModel | null;
    onSubmitDone: () => void;
    onCancel: () => void;
};

function ShowtimeForm({ showtime, onSubmitDone, onCancel }: ShowtimeFormProps) {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [rooms, setRooms] = useState<RoomModel[]>([]);
    const [cinemaId, setCinemaId] = useState<number | undefined>();
    const [roomId, setRoomId] = useState<number | undefined>();
    const [movieId, setMovieId] = useState<number | undefined>();
    const [showDate, setShowDate] = useState("");
    const [showTime, setShowTime] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        getCinemas().then(
            cinemaData => setCinemas(cinemaData)
        ).catch(console.error);

        findAllMovies().then(
            movieData => setMovies(movieData)
        ).catch(console.error);
    }, []);

    useEffect(() => {
        if (cinemaId) {
            findRoomsByCinemaId(cinemaId).then(
                roomData => setRooms(roomData)
            ).catch(console.error);
        } else {
            setRooms([]);
        }
    }, [cinemaId]);

    useEffect(() => {
        if (showtime) {
            setCinemaId(showtime.room?.cinema?.cinemaId);
            setRoomId(showtime.room?.roomId);
            setMovieId(showtime.movie?.movieId);
            setShowDate(showtime.showDate);
            setShowTime(showtime.showTime);
        } else {
            setCinemaId(undefined);
            setRoomId(undefined);
            setMovieId(undefined);
            setShowDate("");
            setShowTime("");
        }
    }, [showtime]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrors({}); // reset lỗi cũ

        const token = localStorage.getItem("token"); // lấy token từ localStorage

        const jsonData = {
            cinemaId,
            roomId,
            movieId,
            showDate,
            showTime
        };

        const url = showtime
            ? `https://t-cinema-backend.onrender.com/showtimes/${showtime.showtimeId}`
            : "https://t-cinema-backend.onrender.com/showtimes";

        const method = showtime ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // GỬI TOKEN
                },
                body: JSON.stringify(jsonData),
            });
            const data = await response.json();

            if (response.ok) {
                alert(showtime ? "Cập nhật thành công!" : "Thêm mới thành công!");
                onSubmitDone();
            } else {
                if (data.code === 1001 && data.result) {
                    setErrors(data.result); // Gán lỗi từ backend vào state errors
                } else {
                    alert(data.message || "Đăng ký thất bại!");
                }
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    };


    return (
        <form onSubmit={handleSubmit} className="cinema-form">
            <div className="form-section">
                <div className="input-wrapper">
                    <label className="form-label">Rạp:</label>
                    <select className="form-select"
                        style={{ width: "180px", height: "40px" }} value={cinemaId} onChange={(e) => setCinemaId(Number(e.target.value))}>
                        <option value="">-- Chọn rạp --</option>
                        {cinemas.map(cinema => (
                            <option key={cinema.cinemaId} value={cinema.cinemaId}>{cinema.cinemaName}</option>
                        ))}
                    </select>

                </div>

                <div className="input-wrapper">
                    <label className="form-label">Phòng:</label>
                    <select className="form-select"
                        style={{ width: "180px", height: "40px" }} value={roomId} onChange={(e) => setRoomId(Number(e.target.value))}>
                        <option value="">-- Chọn phòng --</option>
                        {rooms.map(room => (
                            <option key={room.roomId} value={room.roomId}>{room.roomName}</option>
                        ))}
                    </select>
                </div>

                <div className="input-wrapper">
                    <label className="form-label">Phim:</label>
                    <select className="form-select"
                        style={{ width: "180px", height: "40px" }} value={movieId} onChange={(e) => setMovieId(Number(e.target.value))}>
                        {movies.map(movie => (
                            <option key={movie.movieId} value={movie.movieId}>{movie.title}</option>
                        ))}
                    </select>

                </div>

                <div className="input-wrapper">
                    <label className="form-label">Ngày chiếu:</label>
                    <input type="date" className="form-control" value={showDate} onChange={(e) => setShowDate(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Suất chiếu:</label>
                    <div>
                        <input type="text" className="form-control" style={{ width: "100px" }} placeholder="Giờ chiếu" value={showTime} onChange={(e) => setShowTime(e.target.value)} />
                        {errors.showTime && <div className="text-danger">{errors.showTime}</div>}
                    </div>
                </div>
            </div>
            <div className="form-section">
                <button className="btn btn-success" style={{ width: "120px", height: "40px" }} type="submit" >Xác nhận</button>
                <button className="btn btn-secondary" style={{ width: "120px", height: "40px" }} type="button" onClick={onCancel}>Hủy</button>
            </div>
        </form>
    );
}

export default ShowtimeForm;
