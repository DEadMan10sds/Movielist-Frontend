import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/User";
import { UserApi } from "../api/User";
import { MoviesApi } from "../api/Movies";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [MoviesApi.reducerPath]: MoviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(UserApi.middleware)
      .concat(MoviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
