import { configureStore } from "@reduxjs/toolkit";
// reducers
import userReducer from "../slices/userSlice";
import diaryInputReducer from "../slices/diaryInputSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    diaryInput: diaryInputReducer,
  },
});

export default store;
