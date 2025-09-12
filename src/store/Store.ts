import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/User";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
