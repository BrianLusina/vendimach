import { UseCase } from "../../../../../core/src/lib/ports/index.ts";
import { Amount } from "../../../../entities/shared/index.ts";

type ValidateMoneyParams = {
    money: Amount;
}

/**
 * Use case that validates money
 */
export default class ValidateMoney implements UseCase<ValidateMoneyParams, boolean> {

    execute(params: ValidateMoneyParams): boolean | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}