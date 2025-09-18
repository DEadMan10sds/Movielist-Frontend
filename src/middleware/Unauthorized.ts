import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { unsetUser } from "../reducers/User";

export const UnauthorizedError: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      //TODO: Find correct typing for action.payload
      if ("status" in action.payload && action.payload.status === 401)
        api.dispatch(unsetUser());
    }

    return next(action);
  };
