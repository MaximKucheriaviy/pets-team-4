import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../services/apiAuth";

export const signup = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await authApi.signup(data);
      console.log("result", result);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await authApi.login(data);
      console.log("result", result);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await authApi.logout();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk("user/current", async (_, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    const result = await authApi.getCurrentUser(auth.token);
    console.log(result);
    return result;
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

export const userPets = createAsyncThunk("pets", async (_, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    const result = await authApi.getCurrentUserPets(auth.token);
    console.log(result);
    return result;
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

// export const addPet = createAsyncThunk(
//   "user/current/addPet",
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await authApi.addPet(data);
//       return result;
//     } catch ({ response }) {
//       const error = {
//         status: response.status,
//         message: response.data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deletePet = createAsyncThunk(
//   "user/current/deletePet",
//   async (id, { rejectWithValue }) => {
//     try {
//       const result = await authApi.deletePet(id);
//       return result;
//     } catch ({ response }) {
//       const error = {
//         status: response.status,
//         message: response.data.message,
//       };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const current = createAsyncThunk(
//   "user/current",
//   async (id, thunkAPI) => {
//     try {
//       const { auth } = thunkAPI.getState();
//       const result = await authApi.getCurrentUser(auth.token);
//       const deletePet = await authApi.deletePet(id);
//       console.log(result);
//       return result, deletePet;
//     } catch ({ response }) {
//       const error = {
//         status: response.status,
//         message: response.data.message,
//       };
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
