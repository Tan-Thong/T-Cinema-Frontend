import React, { useEffect, useState } from "react";
import Seats from "./components/Seats";
import MovieInfo from "./components/InfoBooking";
import "./bookingpage.css"
import SeatModel from "../../models/SeatModel";
import InfoBooking from "./components/InfoBooking";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage: React.FC = (props) => {
    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", { state: { from: location }, replace: true });
            return;
        }

        fetch("https://t-cinema-backend.onrender.com/auth/introspect", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        })
            .then(res => {
                if (!res.ok) throw new Error("Lỗi server");
                return res.json();
            })
            .then(data => {
                if (data.result?.valid) {
                    setLoading(false);
                } else {
                    localStorage.removeItem("token");
                    navigate("/login", { state: { from: location }, replace: true });
                }
            })
            .catch(() => {
                localStorage.removeItem("token");
                navigate("/login", { state: { from: location }, replace: true });
            });
    }, [navigate, location]);

    if (loading) {
        return <div>Đang xác thực...</div>;
    }

    return (
        <div className="ticket-wrapper">
            <div className="step-box">
                <div className="step d-flex gap-3">
                    <div className="bar"></div>
                    <p className="step-title">Chọn ghế</p>
                </div>
                <div className="w-100">
                    <Seats onSeatSelect={setSelectedSeats} />
                </div>
            </div>

            <div>
                <InfoBooking selectedSeats={selectedSeats} />
            </div>
        </div>
    )
}

export default BookingPage;