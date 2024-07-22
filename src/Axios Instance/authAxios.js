import axios from "axios";

export const authFetch = axios.create({
  baseURL: " https://api.theshoppingai.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
