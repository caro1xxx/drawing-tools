import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { nanoid } from "nanoid";
interface Item {
  type: string;
  id: string;
  height: number;
  width: number;
  selection: string;
  pos: Array<Array<number>> | null;
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
          pos:[[x,y],...]
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
        height: 100,
        width: 100,
        selection: "#000",
        // lefttop,leftbottom.righttop.rightbottom
        pos: [
          // x,y
          [0, 0],
          [0, 100],
          [100, 0],
          [100, 100],
        ],
      });
    },
    changePos: (state, action) => {
      const pos = { ...action.payload };
      state.value.forEach((item, index) => {
        if (pos.storeId === item.id) {
          item.pos = [
            [pos.left, pos.top],
            [pos.left, pos.height + pos.top],
            [pos.left + pos.width, pos.top],
            [pos.left + pos.width, pos.top + pos.height],
          ];
        }
      });
    },
    changeSelection: (state, action) => {
      const selectedStoreid = action.payload;
      state.value.forEach((item, index) => {
        if (selectedStoreid.indexOf(item.id) > -1) {
          item.selection = "#056de8";
        }
      });
    },
  },
});

export const { push, changeSelection, changePos } = currentSlice.actions;
export const pusItem = (state: RootState) => state.item.value;
export default currentSlice.reducer;
