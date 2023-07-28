"use client";

import { configureStore } from "@reduxjs/toolkit";
import blog from "./slices/blogSlice";

const store = configureStore({
  reducer: {
    blog,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
