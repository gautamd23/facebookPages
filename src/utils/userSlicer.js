import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const {addUser, removeUser} = userSlicer.actions

export default userSlicer.reducer;