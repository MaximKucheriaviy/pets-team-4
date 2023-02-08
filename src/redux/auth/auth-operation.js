import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../services/apiAuth";

export const signup = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await authApi.signup(data);
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
    return result;
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});
