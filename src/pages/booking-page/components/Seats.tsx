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

const Seats: React.FC = () => {
    const [seats, setSeats] = useState<SeatModel[]>([])

    useEffect(() => {
        findAllSeats().then(
            seatData => {
                setSeats(seatData);
            }
        )
    }, [])

    return (
        <div className="seats-wrapper">
            <div className="screen mb-5">
                <img src="/images/icons/screen.png" alt="Screen" />
            </div>

            {/* {seatLayout.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    {[...Array(section.rows)].map((_, rowIndex) => (
                        <div className="d-flex my-2" key={rowIndex}>
                            {[...Array(section.seatsPerRow)].map((_, seatIndex) => (
                                <img
                                    key={seatIndex}
                                    className="mx-2"
                                    src={`/images/icons/sofa-${section.type}.png`}
                                    alt={`Seat ${sectionIndex}-${rowIndex}-${seatIndex}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))} */}

            {seats.map((seat) => (
                <img
                    key={seat.seatId}
                    className="seat-icon mx-2"
                    src="/images/icons/sofa-vip.png"
                    alt={`Seat ${seat.seatId}`}
                    data-id={seat.seatId} // Gán ID ghế
                />
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
