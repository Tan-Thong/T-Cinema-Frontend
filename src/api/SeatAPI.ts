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
            status: response[key].status,
        })
    }

    return result;
}