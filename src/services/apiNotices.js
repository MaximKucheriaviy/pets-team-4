import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";


axios.defaults.baseURL = BACKEND_BASE_URL;

export const getFavorites = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get("/api/notices/favorite");
  return data.favoriteNotices;
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
export const addToFavorite = async (token, noticeId) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.post(
    `api/notices/favorite/${noticeId}`
  );
  return data;
};

export const removeToFavorite = async (token, noticeId) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.delete(
    `api/notices/favorite/${noticeId}`
  );
  return data;
};

export const removeNoticeById = async (token, noticeId) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.delete(
    `api/notices/${noticeId}`
  );
  return data;
};
