import { useEffect, useState } from "react";
import RoomModel from "../../../../models/RoomModel";
import CinemaModel from "../../../../models/CinemaModel";
import "./roomTable.css"
import { findAll } from "../../../../api/RoomAPI";
import { getCinemas } from "../../../../api/CinemaAPI";

type RoomTableProps = {
    onEdit: (room: RoomModel) => void;
    refreshSignal: boolean;
};

function RoomTable({ onEdit, refreshSignal }: RoomTableProps) {
    const [rooms, setRooms] = useState<RoomModel[]>([]);
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        findAll().then(setRooms).catch(console.error);
        getCinemas().then(setCinemas).catch(console.error);
    }, [refreshSignal]);

    const handleDelete = async (roomId: number) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa phòng này?");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:8080/rooms/${roomId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                alert("Xóa thành công!");
                setRooms(prev => prev.filter(room => room.roomId !== roomId));
            } else {
                alert("Lỗi khi xóa phòng.");
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
                        <th scope="col">Loại phòng</th>
                        <th scope="col">Sức chứa</th>
                        <th scope="col">Số hàng ghế</th>
                        <th scope="col">Số cột ghế</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map((room) => (
                            <tr key={room.roomId}>
                                <th scope="row">{room.roomId}</th>
                                <td>{room.cinema?.cinemaName}</td>
                                <td>{room.roomName}</td>
                                <td>{room.roomType == 1 ? "2D" : "3D"}</td>
                                <td>{room.row * room.column} chỗ ngồi</td>
                                <td>{room.row}</td>
                                <td>{room.column}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button className="btn btn-warning" onClick={() => onEdit(room)}>Chỉnh sửa</button>
                                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(room.roomId)}>Xóa</button>
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

export default RoomTable;
