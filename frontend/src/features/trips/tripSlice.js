import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: "trips",

  initialState: {
    trips: [],
    selectedTrip: null
  },

  reducers: {
    setTrips: (
      state,
      action
    ) => {
      state.trips =
        action.payload;
    },

    setSelectedTrip: (
      state,
      action
    ) => {
      state.selectedTrip =
        action.payload;
    }
  }
});

export const {
  setTrips,
  setSelectedTrip
} = tripSlice.actions;

export default tripSlice.reducer;