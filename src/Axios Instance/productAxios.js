import axios from "axios";

const productFetch = axios.create({
  baseURL: "http://3.230.52.77/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default productFetch;
