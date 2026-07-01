import axios from "axios";

const api = axios.create({
  baseURL: "https://NAMA-PROJECT.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;