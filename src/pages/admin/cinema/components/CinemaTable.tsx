import { useEffect, useState } from "react";
import CinemaModel from "../../../../models/CinemaModel";
import "./cinemaTable.css"
import { getCinemas } from "../../../../api/CinemaAPI";

type CinemaTableProps = {
    onEdit: (cinema: CinemaModel) => void;
    refreshSignal: boolean;
};

function CinemaTable({ onEdit, refreshSignal }: CinemaTableProps) {
    const [cinemas, setCinemas] = useState<CinemaModel[]>([]);

    useEffect(() => {
        getCinemas().then(
            cinemaData => setCinemas(cinemaData)
        ).catch(console.error);
    }, [refreshSignal]);

    const handleDelete = async (cinemaId: number) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa phim này?");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:8080/cinemas/${cinemaId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Xóa thành công!");
                // Cập nhật lại danh sách sau khi xóa
                setCinemas(prev => prev.filter(cinema => cinema.cinemaId !== cinemaId));
            } else {
                alert("Lỗi khi xóa phim.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    };

    return (
        <div className="cinema-table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên rạp</th>
                        <th scope="col">Thành phố</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cinemas.map((cinema) => (
                            <tr key={cinema.cinemaId}>
                                <th scope="row">{cinema.cinemaId}</th>
                                <td>{cinema.cinemaName}</td>
                                <td>{cinema.city}</td>
                                <td>{cinema.location}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button className="btn btn-warning" onClick={() => onEdit(cinema)}>Chỉnh sửa</button>
                                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(cinema.cinemaId)}>Xóa</button>
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

export default CinemaTable;