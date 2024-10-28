import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import languageReducer from "./language/slice";
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
  whitelist: ["accessToken", "isDark", "language"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    burger: burgerReducer,
    theme: persistReducer(persistConfig, themeReducer),
    language: persistReducer(persistConfig, languageReducer),
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
