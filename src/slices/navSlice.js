import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTime: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = navSlice.actions

export default navSlice.reducer
