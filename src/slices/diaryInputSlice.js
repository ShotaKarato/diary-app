import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const diaryInputSlice = createSlice({
  name: "diaryInput",
  initialState,
  reducers: {
    toggleInput: (state, action) => {
      state = !state;
      return state;
    },
  },
});

export const { toggleInput } = diaryInputSlice.actions;
export default diaryInputSlice.reducer;
