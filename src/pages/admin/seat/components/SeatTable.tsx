import "./seatTable.css"

function SeatTable() {

    return (
        <div className="seat-table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Số ghế</th>
                        <th scope="col">Hàng</th>
                        <th scope="col">Cột</th>
                        <th scope="col">Loại ghế</th>
                        <th scope="col">Phòng chiếu</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>A1</td>
                        <td>A</td>
                        <td>1</td>
                        <td>STANDARD</td>
                        <td>1</td>
                        <td>AVAILABLE</td>
                        <td className="edit">
                            <div className="btns mt-2">
                                <button className="btn btn-warning">Chỉnh sửa</button>
                                <button className="btn btn-danger mt-2">Xóa</button>
                            </div>
                        </td>
                    </tr>
<tr>
                        <th scope="row">1</th>
                        <td>A1</td>
                        <td>A</td>
                        <td>1</td>
                        <td>STANDARD</td>
                        <td>1</td>
                        <td>AVAILABLE</td>
                        <td className="edit">
                            <div className="btns mt-2">
                                <button className="btn btn-warning">Chỉnh sửa</button>
                                <button className="btn btn-danger mt-2">Xóa</button>
                            </div>
                        </td>
                    </tr>
                    {/* {
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
                                        <button onClick={() => onEdit(movie)} className="btn btn-warning">Chỉnh sửa</button>
                                        <button onClick={() => handleDelete(movie.movieId)} className="btn btn-danger mt-2">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    } */}
                </tbody>
            </table>
        </div>
    )
}

export default SeatTable;