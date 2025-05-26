import React, { useEffect, useState } from "react";
import "./infoBooking.css";
import { Navigate, useLocation, useParams } from "react-router-dom";
import ShowtimeModel from "../../../models/ShowtimeModel";
import MovieModel from "../../../models/MovieModel";
import { findMovieByID } from "../../../api/MovieAPI";
import SeatModel from "../../../models/SeatModel";
import { getShowtime } from "../../../api/ShowtimeAPI";
import UserModel from "../../../models/UserModel";

interface InfoBookingProps {
    selectedSeats: SeatModel[];
}

const InfoBooking: React.FC<InfoBookingProps> = ({ selectedSeats }) => {

    const [showtime, setShowtime] = useState<ShowtimeModel>();
    const [movie, setMovie] = useState<MovieModel>();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const movieIdNumber = Number(queryParams.get("movieId"));
    const showtimeIdNumber = Number(queryParams.get("showtimeId"))

    const [myInfo, setMyInfo] = useState<UserModel | null>();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:8080/users/myInfo", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user info");
                }

                const resJson = await response.json();
                const result = resJson.result;
                setMyInfo(result);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        findMovieByID(movieIdNumber).then(movie => {
            setMovie(movie)
        })

        getShowtime(showtimeIdNumber).then(showtime => {
            setShowtime(showtime)
        })
    }, []);

    const handleBooking = async () => {
        if (!myInfo || !showtime || selectedSeats.length === 0) {
            alert("Vui lòng đăng nhập và chọn ghế!");
            return;
        }

        const bookingRequest = {
            userId: myInfo.email,
            showtimeId: showtime.showtimeId,
            seatIds: selectedSeats.map(seat => seat.seatId),
            totalPrice: selectedSeats.length * 120000,
            paymentMethod: "VNPAY"
        };

        console.log("📤 Sending booking data:", bookingRequest);

        try {
            const response = await fetch("http://localhost:8080/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bookingRequest)
            });

            if (!response.ok) {
                throw new Error("Đặt vé thất bại");
            }

            const data = await response.json();
            alert("Đặt vé thành công!");
            console.log("Booking created:", data);
        } catch (error) {
            console.error("Lỗi khi đặt vé:", error);
            alert("Đặt vé thất bại!");
        }
    };

    const getSeatPrice = (seatType: string): number => {
        switch (seatType.toUpperCase()) {
            case "STANDARD":
                return 80000;
            case "VIP":
                return 120000;
            case "COUPLE":
                return 150000;
            default:
                return 0;
        }
    };

    const totalPrice = selectedSeats.reduce(
        (total, seat) => total + getSeatPrice(seat.seatType),
        0
    );

    return (
        <div className="info-booking">
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
                        <strong>Tổng:</strong> {totalPrice.toLocaleString()} đ
                    </p>
                </div>
            </div>

            <div className="payment-wrapper">
                <p className="payment-title">Thanh toán</p>
                <div className="payment">
                    <button className="payment-method fill" onClick={handleBooking}>
                        <img src="/images/logo/logo-vnpay.svg" alt="" />
                    </button>
                    <div className="checkbox">
                        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                        <label htmlFor="myCheckbox">Chấp nhận điều khoản và thanh toán</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBooking;
