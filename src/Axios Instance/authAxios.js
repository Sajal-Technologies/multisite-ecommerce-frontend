import axios from "axios";

export const authFetch = axios.create({
  baseURL: "http://3.230.52.77/api",
  headers: {
    "Content-Type": "application/json",
  },
});
