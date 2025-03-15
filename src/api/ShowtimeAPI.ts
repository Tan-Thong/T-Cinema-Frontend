import ShowtimeModel from "../models/ShowtimeModel";
import MyRequest from "./MyRequest";

export async function findByMovieAndDay(movieID: number) : Promise<ShowtimeModel[]> {
    const result : ShowtimeModel[] = [];
    // EndPoint
    const endPoint : string = `http://localhost:8080/showtimes/v2/movie/${movieID}`;

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {
        
        result.push({
            cinemaCity : response[key].cinemaCity,
            cinemaName : response[key].cinemaName,
            roomName : response[key].roomName,
            showtimes : response[key].showtimes,
        });
    }

    return result;
}


