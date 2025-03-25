import { DiffCheckApi } from "../service/query/endpoints/diffCheckApi";
import { ParsePdfApi } from "../service/query/endpoints/parsePDFApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  numPages: number;
  diff: any[];
  pdf1Texts: any;
  pdf2Texts: any;
  pdfPaths:any;
  
}

const initialState: IState = {
  numPages: 0,
  diff: [],
  pdf1Texts: {},
  pdf2Texts: {},
  pdfPaths:{}
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      DiffCheckApi.endpoints.diffCheck.matchFulfilled,
      (state, action: PayloadAction<{ diff: any[]; }>) => {
        const { diff } = action.payload;
        state.diff = diff;
      }
    );
    builder.addMatcher(
      ParsePdfApi.endpoints.parsePdf.matchFulfilled,
      (state, action: PayloadAction<{ numPages: number, pdf1Texts: any, pdf2Texts: any,pdfPaths:any }>) => {
        const { numPages, pdf1Texts, pdf2Texts,pdfPaths } = action.payload;
        state.numPages = numPages;
        state.pdf1Texts = pdf1Texts;
        state.pdf2Texts = pdf2Texts;
        state.pdfPaths = pdfPaths;
      }
    );
  },
});

export default appSlice.reducer;
