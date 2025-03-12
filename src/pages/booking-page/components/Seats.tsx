import React from "react";
import "./seats.css";

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
    return (
        <div className="seats-wrapper">
            <div className="screen mb-5">
                <img src="/images/icons/screen.png" alt="Screen" />
            </div>

            {seatLayout.map((section, sectionIndex) => (
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
            ))}

            <div className="note d-flex align-items-center justify-content-center gap-3 mt-4">
                {seatTypes.map((seat, index) => (
                    <div key={index} className="d-flex gap-3 align-items-center">
                        <img src={seat.img} alt={seat.label} />
                        <p>{seat.label}</p>
                    </div>
                ))}
            </div>

            {/* <div className="card shadow-sm p-3 bg-light text-dark">
                <img
                    src="/images/movies/thumbnail-interstellar.jpg"
                    alt="Interstellar"
                    className="card-img-top rounded"
                />
                <div className="card-body p-0 pt-3">
                    <h5 className="card-title fw-bold">Interstellar</h5>
                    <p className="mb-1"><strong>Thời gian:</strong> 118 phút</p>
                    <p className="mb-1"><strong>Rạp:</strong> T-Cinema Satra Củ Chi</p>
                    <p className="mb-1"><strong>Phòng:</strong> 2</p>
                    <p className="mb-1"><strong>Ngày:</strong> 26/02/2025</p>
                    <p className="mb-1"><strong>Suất chiếu:</strong> 17h30</p>
                    <p className="mb-1"><strong>Số ghế:</strong> G12</p>
                    <p className="fw-bold fs-5"><strong>Tổng:</strong> 120.000 đ</p>
                </div>
            </div> */}
        </div>
    );
};

export default Seats;
