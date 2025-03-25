import { DiffCheckApi } from "../service/query/endpoints/diffCheckApi";
import { ParsePdfApi } from "../service/query/endpoints/parsePDFApi";
import { ReportApi } from "../service/query/endpoints/reportApi";

const middleware = [
    DiffCheckApi.middleware,
    ParsePdfApi.middleware,
    ReportApi.middleware


];

export default middleware;