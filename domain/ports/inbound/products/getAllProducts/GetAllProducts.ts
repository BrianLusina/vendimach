import { EntityId } from "../../../../../core/src/index.ts";
import { CommonRequestParams } from "../../../../../core/src/lib/ports/Params.d.ts";
import { UseCase } from "../../../../../core/src/lib/ports/index.ts";
import { ProductType } from "../../../../entities/product/Product.params.ts";
import Product from "../../../../entities/product/index.ts";

type GetAllProductsParams = {
    /**
     * Product type
     */
    type: ProductType;
    /**
     * If the vending machine ID is provided, then products are sought for in that vending machine.
     * If not, then all products will be retrieved across all vending machines
     */
    vendingMachineId?: EntityId;
} & CommonRequestParams;

export default class GetAllProducts implements UseCase<GetAllProductsParams, Product[]> {

    execute(params?: GetAllProductsParams | undefined): Product[] | Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}