import apiSlice from "./api";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/api/category",
        method: "GET",
      }),
      providesTags: (result: any, error: any, arg: any) =>
        result
          ? [
              ...result?.data?.categories.map(({ _id }: any) => ({
                type: "Category",
                id: _id,
              })),
              "Category",
            ]
          : ["Category"],
    }),

    getSingleCategory: builder.query({
      query: ({ id }: any) => ({
        url: `/api/category/${id}`,
        method: "GET",
      }),
      providesTags: (result: any, error: any, arg: any) => [
        { type: "Category", id: arg.id },
      ],
    }),

    updateCategory: builder.mutation({
      query: ({ id, body }: any) => ({
        url: `/api/category/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        { type: "Category", id: arg.id },
      ],
    }),

    createCategory: builder.mutation({
      query: (body: any) => ({
        url: "/api/category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetSingleCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApiSlice;
