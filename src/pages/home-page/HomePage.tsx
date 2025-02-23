import React from "react";
import "./homepage.css"
import Carousel from "./components/Carousel";
import MoviesCollection from "./components/MoviesCollection";
import Review from "./components/Review";
import Header from "../header-footer/header/Header";
import Footer from "../header-footer/footer/Footer";

const HomePage : React.FC = (props) => {
    return (
        <div className="main" style={{marginTop: "-80px"}}>
            <Carousel />
            <MoviesCollection />
            <Review />
        </div>
    )
}

export default HomePage;