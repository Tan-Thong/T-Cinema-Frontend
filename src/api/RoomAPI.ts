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
            cinema : myResponse[key].cinema,
            roomType : myResponse[key].roomType,
        });
    }

    return result;
}

export async function getRoomById(roomId: number) : Promise<RoomModel> {
    var result : RoomModel | null;
    // EndPoint
    const endPoint : string = `http://localhost:8080/rooms/${roomId}`;

    // Call function Request
    const response = await MyRequest(endPoint);
    const myResponse = response.result

    return {
            roomId : myResponse.roomId,
            roomName : myResponse.roomName,
            row : myResponse.row,
            column : myResponse.column,
            cinema : myResponse.cinema,
            roomType : myResponse.roomType,
        };
}

export async function findRoomsByCinemaId(cinemaId: number) : Promise<RoomModel[]> {
    const result : RoomModel[] = [];
    // EndPoint
    const endPoint : string = `http://localhost:8080/cinemas/${cinemaId}/rooms`;

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
            cinema : myResponse[key].cinema,
            roomType : myResponse[key].roomType,
        });
    }

    return result;
}