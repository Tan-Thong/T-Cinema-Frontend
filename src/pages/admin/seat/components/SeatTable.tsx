import { useEffect, useState } from "react";
import "./seatTable.css"
import SeatShowtimeModel from "../../../../models/SeatShowtimeModel";
import { getSeatShowtimes } from "../../../../api/SeatShowtimeAPI";

function SeatTable() {

    const [seatShowtimes, setSeatShowtimes] = useState<SeatShowtimeModel[]>([])

    useEffect(() => {
        getSeatShowtimes().then(
            seatShowtimeData => {
                setSeatShowtimes(seatShowtimeData);
            }
        )
        console.log(seatShowtimes)
    }, [])

    return (
        <div className="seat-table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Số ghế</th>
                        <th scope="col">Hàng</th>
                        <th scope="col">Cột</th>
                        <th scope="col">Loại ghế</th>
                        <th scope="col">ID Phòng</th>
                        <th scope="col">Suất chiếu</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seatShowtimes.map((seatShowtime) => (
                            <tr key={seatShowtime.seat.seatId}>
                                <th scope="row">{seatShowtime.seat.seatId}</th>
                                <td>{seatShowtime.seat.seatRow}{seatShowtime.seat.seatColumn}</td>
                                <td>{seatShowtime.seat.seatRow}</td>
                                <td>{seatShowtime.seat.seatColumn}</td>
                                <td>{seatShowtime.seat.seatType}</td>
                                <td>{seatShowtime.roomId}</td>
                                <td>{seatShowtime.showtime.showTime}</td>
                                <td>{seatShowtime.seatStatus}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button className="btn btn-warning">Chỉnh sửa</button>
                                        <button className="btn btn-danger mt-2">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SeatTable;