import { baseApi } from "@/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add

    addVlounteer: builder.mutation({
      query: (volunteerData) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteerData,
      }),
    }),

    // get all
    getAllVlounteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddVlounteerMutation, useGetAllVlounteerQuery } =
  volunteerApi;
