import { baseApi } from "@/api/baseApi";

//login
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //login
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    // register
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

// register

export const { useLoginMutation, useRegisterMutation } = authApi;
