class SeatModel {
    seatId : number;
    seatNumber : string; 
    seatType : string;
    status : string;

    constructor(seatId : number, seatNumber : string, seatType : string, status : string) {
        this.seatId = seatId;
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.status = status;
    }
}

export default SeatModel;