import SeatShowtimeModel from "../models/SeatShowtimeModel";
import MyRequest from "./MyRequest";

export async function getSeatShowtimes(): Promise<SeatShowtimeModel[]> {
    const result: SeatShowtimeModel[] = [];
    const endPoint: string = "http://localhost:8080/seat-showtime";

    const response = await MyRequest(endPoint);
    const myResponse = response.result;
    // console.log(myResponse)

    for (const key in myResponse) {
        result.push({
            seat: myResponse[key].seat,
            showtime: myResponse[key].showtime,
            seatStatus: myResponse[key].seatStatus,
            roomId: myResponse[key].roomId,
        })
    }

    return result;
}