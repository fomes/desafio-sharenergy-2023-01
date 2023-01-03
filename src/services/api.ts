import axios from "axios";

export const api = axios.create({
  baseURL: "https://se-api-ts.adaptable.app/",
});

export const apiUsers = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const apiStatus = axios.create({
  baseURL: "https://http.cat/",
});
