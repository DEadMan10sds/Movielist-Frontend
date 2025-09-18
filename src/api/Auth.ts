import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUser, User } from "../types/User";

interface LoginRequest {
  email: string;
  password: string;
}

export const AuthApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginRequest>({
      query: (body) => ({
        method: "POST",
        url: "/auth",
        body,
      }),
    }),
    register: builder.mutation<CreateUser, unknown>({
      query: (body) => ({
        method: "POST",
        url: "/users",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = AuthApi;
