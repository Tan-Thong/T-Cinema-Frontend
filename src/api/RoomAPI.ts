import RoomModel from "../models/RoomModel";
import MyRequest from "./MyRequest";

export async function findAll() : Promise<RoomModel[]> {
    const result : RoomModel[] = [];
    // EndPoint
    const endPoint : string = "http://localhost:8080/rooms";

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result
    // const responseData = response._embedded.products;
    console.log(response)

    for (const key in myResponse) {
        result.push({
            roomId : myResponse[key].roomId,
            roomName : myResponse[key].roomName,
            row : myResponse[key].row,
            column : myResponse[key].column,
            cinemaId : myResponse[key].cinemaId,
            roomType : myResponse[key].roomType,
        });
    }

    return result;
}