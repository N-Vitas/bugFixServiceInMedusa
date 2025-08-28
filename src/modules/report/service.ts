import { 
  InjectManager,
  MedusaContext,
  MedusaService,
} from "@medusajs/framework/utils"
import { Context } from "@medusajs/framework/types";
import { EntityManager } from "@mikro-orm/knex";

export default class ReportService extends MedusaService({}) {

  getMessage() {
    return "Hello, world!"
  }

  @InjectManager()
  async priceRangeCategories(@MedusaContext() sharedContext?: Context<EntityManager>): Promise<any> {
    const data = await sharedContext?.manager?.execute(`select now()`)
    return data;
  }
}