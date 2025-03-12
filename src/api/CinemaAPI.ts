import CinemaModel from "../models/CinemaModel";
import MyRequest from "./MyRequest";

export async function findAll() : Promise<CinemaModel[]> {
    const result : CinemaModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/cinemas";

    // Call function Request
    const response = await MyRequest(endPoint);

    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in response) {
        
        result.push({
            cinemaId : response[key].cinemaId,
            cinemaName : response[key].cinemaName,
            city : response[key].city,
            location : response[key].location,
        });
    }

    return result;
}