import { useEffect, useState } from "react";
import "./showtimeTable.css"
import ShowtimeModel from "../../../../models/ShowtimeModel";
import { getShowtimes } from "../../../../api/ShowtimeAPI";

type ShowtimeTableProps = {
    onEdit: (showtime: ShowtimeModel) => void;
    refreshSignal: boolean;
};

function ShowtimeTable({ onEdit, refreshSignal }: ShowtimeTableProps) {
    const [showtimes, setShowtimes] = useState<ShowtimeModel[]>([]);

    useEffect(() => {
        getShowtimes().then(setShowtimes).catch(console.error);
    }, [refreshSignal]);

    const handleDelete = async (showtimeId: number) => {
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa suất chiếu này?");
        if (!confirmDelete) return;

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`http://localhost:8080/showtimes/${showtimeId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                alert("Xóa thành công!");
                setShowtimes(prev => prev.filter(showtime => showtime.showtimeId !== showtimeId));
            } else {
                alert("Lỗi khi xóa suất chiếu.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    };

    return (
        <div className="seat-table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên rạp</th>
                        <th scope="col">Tên phòng</th>
                        <th scope="col">Tên phim</th>
                        <th scope="col">Ngày chiếu</th>
                        <th scope="col">Suất chiếu</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showtimes.map((showtime) => (
                            <tr key={showtime.showtimeId}>
                                <th scope="row">{showtime.showtimeId}</th>
                                <td>{showtime.room?.cinema?.cinemaName}</td>
                                <td>{showtime.room?.roomName}</td>
                                <td>{showtime.movie?.title}</td>
                                <td>{showtime.showDate}</td>
                                <td>{showtime.showTime}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button className="btn btn-warning" onClick={() => onEdit(showtime)}>Chỉnh sửa</button>
                                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(showtime.showtimeId)}>Xóa</button>
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

export default ShowtimeTable;
