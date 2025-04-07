import { Form } from "react-router-dom";
import "./../adminpage.css";
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";

function AddMoviePage() {
    return (
        <div className="main">
            <div className="list">
                <MovieForm />
            </div>
        </div>
    )
}

export default AddMoviePage;