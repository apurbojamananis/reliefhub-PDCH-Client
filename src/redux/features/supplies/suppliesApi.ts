import { baseApi } from "@/redux/api/baseApi";

export const suppliesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: (limit) => ({
        url: `/api/v1/supplies?limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Supplies"],
    }),

    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/api/v1/supplies/${id}`,
        method: "GET",
      }),
      providesTags: ["Supplies"],
    }),
    createSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: `/api/v1/supplies`,
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["Supplies"],
    }),

    updateSupply: builder.mutation({
      query: ({ id, ...updateInfo }) => ({
        url: `/api/v1/supplies/${id}`,
        method: "PUT",
        body: updateInfo,
      }),
      invalidatesTags: ["Supplies"],
    }),

    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/api/v1/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = suppliesApi;
