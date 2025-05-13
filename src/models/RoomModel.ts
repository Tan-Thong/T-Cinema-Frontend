class RoomModel {
    roomId: number;
    roomName: string;
    row: number;
    column: number;
    roomType: number;
    cinemaId: number;

    constructor(roomId: number, roomName: string, row: number, column: number, roomType: number, cinemaId: number) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.row = row;
        this.column = column;
        this.roomType = roomType;
        this.cinemaId = cinemaId;
    }
}

export default RoomModel;