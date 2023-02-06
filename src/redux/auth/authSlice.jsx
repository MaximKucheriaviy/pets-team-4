
import { createSlice } from "@reduxjs/toolkit";
import { signup, logIn, logOut, current, userPets } from "./auth-operation"

const initialState = {
    user: {name: null, email: null },
    token: null,
    isLogin: false,
    loading: false,
    isLoadingUser: false,
    error: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: state => {
          state.loading = true;
          state.error = null;
        },
        [signup.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.user = payload.user;
          state.token = payload.token;
          state.isLogin = true;
        },
        [signup.rejected]: (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        },
        [logIn.pending]: state => {
          state.loading = true;
          state.error = null;
        },
        [logIn.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.user = payload.user;
          state.token = payload.token;
          state.isLogin = true;
        },
        [logIn.rejected]: (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        },
        [logOut.pending]: state => {
          state.loading = true;
          state.error = null;
        },
        [logOut.fulfilled]: state => {
          state.loading = false;
          state.user = {name: null, email: null };
          state.token = '';
          state.isLogin = false;
        },
        [logOut.rejected]: (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        },
        [current.pending]: state => {
          state.isLoadingUser = true;
          state.error = null;
        },
        [current.fulfilled]: (state, { payload }) => {
          state.isLoadingUser = false;
          state.user = payload;
          state.isLogin = true;
        },
        [current.rejected]: (state, { payload }) => {
          state.isLoadingUser = false;
          state.error = payload;
        },
        [userPets.pending]: state => {
          state.isLoadingUser = true;
          state.error = null;
        },
        [userPets.fulfilled]: (state, { payload }) => {
          state.isLoadingUser = false;
          state.user = payload;
          state.isLogin = true;
        },
        [userPets.rejected]: (state, { payload }) => {
          state.isLoadingUser = false;
          state.error = payload;
        },
      },
})

export default authSlice.reducer;