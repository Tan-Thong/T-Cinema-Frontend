import React from "react";
import Seats from "./components/Seats";
import MovieInfo from "./components/MovieInfo";
import "./bookingpage.css"
import Payment from "./components/Payment";

const BookingPage: React.FC = (props) => {
    return (
        <div className="ticket-wrapper">
            <div className="step-box">
                <div className="step d-flex gap-3">
                    <div className="bar"></div>
                    <p className="step-title">Chọn ghế</p>
                </div>
                <div className="w-100">
                    <Seats />
                </div>
            </div>

            <div>
                <MovieInfo />
                <Payment />
            </div>
        </div>
    )
}

export default BookingPage;