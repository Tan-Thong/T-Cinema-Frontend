class ShowtimeModel {
    showtimeId : number
    cinemaCity : string;
    cinemaName : string;
    roomName : string;
    showDate : Date;
    showTime : string;

    constructor(showtimeId : number, cinemaCity : string, cinemaName : string, roomName : string, showDate : Date, showTime : string) {
        this.showtimeId = showtimeId;
        this.cinemaCity = cinemaCity;
        this.cinemaName = cinemaName;
        this.roomName = roomName;
        this.showDate = showDate;
        this.showTime = showTime;
    }
}

export default ShowtimeModel;