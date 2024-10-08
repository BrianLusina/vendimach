import { EntityId } from "../../../../../core/src/index.ts";
import { UseCase } from "../../../../../core/src/lib/ports/index.ts";
import Product from "../../../../entities/product/index.ts";

export default class GetProductById implements UseCase<EntityId, Product> {

    execute(params?: EntityId): Product | Promise<Product> {
        throw new Error("Method not implemented.");
    }
}