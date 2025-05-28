import { log } from "console";
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

export async function getSeatShowtimeByShowtimeId(showtimeId: number): Promise<SeatShowtimeModel[]> {
    const result: SeatShowtimeModel[] = [];
    const endPoint: string = `http://localhost:8080/seat-showtime/${showtimeId}/seats`;

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

export async function holdSeat(seatId: number, showtimeId: number) {
    const response = await fetch("http://localhost:8080/seat-showtime/hold", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seatId, showtimeId }),
    });

    console.log(JSON.stringify({ seatId, showtimeId }))

    if (!response.ok) {
        throw new Error("Không thể giữ ghế");
    }
}