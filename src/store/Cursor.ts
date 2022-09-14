import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const Cursor = createSlice({
  name: "cursor",
  initialState: {
    navbarShowCursor: false,
    value: false,
  },
  reducers: {
    changeCursorState: (state, actions) => {
      state.value = actions.payload;
    },
    changeNavBarCursor: (state) => {
      state.navbarShowCursor = !state.navbarShowCursor;
    },
  },
});

export const { changeCursorState, changeNavBarCursor } = Cursor.actions;
export const CursurState = (state: RootState) => state.cursor.value;
export default Cursor.reducer;
