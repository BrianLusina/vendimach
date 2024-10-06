import { EntityId } from "../../../../core/src/index.ts";
import { UseCase } from "../../../../core/src/lib/ports/index.ts";
import Product from "../../../entities/product/index.ts";

type RemoveProductRequestParams = {
    productId: EntityId;
    vendingMachineId: EntityId;
}

export default class RemoveProduct implements UseCase<RemoveProductRequestParams, Product> {

    execute(params?: RemoveProductRequestParams): Product | Promise<Product> {
        throw new Error("Method not implemented.");
    }
}