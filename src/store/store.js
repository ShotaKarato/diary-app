import { configureStore } from "@reduxjs/toolkit";
// reducers
import userReducer from "../slices/userSlice";
import diaryInputReducer from "../slices/diaryInputSlice";
import diariesReducer from "../slices/diariesSlice";
import diaryEditReducer from "../slices/diaryEditSlice";
import selectedDiaryReducer from "../slices/selectedDiarySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    diaryInput: diaryInputReducer,
    diaries: diariesReducer,
    diaryEdit: diaryEditReducer,
    selectedDiary: selectedDiaryReducer,
  },
});

export default store;
