import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface currentItem {
  type: string,
  id:string,
  height:number,
  width:number
}

interface current {
  value:Array<currentItem>
}

const initialState: current = {
  value:[
    {
      type: '矩形2',
      id:'1111',
      height:200,
      width:100
    },
  ]
}

export const currentSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    create: (state) => {
      state.value.push({
        type: '矩形',
        id:'1113',
        height:200,
        width:100
      })
    }
  },
})

export const { create } = currentSlice.actions

export const changeCurrent = (state: RootState) => state.current.value

export default currentSlice.reducer