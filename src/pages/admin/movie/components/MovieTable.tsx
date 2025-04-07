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

    return (
        <div className="movie-table-wrapper">
            <div className="add-search px-5">
                <div className="d-flex" style={{height: "100%", alignItems: "center"}}>
                    <a href="add-movies"><button className="btn btn-add">Thêm phim mới</button></a>
                    <div className="search-wrapper">
                        <div className="search-box">
                            <i className="fas fa-search search-icon"></i>
                            <input type="text" className="form-control search-input" placeholder="Search anything..." />
                            <button className="btn search-button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <button type="button" className="btn btn-add"> Chỉnh sửa </button>
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