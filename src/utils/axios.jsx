import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTI3OGE3MTk0NjNiZTE5OGIxN2M4MDlmNjQ2ZTQ5ZSIsIm5iZiI6MTczNTkxMjk5OC42OTcsInN1YiI6IjY3NzdlZTI2NWFjMWJkODI2MTY2OGRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SWfQ5k6Srdi99cm2rkxYTuO1GJTC5xHDCYhADNizh4Y',
    },
});

export default instance;
