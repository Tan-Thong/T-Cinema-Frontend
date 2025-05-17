import React, { useEffect, useState } from "react";
import "./seats.css";
import SeatModel from "../../../models/SeatModel";
import { getSeats } from "../../../api/SeatAPI";

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

interface SeatsProps {
    onSeatSelect: (selectedSeats: SeatModel[]) => void;
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

const Seats: React.FC<SeatsProps> = ({ onSeatSelect }) => {
    const [seats, setSeats] = useState<SeatModel[]>([])
    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);

    useEffect(() => {
        onSeatSelect(selectedSeats);
    }, [selectedSeats, onSeatSelect]);

    const handleSelectSeat = (seat: SeatModel) => {
        setSelectedSeats((prev) => {
            const isSelected = prev.find((s) => s.seatId === seat.seatId);
            return isSelected ? prev.filter((s) => s.seatId !== seat.seatId) : [...prev, seat];
        });
    };

    useEffect(() => {
        getSeats().then(
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
                    {groupedSeats[row].map((seat) => {
                        const isSelected = selectedSeats.some((s) => s.seatId === seat.seatId);
                        const isBooked = seat.status === "BOOKED"; // Kiểm tra xem ghế đã được đặt chưa

                        return (
                            <img
                                key={seat.seatId}
                                className="seat-icon mx-1"
                                src={
                                    isBooked
                                        ? "/images/icons/sofa-disable.png" // Nếu ghế đã đặt thì dùng ảnh này
                                        : isSelected
                                            ? "/images/icons/sofa-checked.png" // Nếu ghế được chọn thì dùng ảnh này
                                            : `/images/icons/sofa-${seat.seatType.toLowerCase()}.png` // Mặc định dùng ảnh ghế theo loại
                                }
                                alt={`Seat ${seat.seatId}`}
                                onClick={() => !isBooked && handleSelectSeat(seat)} // Chỉ cho phép chọn nếu ghế chưa được đặt
                                style={{ cursor: isBooked ? "not-allowed" : "pointer" }} // Thay đổi con trỏ khi ghế đã đặt
                            />
                        );
                    })}
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