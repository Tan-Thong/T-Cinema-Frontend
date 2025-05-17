import ShowtimeModel from "../models/ShowtimeModel";
import MyRequest from "./MyRequest";

export async function getShowtime(showtimeId: number): Promise<ShowtimeModel> {
    const result: ShowtimeModel[] = [];
    // EndPoint
    const endPoint: string = `http://localhost:8080/showtimes/${showtimeId}`;

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result
    console.log(myResponse)

    return {
            showtimeId: myResponse.showtimeId,
            showDate: myResponse.showDate,
            showTime: myResponse.showTime,
            room: myResponse.room,
            movie: myResponse.movie
        };
}

export async function getShowtimes(): Promise<ShowtimeModel[]> {
    const result: ShowtimeModel[] = [];
    // EndPoint
    const endPoint: string = "http://localhost:8080/showtimes";

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result
    console.log(myResponse)

    for (const key in myResponse) {

        result.push({
            showtimeId: myResponse[key].showtimeId,
            showDate: myResponse[key].showDate,
            showTime: myResponse[key].showTime,
            room: myResponse[key].room,
            movie: myResponse[key].movie
        });
    }

    return result;
}

export async function getShowtimesByMovieAndDate(movieId: number, showDate: string): Promise<ShowtimeModel[]> {
    const result: ShowtimeModel[] = [];
    // EndPoint
    const endPoint: string = `http://localhost:8080/movies/${movieId}/showtimes?showDate=${showDate}`;

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result
    // const responseData = response._embedded.products;
    console.log(myResponse)

    for (const key in myResponse) {

        result.push({
            showtimeId: myResponse[key].showtimeId,
            showDate: myResponse[key].showDate,
            showTime: myResponse[key].showTime,
            room: myResponse[key].room,
            movie: myResponse[key].movie
        });
    }

    return result;
}