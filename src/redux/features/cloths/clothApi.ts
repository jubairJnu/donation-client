import { baseApi } from "@/api/baseApi";

const clothsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get all cloths
    getCloths: builder.query({
      query: () => ({
        url: "/cloths",
      }),
      providesTags: ["cloths"],
    }),
    // post all cloths
    postCloths: builder.mutation({
      query: (clothsData) => ({
        url: "/cloths",
        method: "POST",
        body: clothsData,
      }),
    }),

    //get single
    getSingleCloth: builder.query({
      query: (id) => ({
        url: `/cloths/${id}`,
      }),
    }),

    //update cloths
    updateCloths: builder.mutation({
      query: (clothsData) => ({
        url: `/cloths/${clothsData.id}`,
        method: "PATCH",
        body: clothsData,
      }),
      invalidatesTags: ["cloths"],
    }),

    //delete

    deleteCloths: builder.mutation({
      query: (id) => ({
        url: `/cloths/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cloths"],
    }),
  }),
});

export const {
  useGetClothsQuery,
  useGetSingleClothQuery,
  usePostClothsMutation,
  useUpdateClothsMutation,
  useDeleteClothsMutation,
} = clothsApi;
