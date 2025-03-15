class ShowtimeModel {
    showtimeId : number
    cinemaCity : string;
    cinemaName : string;
    roomName : string;
    showtimes : string[];

    constructor(showtimeId : number, cinemaCity : string, cinemaName : string, roomName : string, showtimes : string[]) {
        this.showtimeId = showtimeId;
        this.cinemaCity = cinemaCity;
        this.cinemaName = cinemaName;
        this.roomName = roomName;
        this.showtimes = showtimes;
    }
}

export default ShowtimeModel;