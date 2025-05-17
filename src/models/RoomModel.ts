import CinemaModel from "./CinemaModel";

class RoomModel {
    roomId: number;
    roomName: string;
    row: number;
    column: number;
    roomType: number;
    cinema: CinemaModel | null;

    constructor(roomId: number, roomName: string, row: number, column: number, roomType: number, cinema: CinemaModel) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.row = row;
        this.column = column
        this.roomType = roomType;
        this.cinema = cinema;
    }
}

export default RoomModel;