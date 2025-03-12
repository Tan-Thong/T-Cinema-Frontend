import React, { use, useEffect, useState } from "react";
import "./position.css"
import CinemaModel from "../../../models/CinemaModel";
import { findAll } from "../../../api/CinemaAPI";

const Position = () => {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([])

    useEffect(() => {
        findAll().then(
            cinemaData => {
                setCinemas(cinemaData)
            }
        ).catch(

        )
    }, [])

    return (
        <div className="position">
            <div className="form-floating">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Toàn quốc</option>
                    <option value="1">TP Hồ Chí Minh</option>
                    <option value="2">Hà Nội</option>
                    <option value="3">Đà Nẵng</option>
                </select>
            </div>

            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Tất cả rạp</option>
                    {
                        cinemas.map((cinema) => (
                            <option value={cinema.cinemaId}>{cinema.cinemaName}</option>
                        ))
                    }8888
                </select>
            </div>
        </div>
    );
};

export default Position;