import axios from "axios";

export const api = axios.create({
  // baseURL: "https://kenzieshoes.onrender.com/api/",
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
});
