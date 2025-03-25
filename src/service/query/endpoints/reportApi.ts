import { createApi } from "@reduxjs/toolkit/query/react";
import { appBaseQuery } from "../baseQuery/appBaseQuery";

export const ReportApi = createApi({
  reducerPath: "ReportApi",
  baseQuery: appBaseQuery,
  endpoints: (builder) => ({
    getReport: builder.mutation({
      query: (reportRequest: { pdfPaths :any }) => {

        return {
          url: 'getReport',
          method: "POST",
          body: reportRequest,
        };
      },
      transformResponse: (response: any) => response,
    }),
  }),
});

export const { useGetReportMutation } = ReportApi;
