import React from "react";
import Header from "../header-footer/header/Header";
import Footer from "../header-footer/footer/Footer";
import ListMovies from "./components/ListMovies";

const MoviesPage : React.FC = (props) => {
    return (
        <div className="main">
            <ListMovies />
        </div>
    )
}

export default MoviesPage;