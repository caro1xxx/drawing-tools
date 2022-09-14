import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import noticeSlice from "./notify";
import cursorSlice from "./Cursor";
export const store = configureStore({
  reducer: {
    item: itemSlice,
    notice: noticeSlice,
    cursor: cursorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
