import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/User";
import { AuthApi } from "../api/Auth";
import { MoviesApi } from "../api/Movies";
import { UnauthorizedError } from "../middleware/Unauthorized";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [MoviesApi.reducerPath]: MoviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(UnauthorizedError)
      .concat(AuthApi.middleware)
      .concat(MoviesApi.middleware),
});

store.subscribe(() => {
  const userStringified = JSON.stringify(store.getState().user);
  const prevUser = localStorage.getItem("user");

  if (!prevUser || prevUser !== userStringified)
    localStorage.setItem("user", userStringified);
});

export type RootState = ReturnType<typeof store.getState>;
