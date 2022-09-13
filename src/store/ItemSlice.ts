import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { nanoid } from "nanoid";
interface Item {
  type: string;
  id: string;
  height: number;
  width: number;
}

interface init {
  value: Array<Item>;
}

const initialState: init = {
  value: [
    /**
     * 格式:
     * {
          type: '矩形2',
          id:'1111',
          height:200,
          width:100
        },
     */
  ],
};

export const currentSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    push: (state, action) => {
      state.value.push({
        type: action.payload,
        id: nanoid(),
        height: 200,
        width: 100,
      });
    },
  },
});

export const { push } = currentSlice.actions;
export const pusItem = (state: RootState) => state.item.value;
export default currentSlice.reducer;
