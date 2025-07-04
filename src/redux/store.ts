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

import { modalReducer } from "./modal/slice";
import { passwordReducer } from "./password/slice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["accessToken"],
};
const themePersistConfig = {
  key: "theme",
  version: 1,
  storage,
  whitelist: ["isDark"],
};
const languagePersistConfig = {
  key: "language",
  version: 1,
  storage,
  whitelist: ["language"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    burger: burgerReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
    language: persistReducer(languagePersistConfig, languageReducer),
    modal: modalReducer,
    password: passwordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface UserType {
  id: string;
  name: string;
  email: string;
}
