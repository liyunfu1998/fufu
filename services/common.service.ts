import apiSlice from "./api";

export const commonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getUploadToken: builder.query({
      query: () => ({
        url: `/api/upload/getToken`,
        method: "GET",
      }),
    }),
    getFeedInfo: builder.query({
      query: () => ({
        url: `/api/feed`,
        method: "GET",
      }),
    }),
  }),
});
