import { configureStore } from '@reduxjs/toolkit'
import currentSlice from './counterSlice'

export const store = configureStore({
  reducer: {
    current:currentSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch