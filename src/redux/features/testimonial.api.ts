import { baseApi } from "@/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (testimonalData) => ({
        url: "/testimonial",
        method: "POST",
        body: testimonalData,
      }),
    }),

    // get

    getAllTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddTestimonialMutation, useGetAllTestimonialQuery } =
  testimonialApi;
