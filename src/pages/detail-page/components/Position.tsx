import React, { useEffect, useState } from "react";
import "./position.css";
import CinemaModel from "../../../models/CinemaModel";
import { getCinemas } from "../../../api/CinemaAPI";

interface PositionProps {
    selectedCity: string;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
    selectedCinema: string;
    setSelectedCinema: React.Dispatch<React.SetStateAction<string>>;
}

const Position: React.FC<PositionProps> = ({ selectedCity, setSelectedCity, selectedCinema, setSelectedCinema }) => {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);

    useEffect(() => {
        getCinemas().then(cinemaData => {
            setCinemas(cinemaData);
        }).catch(error => {
            console.error("Error fetching cinemas:", error);
        });
    }, []);

    const filteredCinemas = selectedCity === "all" 
        ? cinemas 
        : cinemas.filter(cinema => cinema.city === selectedCity);

    // Reset selectedCinema nếu nó không còn trong danh sách sau khi đổi thành phố
    useEffect(() => {
        if (!filteredCinemas.some(cinema => String(cinema.cinemaName) === selectedCinema)) {
            setSelectedCinema("all");
        }
    }, [selectedCity, cinemas]); // Chạy lại khi đổi thành phố hoặc danh sách rạp thay đổi

    return (
        <div className="position">
            <div className="form-floating">
                <select 
                    className="form-select" 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    <option value="all">Toàn quốc</option>
                    <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
            </div>

            <div className="form-floating">
                <select 
                    className="form-select"
                    value={selectedCinema}
                    onChange={(e) => setSelectedCinema(e.target.value)}
                >
                    <option value="all">Tất cả rạp</option>
                    {filteredCinemas.map((cinema) => (
                        <option key={cinema.cinemaId} value={String(cinema.cinemaName)}>
                            {cinema.cinemaName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Position;
