import axios, { AxiosHeaders } from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "id" : "1"
    }
});
export default blogFetch
