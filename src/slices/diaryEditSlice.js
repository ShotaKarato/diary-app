import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const diaryEditSlice = createSlice({
  name: "diaryEdit",
  initialState,
  reducers: {
    toggleEdit: (state, action) => {
      state = !state;
      return state;
    },
  },
});

export const { toggleEdit } = diaryEditSlice.actions;
export default diaryEditSlice.reducer;
