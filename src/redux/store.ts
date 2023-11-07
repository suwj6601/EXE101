import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import virtualTryon from "./virtualTryon";
import layoutReducer from "./layout";

const reducers = combineReducers({
  virtualTryon: virtualTryon,
  Layout: layoutReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["virtualTryon"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
