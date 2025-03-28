import React, { useEffect, useState } from "react";
import "./seats.css";
import SeatModel from "../../../models/SeatModel";
import { findAllSeats } from "../../../api/SeatAPI";

const seatLayout = [
    { type: "standard", rows: 3, seatsPerRow: 12 },
    { type: "vip", rows: 4, seatsPerRow: 12 },
    { type: "couple", rows: 1, seatsPerRow: 12 }
];

const seatTypes = [
    { img: "/images/icons/sofa-standard.png", label: "Ghế thường" },
    { img: "/images/icons/sofa-vip.png", label: "Ghế VIP" },
    { img: "/images/icons/sofa-couple.png", label: "Ghế couple" },
    { img: "/images/icons/sofa-checked.png", label: "Ghế đang chọn" },
    { img: "/images/icons/sofa-disable.png", label: "Ghế đã đặt" }
];



interface Seat {
    seatId: number;
    seatRow: string;
    seatColumn: number;
    type: string;
    status: string;
}

const groupSeatsByRow = (seats: SeatModel[]): Record<string, SeatModel[]> => {
    return seats.reduce<Record<string, SeatModel[]>>((acc, seat) => {
        if (!acc[seat.seatRow]) {
            acc[seat.seatRow] = [];
        }
        acc[seat.seatRow].push(seat);
        return acc;
    }, {} as Record<string, SeatModel[]>); // Ép kiểu cho object ban đầu
};


const Seats: React.FC = () => {
    const [seats, setSeats] = useState<SeatModel[]>([])

    useEffect(() => {
        findAllSeats().then(
            seatData => {
                setSeats(seatData);
            }
        )
    }, [])

    const groupedSeats = groupSeatsByRow(seats);

    return (
        <div className="seats-wrapper text-center">
            <div className="screen mb-5">
                <img src="/images/icons/screen.png" alt="Screen" />
            </div>

            {Object.keys(groupedSeats).map((row) => (
                <div key={row} className="d-flex justify-content-center my-2">
                    {groupedSeats[row].map((seat) => (
                        <img
                            key={seat.seatId}
                            className="seat-icon mx-1"
                            src={`/images/icons/sofa-${seat.seatType.toLowerCase()}.png`}
                            alt={`Seat ${seat.seatId}`}
                        />
                    ))}
                </div>
            ))}

            <div className="note d-flex align-items-center justify-content-center gap-3 mt-4">
                {seatTypes.map((seat, index) => (
                    <div key={index} className="d-flex gap-3 align-items-center">
                        <img src={seat.img} alt={seat.label} />
                        <p>{seat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seats;