/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.REACT_APP_BASE_URL ||'http://localhost:5000',
  prepareHeaders: (headers) => {
    return headers;
  },
});


export { appBaseQuery };
