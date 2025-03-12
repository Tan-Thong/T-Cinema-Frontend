class ShowtimeModel {
    cinemaName : string;
    roomName : string;
    showtimes : string[];

    constructor(cinemaName : string, roomName : string, showtimes : string[]) {
        this.cinemaName = cinemaName;
        this.roomName = roomName;
        this.showtimes = showtimes;
    }
}

export default ShowtimeModel;