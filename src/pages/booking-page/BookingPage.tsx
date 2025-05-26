import React, { useState } from "react";
import Seats from "./components/Seats";
import MovieInfo from "./components/InfoBooking";
import "./bookingpage.css"
import SeatModel from "../../models/SeatModel";
import InfoBooking from "./components/InfoBooking";

const BookingPage: React.FC = (props) => {
    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);

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