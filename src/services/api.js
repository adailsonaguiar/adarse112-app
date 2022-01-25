import axios from "axios";

const URL_API = process.env.NEXT_APP_URL_API;

export const api = axios.create({
  baseURL: URL_API,
});
