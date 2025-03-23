import MovieModel from "../models/MovieModel";
import Movie from "../models/MovieModel";
import MyRequest from "./MyRequest";

export async function findAllMovies() : Promise<Movie[]> {
    const result : Movie[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/movies";

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {
        
        result.push({
            movieId : response[key].movieId,
            title : response[key].title,
            country : response[key].country,
            director : response[key].director,
            duration : response[key].duration,
            releaseDate : response[key].releaseDate,
            thumbnailUrl : response[key].thumbnailUrl,
            bannerUrl : response[key].bannerUrl,
            trailerUrl : response[key].trailerUrl,
            movieDescription : response[key].movieDescription,
            rate : response[key].rate,
        });
    }

    return result;
}

export async function findMoviesByIdNot(movieID: number) : Promise<Movie[]> {
    const result : Movie[] = [];
    // EndPoint
    const endPoint : string = `http://localhost:8080/movies/not/${movieID}`;

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {
        
        result.push({
            movieId : response[key].movieId,
            title : response[key].title,
            country : response[key].country,
            director : response[key].director,
            duration : response[key].duration,
            releaseDate : response[key].releaseDate,
            thumbnailUrl : response[key].thumbnailUrl,
            bannerUrl : response[key].bannerUrl,
            trailerUrl : response[key].trailerUrl,
            movieDescription : response[key].movieDescription,
            rate : response[key].rate,
        });
    }

    return result;
}

export async function findMovieByID(movieID: number): Promise<MovieModel> {
    // Endpoint
    const endPoint: string = `http://localhost:8080/movies/${movieID}`;

    const result : Movie = getDefaultMovie();

    try {
        // Gửi request và nhận dữ liệu
        const response = await MyRequest(endPoint);

        if (!response) {
            console.warn("Không tìm thấy dữ liệu, trả về giá trị mặc định.");
            return getDefaultMovie(); // Trả về giá trị mặc định
        }

        // Trả về một đối tượng ProductModel từ dữ liệu API
        return {
            movieId : response.movieId,
            title : response.title,
            country : response.country,
            director : response.director,
            duration : response.duration,
            releaseDate : response.releaseDate,
            thumbnailUrl : response.thumbnailUrl,
            bannerUrl : response.bannerUrl,
            trailerUrl : response.trailerUrl,
            movieDescription : response.movieDescription,
            rate : response.rate,
        };
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return getDefaultMovie(); // Nếu có lỗi, trả về giá trị mặc định
    }
}

function getDefaultMovie() : MovieModel {
    return {
        movieId : 0,
        title : "Unknown",
        country : "Unknown",
        director : "Unknown",
        duration : 0,
        releaseDate : "Unknown",
        thumbnailUrl : "Unknown",
        bannerUrl : "Unknown",
        trailerUrl : "Unknown",
        movieDescription : "Unknown",
        rate : 0,
    };
}