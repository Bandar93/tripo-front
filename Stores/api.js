import axios from "axios";

export const baseURL = "http://192.168.8.113:8000"
export const api = axios.create({
    baseURL: `${baseURL}/api`,
});