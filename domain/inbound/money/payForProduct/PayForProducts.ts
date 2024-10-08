import { EntityId } from "../../../../core/src/index.ts";
import { UseCase } from "../../../../core/src/lib/ports/index.ts";
import { Amount } from "../../../entities/shared/index.ts";

type PayForProductsParams = {
    money: Amount;
    productIds: EntityId[];
    vendingMachineId: EntityId;
}

type PayForProductsResponse = {
    change: Amount;
}

/**
 * Use case that allows paying for products at a given vending machine. This will dispense change
 * for excess amount provided, or throw an error if the amount is less than the total amount of the 
 * products selected. If the amount is less than the total or equal to the total, no error is returned
 * and the use case executes successfully 
 */
export default class PayForProducts implements UseCase<PayForProductsParams, PayForProductsResponse> {

    execute(params: PayForProductsParams): PayForProductsResponse | Promise<PayForProductsResponse> {
        throw new Error("Method not implemented.");
    }
}