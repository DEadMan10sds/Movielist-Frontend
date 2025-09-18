import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/User";
import { UserApi } from "../api/User";

const prevUserData = localStorage.getItem("user");

const initialState: User | null = (prevUserData
  ? JSON.parse(prevUserData)
  : null) as unknown as User;

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action) => action.payload,
    unsetUser: () => {
      localStorage.removeItem("user");
      return null as unknown as User;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      UserApi.endpoints.login.matchFulfilled,
      (_state, { payload }) => payload,
    );
  },
});

export const { setUser, unsetUser } = UserReducer.actions;
export default UserReducer.reducer;
