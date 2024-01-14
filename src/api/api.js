import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = "fde0c8aa8fb2837b938915b5088c34ff"