import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";


axios.defaults.baseURL = BACKEND_BASE_URL;

export const getFavorites = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get("/api/notices/favorite");
  return data[0].favoriteNotices;
};

export const getNoticesByCategory = async (category) => {
  const { data } = await axios.get(
    `/api/notices/categories/${category}`
  );

  return data;
};
export const getOwnerNotise = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get(`/api/notices`);
  return data;
};
