import { useEffect, useState } from "react";
import "./movieTable.css";
import MovieModel from "../../../../models/MovieModel";
import { findAllMovies } from "../../../../api/MovieAPI";

type MovieTableProps = {
    onEdit: (movie: MovieModel) => void;
    refreshSignal: boolean;
};

function MovieTable({ onEdit, refreshSignal }: MovieTableProps) {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        findAllMovies().then(
            movieData => setMovies(movieData)
        ).catch(console.error);
    }, [refreshSignal]);

    const handleDelete = async (movieId: number) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa phim này?");
        if (!confirm) return;

        try {
            const response = await fetch(`https://t-cinema-backend.onrender.com/movies/${movieId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                alert("Xóa thành công!");
                // Cập nhật lại danh sách sau khi xóa
                setMovies(prev => prev.filter(movie => movie.movieId !== movieId));
            } else {
                alert("Lỗi khi xóa phim.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    };

    return (
        <div className="movie-table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Banner</th>
                        <th scope="col">Tên phim</th>
                        <th scope="col">Ngày chiếu</th>
                        <th scope="col">Thời lượng</th>
                        <th scope="col">Quốc gia</th>
                        <th scope="col">Đạo diễn</th>
                        <th scope="col">Đánh giá</th>
                        <th scope="col">Trailer</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) => (
                            <tr key={movie.movieId}>
                                <th scope="row">{movie.movieId}</th>
                                <td><img src={`https://t-cinema-backend.onrender.com/${movie?.thumbnailUrl}`} alt="" style={{ height: "250px", borderRadius: "6px" }} /></td>
                                <td><img src={`https://t-cinema-backend.onrender.com/${movie?.bannerUrl}`} alt="" style={{ height: "250px", borderRadius: "6px" }} /></td>
                                <td>{movie.title}</td>
                                <td>{movie.releaseDate}</td>
                                <td>{movie.duration} phút</td>
                                <td>{movie.country}</td>
                                <td>{movie.director}</td>
                                <td>{movie.rate}</td>
                                <td>{movie.trailerUrl}</td>
                                <td>{movie.movieDescription}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button onClick={() => onEdit(movie)} className="btn btn-warning">Chỉnh sửa</button>
                                        <button onClick={() => handleDelete(movie.movieId)} className="btn btn-danger mt-2">Xóa</button>
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

export default MovieTable;