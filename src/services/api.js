import axios from "axios";

const URL_API = process.env.NEXT_APP_URL_API;

export const api = axios.create({
  baseURL: URL_API,
});

export const bibleApi = axios.create({
  baseURL: process.env.NEXT_APP_BIBLE_API,
});
