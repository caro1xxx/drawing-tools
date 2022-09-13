import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import noticeSlice from "./notify";
export const store = configureStore({
  reducer: {
    item: itemSlice,
    notice: noticeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
