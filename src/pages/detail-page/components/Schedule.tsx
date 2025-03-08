import React from "react";
import "./schedule.css"

const Schedule = () => {
    return (
        <div className="schedule-wrapper">
            <div className="head d-flex">
                <span className="block"></span>
                <p className="">Lịch chiếu</p>
            </div>

            <div className="shedule">
                <div className="list-day">
                    <div className="item">
                        <div className="title">Thứ Bảy</div>
                        <div className="day">08/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Chủ Nhật</div>
                        <div className="day">09/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Thứ Hai</div>
                        <div className="day">10/03</div>
                    </div>
                    <div className="item">
                        <div className="title">Thứ Ba</div>
                        <div className="day">11/03</div>
                    </div>
                </div>

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
                            <option selected>Toàn quốc</option>
                            <option value="1">TP Hồ Chí Minh</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Đà Nẵng</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="list-cinemas">
                <div className="cinema-item">
                    <p className="name">T-Cinema Kinh Dương Vương</p>
                    <div className="time-wrapper">
                        <div className="room pe-5">2D Lồng tiếng</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                    </div>
                </div>

                <div className="cinema-item">
                    <p className="name">T-Cinema Kinh Dương Vương</p>
                    <div className="time-wrapper">
                        <div className="room pe-5">2D Lồng tiếng</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                    </div>
                </div>

                <div className="cinema-item">
                    <p className="name">T-Cinema Kinh Dương Vương</p>
                    <div className="time-wrapper">
                        <div className="room pe-5">2D Lồng tiếng</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                    </div>
                </div>

                <div className="cinema-item">
                    <p className="name">T-Cinema Kinh Dương Vương</p>
                    <div className="time-wrapper">
                        <div className="room pe-5">2D Lồng tiếng</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                    </div>
                </div>

                <div className="cinema-item">
                    <p className="name">T-Cinema Kinh Dương Vương</p>
                    <div className="time-wrapper">
                        <div className="room pe-5">2D Lồng tiếng</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                        <div className="time">11:45</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
