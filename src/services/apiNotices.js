import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";

// const BACKEND_BASE_URL = "http://localhost:3001";
axios.defaults.baseURL = BACKEND_BASE_URL;

// export const getPets = async () => {
//   const { data } = await axios.get(
//     "/api/notices/categories/lost-found"
//   );
//   return data;
// };

export const getNoticesByCategory = async (category) => {
  const { data } = await axios.get(
    `/api/notices/categories/${category}`
  );

  return data;
};
