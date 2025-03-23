class ShowtimeModelv2 {
    showtimeId : number
    cinemaCity : string;
    cinemaName : string;
    roomName : string;
    showDate : Date;
    showtime : string;

    constructor(showtimeId : number, cinemaCity : string, cinemaName : string, roomName : string, showDate : Date, showtime : string) {
        this.showtimeId = showtimeId;
        this.cinemaCity = cinemaCity;
        this.cinemaName = cinemaName;
        this.roomName = roomName;
        this.showDate = showDate;
        this.showtime = showtime;
    }
}

export default ShowtimeModelv2;