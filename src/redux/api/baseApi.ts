import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://l2-b2-front-end-assignment-6-backend-server.vercel.app/",
  // }),
  tagTypes: ["Supplies", "CommunityGratitude", "testimonial", "volunteer"],
  endpoints: () => ({}),
});
