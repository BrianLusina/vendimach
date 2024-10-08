import { EntityId } from "../../../../../core/src/index.ts";
import { UseCase } from "../../../../../core/src/lib/ports/index.ts";
import { ProductType } from "../../../../entities/product/Product.params.ts";
import Product from "../../../../entities/product/index.ts";
import { Amount } from "../../../../entities/shared/index.ts";

type AddProductRequestParams = {
    name: string;
    price: Amount;
    type: ProductType;
    vendingMachineId: EntityId;
}

export default class AddProduct implements UseCase<AddProductRequestParams, Product> {

    execute(params?: AddProductRequestParams): Product | Promise<Product> {
        throw new Error("Method not implemented.");
    }
}
