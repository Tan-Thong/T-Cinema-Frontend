class SeatModel {
    seatId : number;
    seatRow : string; 
    seatColumn : number; 
    seatType : string;
    status : string;

    constructor(seatId : number, seatRow : string, seatColumn : number, seatType : string, status : string) {
        this.seatId = seatId;
        this.seatRow = seatRow;
        this.seatColumn = seatColumn;
        this.seatType = seatType;
        this.status = status;
    }
}

export default SeatModel;