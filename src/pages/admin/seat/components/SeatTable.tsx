import { useEffect, useState } from "react";
import "./seatTable.css"
import SeatModel from "../../../../models/SeatModel";
import { getSeats } from "../../../../api/SeatAPI";

function SeatTable() {
    const [seats, setSeats] = useState<SeatModel[]>([])

    useEffect(() => {
        getSeats().then(
            seatData => {
                setSeats(seatData);
            }
        )
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
                        <th scope="col">Phòng chiếu</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seats.map((seat) => (
                            <tr key={seat.seatId}>
                                <th scope="row">{seat.seatId}</th>
                                <td>{seat.seatRow}{seat.seatColumn}</td>
                                <td>{seat.seatRow}</td>
                                <td>{seat.seatColumn}</td>
                                <td>{seat.seatType}</td>
                                <td>1</td>
                                <td>{seat.status}</td>
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