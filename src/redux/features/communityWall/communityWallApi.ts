import { baseApi } from "@/redux/api/baseApi";

export const communityWallApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityGratitude: builder.query({
      query: () => ({
        url: `api/v1/community-gratitude`,
        method: "GET",
      }),
      providesTags: ["CommunityGratitude"],
    }),

    postCommunityGratitude: builder.mutation({
      query: (doc) => ({
        url: `api/v1/community-gratitude`,
        method: "POST",
        body: doc,
      }),
      invalidatesTags: ["CommunityGratitude"],
    }),
  }),
});

export const { useGetCommunityGratitudeQuery, usePostCommunityGratitudeMutation } =
  communityWallApi;
