import React, { useEffect, useState } from "react";
import "./position.css";
import CinemaModel from "../../../models/CinemaModel";
import { findAll } from "../../../api/CinemaAPI";

const Position = () => {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("all");

    useEffect(() => {
        findAll().then(cinemaData => {
            setCinemas(cinemaData);
        }).catch(error => {
            console.error("Error fetching cinemas:", error);
        });
    }, []);

    // Lọc cinemas theo thành phố được chọn
    const filteredCinemas = selectedCity === "all" 
        ? cinemas 
        : cinemas.filter(cinema => cinema.city === selectedCity);

    return (
        <div className="position">
            <div className="form-floating">
                <select 
                    className="form-select" 
                    aria-label="Default select example"
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
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Tất cả rạp</option>
                    {filteredCinemas.map((cinema) => (
                        <option key={cinema.cinemaId} value={cinema.cinemaId}>
                            {cinema.cinemaName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Position;
