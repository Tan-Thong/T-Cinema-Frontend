class MovieModel {
    movieId : number;
    title : string;
    country : string;
    director : string;
    duration : number;
    releaseDate : string;
    thumbnailUrl : string;
    bannerUrl : string;
    classification : string;
    trailerUrl : string;
    movieDescription : string;
    rate : number;

    constructor(movieId : number, title : string, country : string,
        director : string, duration : number, releaseDate : string,
        thumbnailUrl : string, bannerUrl : string, classification : string, trailerUrl : string, movieDescription : string,
        rate : number) {
            this.movieId = movieId;
            this.title = title;
            this.country = country;
            this.director = director;
            this.duration = duration;
            this.releaseDate = releaseDate;
            this.thumbnailUrl = thumbnailUrl;
            this.bannerUrl = bannerUrl;
            this.classification = classification;
            this.trailerUrl = trailerUrl;
            this.movieDescription = movieDescription;
            this.rate = rate;
        }
}

export default MovieModel;