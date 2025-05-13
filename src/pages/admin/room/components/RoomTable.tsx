import { useEffect, useState } from "react";
import RoomModel from "../../../../models/RoomModel";
import "./roomTable.css"
import { findAll } from "../../../../api/RoomAPI";

type RoomTableProps = {
    onEdit: (room: RoomModel) => void;
    refreshSignal: boolean;
};

function RoomTable({ onEdit, refreshSignal }: RoomTableProps) {
    const [rooms, setRooms] = useState<RoomModel[]>([]);

    useEffect(() => {
        findAll().then(
            roomData => setRooms(roomData)
        ).catch(console.error);
    }, [refreshSignal]);

    const handleDelete = async (roomId: number) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa phim này?");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:8080/rooms/${roomId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Xóa thành công!");
                // Cập nhật lại danh sách sau khi xóa
                setRooms(prev => prev.filter(room => room.roomId !== roomId));
            } else {
                alert("Lỗi khi xóa phim.");
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
                                <td>{room.cinemaId}</td>
                                <td>{room.roomName}</td>
                                <td>{room.roomType}</td>
                                <td>{room.row * room.column} chỗ ngồi</td>
                                <td>{room.row}</td>
                                <td>{room.column}</td>
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

export default RoomTable;