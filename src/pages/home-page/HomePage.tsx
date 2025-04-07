import React from "react";
import "./homepage.css"
import Carousel from "./components/Carousel";
import MoviesCollection from "./components/MoviesCollection";
import Review from "./components/Review";

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