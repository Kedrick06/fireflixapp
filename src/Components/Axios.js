import axios from "axios";




/**root url to make requests */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;