import axios from "axios";

export const api = axios.create({
  baseURL: "https://se-api-ts.adaptable.app/",
});
