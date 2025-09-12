import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/User";

const initialState: User | null = null as unknown as User;

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action) => action.payload,
    unsetUser: (_state, action) => initialState,
  },
});

export const { setUser } = UserReducer.actions;
export default UserReducer.reducer;
