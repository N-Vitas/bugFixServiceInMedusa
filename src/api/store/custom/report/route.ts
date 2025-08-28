import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { REPORT_MODULE, ReportService } from "src/modules/report";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const reportService: ReportService = req.scope.resolve(REPORT_MODULE);
  const result = await reportService.priceRangeCategories();
  res.json({result});
};
