class ShowtimeModel {
    cinemaCity : string;
    cinemaName : string;
    roomName : string;
    showtimes : string[];

    constructor(cinemaCity : string, cinemaName : string, roomName : string, showtimes : string[]) {
        this.cinemaCity = cinemaCity;
        this.cinemaName = cinemaName;
        this.roomName = roomName;
        this.showtimes = showtimes;
    }
}

export default ShowtimeModel;