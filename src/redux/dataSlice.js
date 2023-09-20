import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state,action) => {
      state.data = [...state.data,action.payload]
    },
    deleteDataFunc: (state,action) => {
        state.data = [...state.data.filter(dta=>dta.id != action.payload)]
      },
      updateDataFunc: (state,action) => {
        state.data = [...state.data.map(dta=>dta.id == action.payload.id ? ({...dta,...action.payload}) : dta)]
      }
  },
});

// Action creators are generated for each case reducer function
export const { createDataFunc,deleteDataFunc,updateDataFunc } = dataSlice.actions;

export default dataSlice.reducer;