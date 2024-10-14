import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { burgerReducer, themeReducer } from "./burger/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { AuthState } from "./authTypes/authTypes";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["accessToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    burger: burgerReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = {
  auth: AuthState; 
};
export type AppDispatch = typeof store.dispatch;

export interface UserType {
  id: string;
  name: string; 
  email: string; 
}
