import React from "react";
import "./moviescollection.css"
import Movie from "./Movie";

function MoviesCollection() {
    return (
        <div className="movies-collection">
            <div className="action">
                <div className="head d-flex">
                    <span className="block"></span>
                    <p className="">Phim</p>
                </div>
                <div className="d-flex btns px-3">
                    <div className="px-3">Phim đang chiếu</div>
                    <div className="px-3">Phim sắp chiếu</div>
                </div>
            </div>
            <div className="movies-wrapper">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
            <a className="d-flex justify-content-center pt-5" href="">
                <div className="see-more">Xem thêm</div>
            </a>
        </div>
    );
}

export default MoviesCollection;