import React from "react";
import "./listmovies.css"
import Movie from "../../home-page/components/Movie";
function ListMovies() {
    return (
        <div className="list-movies">
            <div className="buttons">
                <button>PHIM ĐANG CHIẾU</button>
                <button>PHIM SẮP CHIẾU</button>
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
        </div>
    );
}

export default ListMovies;