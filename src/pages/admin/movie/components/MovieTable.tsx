import { useEffect, useState } from "react";
import "./movieTable.css";
import MovieModel from "../../../../models/MovieModel";
import { findAllMovies } from "../../../../api/MovieAPI";

function MovieTable() {
    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {
        findAllMovies().then(
            movieData => setMovies(movieData)
        ).catch(console.error);
    }, []);

    const handleDelete = async (movieId: number) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa phim này?");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
                method: "DELETE",
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
                        <th scope="col">Độ tuổi</th>
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
                                <td><img src={`http://localhost:8080/${movie?.thumbnailUrl}`} alt="" style={{ height: "250px", borderRadius: "6px" }} /></td>
                                <td><img src={`http://localhost:8080/${movie?.bannerUrl}`} alt="" style={{ height: "250px", borderRadius: "6px" }} /></td>
                                <td>{movie.title}</td>
                                <td>{movie.releaseDate}</td>
                                <td>{movie.duration} phút</td>
                                <td>{movie.country}</td>
                                <td>{movie.director}</td>
                                <td>{movie.classification}</td>
                                <td>{movie.rate}</td>
                                <td>{movie.trailerUrl}</td>
                                <td>{movie.movieDescription}</td>
                                <td className="edit">
                                    <div className="btns mt-2">
                                        <button type="button" className="btn btn-add"> Chỉnh sửa </button>
                                        <button type="button" className="btn btn-add mt-2" onClick={() => handleDelete(movie.movieId)}> Xóa </button>
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