export default interface VendingState {
    insertMoney(amount: number): void;

    pressButton(rackNumber: number): void;

    returnChange(money: number): void;

    updateInventory(rackNumber: number): void;

    dispenseProduct(rackNumber: void): void;
}