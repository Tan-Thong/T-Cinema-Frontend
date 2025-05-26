class TicketModel {
    ticketId : number;
    ticketPrice : number;
    movieName : string;
    time : string;
    cinemaName : string;
    roomName : string;
    seatRow : string;
    seatColumn : number;
   
    constructor(ticketId : number,
    ticketPrice : number,
    movieName : string,
    time : string,
    cinemaName : string,
    roomName : string,
    seatRow : string,
    seatColumn : number,) {
            this.ticketId = ticketId;
            this.ticketPrice = ticketPrice;
            this.movieName = movieName;
            this.time = time;
            this.cinemaName = cinemaName;
            this.roomName = roomName;
            this.seatRow = seatRow;
            this.seatColumn = seatColumn;
        }
}

export default TicketModel;