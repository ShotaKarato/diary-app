import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { db } from "../firebase";

export const fetchDiaries = createAsyncThunk(
  "user/fetchDiaries",
  async (payload) => {
    // access to the DB and build a query
    const diariesRef = db.collection("diaries").where("user_id", "==", payload);
    // get the data
    const diaries = await diariesRef.get();
    const results = diaries.docs
      .map((doc) => doc.data())
      .map((doc) => {
        return { title: doc.title, content: doc.content };
      });
    return results;
  }
);

const initialState = {
  user_id: "",
  user_name: "",
  user_diaries: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user_id = action.payload.id;
      state.user_name = action.payload.name;
    },
    resetCurrentUser: (state, action) => {
      state.user_id = "";
      state.user_name = "";
      state.user_diaries = [];
    },
  },
  extraReducers: {
    [fetchDiaries.fulfilled]: (state, action) => {
      state.user_diaries = [...action.payload];
    },
    [fetchDiaries.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { setCurrentUser, resetCurrentUser } = userSlice.actions;
export default userSlice.reducer;
