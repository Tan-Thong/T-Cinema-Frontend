import SeatModel from "../models/SeatModel";
import MyRequest from "./MyRequest";

export async function getSeats(): Promise<SeatModel[]> {
    const result: SeatModel[] = [];
    const endPoint: string = "http://localhost:8080/seats";

    const response = await MyRequest(endPoint);

    for (const key in response) {
        result.push({
            seatId: response[key].seatId,
            seatRow: response[key].seatRow,
            seatColumn: response[key].seatColumn,
            seatType: response[key].seatType,
        })
    }

    return result;
}


export async function getSeatsByRoomId(roomId: number): Promise<SeatModel[]> {
    const result: SeatModel[] = [];
    const endPoint: string = `http://localhost:8080/rooms/${roomId}/seats`;

    const response = await MyRequest(endPoint);
    const myResponse = response.result;

    console.log(response)

    for (const key in myResponse) {
        result.push({
            seatId: myResponse[key].seatId,
            seatRow: myResponse[key].seatRow,
            seatColumn: myResponse[key].seatColumn,
            seatType: myResponse[key].seatType,
        })
    }

    return result;
}