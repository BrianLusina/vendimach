import { Amount } from "../shared/index.ts";

export type ProductParams = {
    name: string;
    price: Amount;
    type: ProductType;
    quantity: number;
} & CommonParams;

export enum ProductType {
    SNACK = 'Snack',
    BEVERAGE = 'Beverage',
    OTHER = 'Other',
    CHOCOLATE = 'Chocolate'
} 