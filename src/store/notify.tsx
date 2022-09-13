import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const Notice = createSlice({
  name: "notice",
  initialState: {
    value: "",
  },
  reducers: {
    change: (state, action) => {
      if (state.value === action.payload) return;
      state.value = action.payload;
    },
  },
});

export const { change } = Notice.actions;
export const changeNotice = (state: RootState) => state.notice.value;
export default Notice.reducer;
