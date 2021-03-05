import axios from 'axios'


// const config = {
//     headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//     },
// };

const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
})

export default instance;