import axios from "axios";

export class MovieService {
    getMovies() {
        return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=dab17e357c37981ecaf73f404d80118c&language=en-US&page=1").then((res) => res.data);
    }
}
