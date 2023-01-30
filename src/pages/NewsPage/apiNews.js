import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getNews = async () => {
  const { data } = await axios.get("/info/news");
  return data;
};
