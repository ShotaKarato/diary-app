import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const selectedDiarySlice = createSlice({
  name: "selectedDiary",
  initialState,
  reducers: {
    diarySelected: (state, action) => {
      state = action.payload;
      return state;
    },
    resetSelectedDiary: (state, action) => {
      state = "";
    },
  },
});

export const { diarySelected, resetSelectedDiary } = selectedDiarySlice.actions;
export default selectedDiarySlice.reducer;
