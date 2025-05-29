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
    const token = localStorage.getItem("token");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
        setErrors({}); // reset lỗi cũ

        const jsonData = {
            cinemaName,
            city,
            location
        };

        const url = cinema ? `https://t-cinema-backend.onrender.com/cinemas/${cinema.cinemaId}` : "https://t-cinema-backend.onrender.com/cinemas";
        const method = cinema ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(jsonData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(cinema ? "Cập nhật thành công!" : "Thêm mới thành công!");
                onSubmitDone();
            } else {
                if (data.code === 1001 && data.result) {
                    setErrors(data.result); // Gán lỗi từ backend vào state errors
                } else {
                    alert(data.message || "Đăng ký thất bại!");
                }
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
                    <div>
                        <input type="text" className="form-control" style={{ width: "300px" }} placeholder="Tên rạp" value={cinemaName} onChange={(e) => setCinemaName(e.target.value)} />
                        {errors.cinemaName && <div className="text-danger">{errors.cinemaName}</div>}
                    </div>
                </div>
                <div className="input-wrapper">
                    <label className="form-label">Thành phố:</label>
                    <select
                        className="form-select"
                        style={{ width: "180px", height: "40px"}}
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
                    <div>
                        <input type="text" className="form-control" style={{ width: "550px" }} placeholder="Địa chỉ" value={location} onChange={(e) => setLocation(e.target.value)} />
                        {errors.location && <div className="text-danger">{errors.location}</div>}
                    </div>
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
