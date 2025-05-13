import { FormEvent, useEffect, useState } from "react";
import "./cinemaForm.css"
import CinemaModel from "../../../../models/CinemaModel";

type CinemaFormProps = {
    cinema: CinemaModel | null;
    onSubmitDone: () => void;
    onCancel: () => void;
};

function CinemaForm({ cinema, onSubmitDone, onCancel }: CinemaFormProps) {
    const [cinemaName, setCinemaName] = useState("");
    const [city, setCity] = useState("TP Hồ Chí Minh");
    const [location, setLocation] = useState("");

    useEffect(() => {
        if (cinema) {
            setCinemaName(cinema.cinemaName);
            setCity(cinema.city);
            setLocation(cinema.location);
        } else {
            setCinemaName("");
            setCity("TP Hồ Chí Minh");
            setLocation("");
        }
    }, [cinema]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const jsonData = {
            cinemaName,
            city,
            location
        };

        const url = cinema ? `http://localhost:8080/cinemas/${cinema.cinemaId}` : "http://localhost:8080/cinemas";
        const method = cinema ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                alert(cinema ? "Cập nhật thành công!" : "Thêm mới thành công!");
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
        <form onSubmit={handleSubmit} className="cinema-form">
            <div className="form-section">
                <div className="input-wrapper">
                    <label className="form-label">Tên rạp:</label>
                    <input type="text" className="form-control" style={{ width: "300px" }} placeholder="Tên rạp" value={cinemaName} onChange={(e) => setCinemaName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Thành phố:</label>
                    <select
                        className="form-select"
                        style={{ width: "180px" }}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>

                </div>
                <div className="input-wrapper">
                    <label className="form-label">Địa chỉ:</label>
                    <input type="text" className="form-control" style={{ width: "550px" }} placeholder="Địa chỉ" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
            </div>
            <div className="form-section">
                <button className="btn btn-success" style={{ width: "120px", height: "40px" }} type="submit" >Xác nhận</button>
                <button className="btn btn-secondary" style={{ width: "120px", height: "40px" }} type="button" onClick={onCancel}>Hủy</button>
            </div>
        </form>
    );
}

export default CinemaForm;
