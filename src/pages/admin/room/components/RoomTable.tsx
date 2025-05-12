import "./roomTable.css"

function RoomTable() {

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
                    <tr>
                        <th scope="row">1</th>
                        <td>T-Cinema Củ Chi</td>
                        <td>Phòng số 1</td>
                        <td>2D</td>
                        <td>{8 * 12} chỗ ngồi</td>
                        <td>8</td>
                        <td>12</td>
                        <td className="edit">
                            <div className="btns mt-2">
                                <button className="btn btn-warning">Chỉnh sửa</button>
                                <button className="btn btn-danger mt-2">Xóa</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>T-Cinema Củ Chi</td>
                        <td>Phòng số 1</td>
                        <td>2D</td>
                        <td>{8 * 12} chỗ ngồi</td>
                        <td>8</td>
                        <td>12</td>
                        <td className="edit">
                            <div className="btns mt-2">
                                <button className="btn btn-warning">Chỉnh sửa</button>
                                <button className="btn btn-danger mt-2">Xóa</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>T-Cinema Củ Chi</td>
                        <td>Phòng số 1</td>
                        <td>2D</td>
                        <td>{8 * 12} chỗ ngồi</td>
                        <td>8</td>
                        <td>12</td>
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

export default RoomTable;