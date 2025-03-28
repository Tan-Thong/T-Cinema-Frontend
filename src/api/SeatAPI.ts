import SeatModel from "../models/SeatModel";
import MyRequest from "./MyRequest";

export async function findAllSeats(): Promise<SeatModel[]> {
    const result: SeatModel[] = [];
    const endPoint: string = "http://localhost:8080/seats";

    const response = await MyRequest(endPoint);

    for (const key in response) {
        result.push({
            seatId: response[key].seatId,
            seatNumber: response[key].seatNumber,
            seatType: response[key].seatType,
            status: response[key].status,
        })
    }

    return result;
}