import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mediagram-social-app.onrender.com/api/",
  withCredentials: true,
});