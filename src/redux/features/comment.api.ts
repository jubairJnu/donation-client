import { baseApi } from "@/api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postCommment: builder.mutation({
      query: (commentData) => ({
        url: "/comment",
        method: "POST",
        body: commentData,
      }),
    }),

    // get

    getAllCommment: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
    }),
  }),
});

export const { usePostCommmentMutation, useGetAllCommmentQuery } = commentApi;
