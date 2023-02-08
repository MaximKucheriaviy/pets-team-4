import axios from "axios";
// import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";

const BACKEND_BASE_URL = "http://localhost:3001";
axios.defaults.baseURL = BACKEND_BASE_URL;

export const getFavorites = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  const { data } = await axios.get("/api/notices/favorite");
  console.log(data[0].favoriteNotices);
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
