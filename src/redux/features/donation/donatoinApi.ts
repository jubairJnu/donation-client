import { baseApi } from "@/api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get
    getDonation: builder.query({
      query: () => ({
        url: "/donations",
      }),
    }),
    // create
    postDonation: builder.mutation({
      query: (donationData) => ({
        url: "/donations",
        method: "POST",
        body: donationData,
      }),
    }),
  }),
});

export const { useGetDonationQuery, usePostDonationMutation } = donationApi;
