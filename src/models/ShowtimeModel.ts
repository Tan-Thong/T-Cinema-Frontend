import MovieModel from "./MovieModel";
import RoomModel from "./RoomModel";

class ShowtimeModel {
    showtimeId : number
    showDate : string;
    showTime : string;
    room : RoomModel | null;
    movie : MovieModel | null;

    constructor(showtimeId : number, showDate : string, showTime : string, room : RoomModel, movie : MovieModel) {
        this.showtimeId = showtimeId;
        this.showDate = showDate;
        this.showTime = showTime;
        this.room = room;
        this.movie = movie;
    }
}

export default ShowtimeModel;