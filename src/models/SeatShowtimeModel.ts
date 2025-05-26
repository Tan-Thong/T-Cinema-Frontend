import SeatModel from "./SeatModel";
import ShowtimeModel from "./ShowtimeModel";

class SeatShowtimeModel {
    seat: SeatModel;
    showtime : ShowtimeModel; 
    seatStatus : string;
    roomId : number; 

    constructor(seat: SeatModel, showtime : ShowtimeModel, seatStatus : string, roomId : number) {
        this.seat = seat;
        this.showtime = showtime;
        this.seatStatus = seatStatus;
        this.roomId = roomId;
    }
}

export default SeatShowtimeModel;