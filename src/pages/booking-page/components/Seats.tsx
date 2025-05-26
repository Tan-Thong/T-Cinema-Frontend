import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./seats.css";
import SeatModel from "../../../models/SeatModel";
import { getSeats, getSeatsByRoomId } from "../../../api/SeatAPI";
import { getRoomById } from "../../../api/RoomAPI";
import RoomModel from "../../../models/RoomModel";

const seatTypes = [
    { img: "/images/icons/sofa-standard.png", label: "Ghế thường" },
    { img: "/images/icons/sofa-vip.png", label: "Ghế VIP" },
    { img: "/images/icons/sofa-checked.png", label: "Ghế đang chọn" },
    { img: "/images/icons/sofa-disable.png", label: "Ghế đã đặt" }
];

interface SeatsProps {
    onSeatSelect: (selectedSeats: SeatModel[]) => void;
}

const Seats: React.FC<SeatsProps> = ({ onSeatSelect }) => {
    const [seats, setSeats] = useState<SeatModel[]>([])
    const [room, setRoom] = useState<RoomModel | null>()
    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomIdNumber = Number(queryParams.get("roomId"))

    const getSeatPrice = (seatType: string): number => {
        switch (seatType.toUpperCase()) {
            case "STANDARD":
                return 80000;
            case "VIP":
                return 120000;
            default:
                return 0;
        }
    };


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
        getRoomById(roomIdNumber).then(
            roomData => {
                setRoom(roomData);
            }
        )

        getSeatsByRoomId(roomIdNumber).then(
            seatData => {
                setSeats(seatData);
            }
        )
    }, [])

    return (
        <div className="seats-wrapper text-center">
            <div className="screen mb-5">
                <img src="/images/icons/screen.png" alt="Screen" />
            </div>

            {room && [...Array(room.row)].map((_, rowIdx) => {
                const rowChar = String.fromCharCode(65 + rowIdx);
                return (
                    <div key={rowChar} className="d-flex justify-content-center my-2">
                        {[...Array(room.column)].map((_, colIdx) => {
                            const colNumber = colIdx + 1;

                            // Tìm ghế tương ứng trong danh sách từ API
                            const seat = seats.find(s =>
                                s.seatRow.toUpperCase() === rowChar.toUpperCase() &&
                                Number(s.seatColumn) === colNumber
                            );


                            if (!seat) {
                                return (
                                    <img
                                        key={`${rowChar}${colNumber}`}
                                        className="seat-icon mx-1"
                                        src="/images/icons/sofa-standard.png"
                                        style={{ opacity: 0.3 }}
                                        alt="Empty seat"
                                    />
                                );
                            }

                            const isSelected = selectedSeats.some(s => s.seatId === seat.seatId);

                            return (
                                <img
                                    key={seat.seatId}
                                    className="seat-icon mx-1"
                                    src={
                                        isSelected
                                            ? "/images/icons/sofa-checked.png"
                                            : `/images/icons/sofa-${seat.seatType.toLowerCase()}.png`
                                    }
                                    alt={`Seat ${seat.seatRow}${seat.seatColumn}`}
                                    title={`Ghế ${seat.seatRow}${seat.seatColumn} - ${getSeatPrice(seat.seatType).toLocaleString()}đ`}
                                    onClick={() => handleSelectSeat(seat)}
                                    style={{ cursor: "pointer" }}
                                />
                            );
                        })}
                    </div>
                );
            })}

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