import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type {RootState} from '../index'

// Define a type for the slice state
interface AppState {
  counter: number
}

// Define the initial state using that type
const initialState: AppState = {
  counter: 0
}

export const appSlice = createSlice({
  name: 'appState',
   // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1
    },
    decrement: state => {
      state.counter -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    }
  }
})

export const {increment, decrement, incrementByAmount} = appSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default appSlice.reducer