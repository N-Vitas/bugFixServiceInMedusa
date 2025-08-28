import ReportService from "./service";
import { Module } from "@medusajs/framework/utils";

export const REPORT_MODULE = "report"
export { ReportService };

export default Module(REPORT_MODULE, {
  service: ReportService,
})