import axios from "axios";
import { BACKEND_BASE_URL } from "../Constants/backendBaseUrl";

const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export const getUserPets = async (token) => {
  const { data } = await instance.get("api/pets", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const postUserPets = async (token) => {
  const { data } = await instance.post("api/pets", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// =======
export const getDeleteUserPets = async (token, petID) => {
  const { data } = await instance.delete(`api/pets/${petID}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};
