import { EntityId } from "../../../../core/src/index.ts";
import { UseCase } from "../../../../core/src/lib/ports/index.ts";
import Product from "../../../entities/product/index.ts";

type DispenseProductRequestParams = {
    productId: EntityId;
    count: number;
    vendingMachineId: EntityId;
}

export default class DispenseProduct implements UseCase<DispenseProductRequestParams, Product> {

    execute(params?: DispenseProductRequestParams): Product | Promise<Product> {
        throw new Error("Method not implemented.");
    }
}