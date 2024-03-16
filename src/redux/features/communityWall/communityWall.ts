import { baseApi } from "@/redux/api/baseApi";

export const communityWallApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommunityGratitude: builder.query({
      query: () => ({
        url: "/community-gratitude",
        method: "GET",
      }),
      providesTags: ["CommunityGratitude"],
    }),
    postCommunityGratitude: builder.mutation({
      query: (doc) => ({
        url: "/community-gratitude",
        method: "POST",
        body: doc,
      }),
    }),
  }),
});

export const { useGetCommunityGratitudeQuery, usePostCommunityGratitudeMutation } =
  communityWallApi;
