import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";
import { store } from "../redux/store";

const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `${token}`);
  }
  instance.defaults.headers.common.authorization = "";
};

export const signup = async (signupData) => {
  const { data } = await instance.post("api/user/signup", signupData);
  instance.defaults.headers.common.authorization = ` ${data.token}`;
  return data;
};

export const login = async (loginData) => {
  const { data } = await instance.post("api/user/login", loginData);
  instance.defaults.headers.common.authorization = ` ${data.token}`;
  return data;
};

export const logout = async () => {
  const { data } = await instance.get("api/user/logout");
  instance.defaults.headers.common.authorization = " ";
  return data;
};

export const getCurrentUser = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("api/user/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const patchCurrentUserName = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/name",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const patchCurrentUserEmail = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/email",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const patchCurrentUserPhone = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/phone",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const patchCurrentUserCity = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/city",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const patchCurrentUserBirthday = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/birthday",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        // "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export const patchCurrentUserAvatar = async (data) => {
  try {
    return await axios({
      method: "patch",
      url: "api/user/avatar",
      baseURL: "https://petse-server-team4.onrender.com",
      data: data,
      headers: {
        Authorization: `${store.getState().auth.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw error;
  }
};

export default instance;
