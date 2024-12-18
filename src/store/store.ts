// store.ts
import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueSlice/valueSlice";

export const store = configureStore({
  reducer: {
    values: valueReducer,
  },
});

// TypeScript için store'u tiplemek
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
