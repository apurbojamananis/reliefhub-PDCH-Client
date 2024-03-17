import { baseApi } from "@/redux/api/baseApi";

export const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: `api/v1/testimonial`,
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    postTestimonials: builder.mutation({
      query: (doc) => ({
        url: `api/v1/testimonial`,
        method: "POST",
        body: doc,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const { useGetTestimonialsQuery, usePostTestimonialsMutation } = testimonialsApi;
