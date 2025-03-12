class CinemaModel {
    cinemaId : number;
    cinemaName : number;
    city : string;
    location : string;

    constructor(cinemaId : number, cinemaName : number, city : string, location : string) {
        this.cinemaId =  cinemaId;
        this.cinemaName = cinemaName;
        this.city = city;
        this.location = location;
    }
}

export default CinemaModel;