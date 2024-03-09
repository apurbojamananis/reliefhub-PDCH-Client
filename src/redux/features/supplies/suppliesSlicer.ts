import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  viewAll: boolean;
};

const initialState: TInitialState = {
  viewAll: false,
};

export const suppliesSlice = createSlice({
  name: "LimitValue",
  initialState,
  reducers: {
    toggleViewAll: (state) => {
      state.viewAll = !state.viewAll;
    },
  },
});

export const { toggleViewAll } = suppliesSlice.actions;

export default suppliesSlice.reducer;
