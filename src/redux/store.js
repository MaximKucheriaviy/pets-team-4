
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { noticesApi } from './noticesApi';
import { friendsApi } from './friendsApi';
import { newsApi } from './newsApi';
import { usersApi } from './usersApi';
import authSlice from "./auth/authSlice";
import filterReducer from './filterSlice';
import categoryReducer from './categorySlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig,  authSlice);


export const store = configureStore({
  reducer: {
    [noticesApi.reducerPath]: noticesApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    auth: persistedReducer,
    filter: filterReducer,
    category: categoryReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    noticesApi.middleware,
    friendsApi.middleware,
    usersApi.middleware,
    newsApi.middleware,
  ],
});


export const persistor = persistStore(store);
