import ShowtimeModel from "../models/ShowtimeModel";
import ShowtimeModelv2 from "../models/ShowtimeModelv2";
import MyRequest from "./MyRequest";

export async function findByMovieAndDay(movieID: number, showDate: string): Promise<ShowtimeModel[]> {
    const result: ShowtimeModel[] = [];
    // EndPoint
    const endPoint: string = `http://localhost:8080/showtimes/v4?movieId=${movieID}&showDate=${showDate}`;

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {

        result.push({
            showtimeId: response[key].showtimeId,
            cinemaCity: response[key].cinemaCity,
            cinemaName: response[key].cinemaName,
            roomName: response[key].roomName,
            showDate: response[key].showDate,
            showTime: response[key].showTime,
        });
    }

    return result;
}


export async function findShowtimeByIdAndMovie(movieId: number, showtimeId: number): Promise<ShowtimeModel> {
    const result: ShowtimeModel | null = null;
    

    // EndPoint
    const endPoint: string = `http://localhost:8080/showtimes?movieId=${movieId}&showtimeId=${showtimeId}`;

    
        // Gửi request và nhận dữ liệu
        const response = await MyRequest(endPoint);

        return {
            showtimeId: response.showtimeId,
            cinemaCity: response.cinemaCity,
            cinemaName: response.cinemaName,
            roomName: response.roomName,
            showDate: response.showDate,
            showTime: response.showTime,
        };
}


function getDefaultInfo(): ShowtimeModel {
    return {
        showtimeId: 0,
        cinemaCity: "Unknown",
        cinemaName: "Unknown",
        roomName: "Unknown",
        showDate: new Date("2025-01-01"),
        showTime:"Unknown",
    };
}