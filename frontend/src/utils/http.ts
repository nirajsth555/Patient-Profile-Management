import axios from "axios";
import apiConfig from "../config/ApiConfig";

const http = axios.create({
    baseURL: apiConfig.baseURI,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http;