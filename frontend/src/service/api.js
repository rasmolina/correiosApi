import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3306/",
});

export default api;