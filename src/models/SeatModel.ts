class SeatModel {
    seatId : number;
    seatRow : string; 
    seatColumn : number; 
    seatType : string;

    constructor(seatId : number, seatRow : string, seatColumn : number, seatType : string) {
        this.seatId = seatId;
        this.seatRow = seatRow;
        this.seatColumn = seatColumn;
        this.seatType = seatType;
    }
}

export default SeatModel;