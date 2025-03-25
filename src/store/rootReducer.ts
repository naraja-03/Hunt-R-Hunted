import { DiffCheckApi } from "../service/query/endpoints/diffCheckApi";
import { ParsePdfApi } from "../service/query/endpoints/parsePDFApi";
import { ReportApi } from "../service/query/endpoints/reportApi";
import appSlice from "../slice/appSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  application: appSlice,
  [ParsePdfApi.reducerPath]: ParsePdfApi.reducer,
  [DiffCheckApi.reducerPath]: DiffCheckApi.reducer,
  [ReportApi.reducerPath]: ReportApi.reducer,

});

export default rootReducer;
