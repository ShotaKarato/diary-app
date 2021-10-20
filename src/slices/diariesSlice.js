import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { db } from "../firebase";

export const deleteDiary = createAsyncThunk(
  "diaries/deleteDiary",
  async (diary_id) => {
    await db.collection("diaries").doc(diary_id).delete();
  }
);

const initialState = "";

const diariesSlice = createSlice({
  name: "diaries",
  initialState,
  reducers: {},
  extraReducers: {
    [deleteDiary.fulfilled]: (state, action) => {
      return state;
    },
    [deleteDiary.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default diariesSlice.reducer;
