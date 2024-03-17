import { baseApi } from "@/redux/api/baseApi";

export const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteer: builder.query({
      query: () => ({
        url: `api/v1/volunteer`,
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),

    postVolunteer: builder.mutation({
      query: (doc) => ({
        url: `api/v1/volunteer`,
        method: "POST",
        body: doc,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useGetVolunteerQuery, usePostVolunteerMutation } = volunteerApi;
