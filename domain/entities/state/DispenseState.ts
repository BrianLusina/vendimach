import VendingState from "./VendingState.ts";

export default class DispenseState implements VendingState {
    insertMoney(amount: number): void {
        throw new Error("Method not implemented.");
    }
    pressButton(rackNumber: number): void {
        throw new Error("Method not implemented.");
    }
    returnChange(money: number): void {
        throw new Error("Method not implemented.");
    }
    updateInventory(rackNumber: number): void {
        throw new Error("Method not implemented.");
    }
    dispenseProduct(rackNumber: void): void {
        throw new Error("Method not implemented.");
    }
}