import { EntityId } from "../../../../../core/src/index.ts";
import { CommonRequestParams } from "../../../../../core/src/lib/ports/Params.d.ts";
import { UseCase } from "../../../../../core/src/lib/ports/index.ts";
import Product from "../../../../entities/product/index.ts";

type SelectProductsParams = {
    vendingMachineId: EntityId;

    productIds: EntityId[];
} & CommonRequestParams;

export default class SelectProducts implements UseCase<SelectProductsParams, Product[]> {

    constructor() {

    }

    execute(params?: SelectProductsParams | undefined): Product[] | Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}