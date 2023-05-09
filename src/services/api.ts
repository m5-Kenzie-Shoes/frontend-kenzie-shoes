import axios from "axios";

export const api = axios.create({
  // baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
});
