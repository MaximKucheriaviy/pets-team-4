
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
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
import { themaSlice } from "./thema/themaSlice";

const persistConfig = {
    key: "token",
    storage,  
    whitelist: ["token"]
} 
const persistedReducer = persistReducer(persistConfig,  authSlice);
export  const store = configureStore ({
  reducer: {
     auth: persistedReducer,
     thema:themaSlice.reducer,

   
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
  });
  
export const persistor = persistStore(store);