import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: -1,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

// Actions
export const { setActivePage } = navSlice.actions;

// Selectors
export const selectActivePage = (state) => state.nav.activePage;

export default navSlice.reducer;
