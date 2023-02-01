import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";

axios.defaults.baseURL = BACKEND_BASE_URL;

export const getNews = async () => {
  const { data } = await axios.get("/info/news");
  return data;
};
