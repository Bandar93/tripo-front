import axios from "axios";


// export const baseURL = "http://192.168.8.113:8000"
// export const baseURL = "http://192.168.1.55:8000";
export const baseURL = "http://172.20.10.5:8000"; //AliIP

//export const baseURL = "http://192.168.8.113:8000"; // Bandar IP
// export const baseURL = "http://192.168.1.55:8000";

export const api = axios.create({
  baseURL: `${baseURL}/api`,
});
