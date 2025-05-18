import { FormEvent, useEffect, useState } from "react";
import "./roomForm.css"
import CinemaModel from "../../../../models/CinemaModel";
import { getCinemas } from "../../../../api/CinemaAPI";
import RoomModel from "../../../../models/RoomModel";

type RoomFormProps = {
    room: RoomModel | null;
    onSubmitDone: () => void;
    onCancel: () => void;
};

function RoomForm({ room, onSubmitDone, onCancel }: RoomFormProps) {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);

    useEffect(() => {
        getCinemas().then(
            cinemaData => setCinemas(cinemaData)
        ).catch(console.error);
    }, []);

    useEffect(() => {
        if (!room && cinemas.length > 0) {
            setCinemaId(cinemas[0].cinemaId);
        }
    }, [cinemas, room]);


    const [roomName, setRoomName] = useState("");
    const [cinemaId, setCinemaId] = useState<number | null>();
    const [cinema, setCinema] = useState<CinemaModel | null>();
    const [row, setRow] = useState(0);
    const [column, setColumn] = useState(0);
    const [roomType, setRoomType] = useState(1);

    useEffect(() => {
        if (room) {
            setRoomName(room.roomName);
            setCinema(room.cinema);
            setRow(room.row);
            setColumn(room.column);
            setRoomType(room.roomType);
        } else {
            setRoomName("");
            setRow(0);
            setColumn(0);
            setRoomType(1);
        }
    }, [room]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const jsonData = {
            roomName,
            cinemaId,
            row,
            column,
            roomType,
        };
        console.log("Submitting:", jsonData);
        const url = room ? `http://localhost:8080/rooms/${room.roomId}` : "http://localhost:8080/rooms";
        const method = room ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                alert(room ? "Cập nhật thành công!" : "Thêm mới thành công!");
                onSubmitDone();
            } else {
                alert("Lỗi khi gửi dữ liệu.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="room-form">
            <div className="form-section">
                <div className="input-wrapper">
                    <label className="form-label">Tên phòng:</label>
                    <input type="text" className="form-control" style={{ width: "300px" }} placeholder="Tên phòng" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Rạp:</label>
                    <select
                        className="form-select"
                        style={{ width: "180px" }}
                        value={cinema?.cinemaId} onChange={(e) => setCinemaId(Number(e.target.value))}
                    >
                        {
                            cinemas.map((cinema) => (
                                <option key={cinema.cinemaId} value={cinema.cinemaId}>{cinema.cinemaName}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="input-wrapper">
                    <label className="form-label">Loại phòng:</label>
                    <select
                        className="form-select"
                        style={{ width: "80px" }}
                        value={roomType} onChange={(e) => setRoomType(Number(e.target.value))}
                    >
                        <option value="1">2D</option>
                        <option value="2">3D</option>
                    </select>
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Số hàng ghế:</label>
                    <input type="text" className="form-control" style={{ width: "100px" }} placeholder="Số hàng" value={row} onChange={(e) => setRow(Number(e.target.value))} />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Số cột ghế:</label>
                    <input type="text" className="form-control" style={{ width: "100px" }} placeholder="Số cột" value={column} onChange={(e) => setColumn(Number(e.target.value))} />
                </div>
            </div>
            <div className="form-section">
                <button className="btn btn-success" style={{ width: "120px", height: "40px" }} type="submit" >Xác nhận</button>
                <button className="btn btn-secondary" style={{ width: "120px", height: "40px" }} type="button" onClick={onCancel}>Hủy</button>
            </div>
        </form>
    );
}

export default RoomForm;
