import "./cinemaTable.css"

function CinemaTable() {

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
                    <tr>
                        <th scope="row">1</th>
                        <td>T-Cinema Củ Chi</td>
                        <td>TP.HCM</td>
                        <td>1876247kjsdjhfbhjbvhjbas</td>
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

export default CinemaTable;