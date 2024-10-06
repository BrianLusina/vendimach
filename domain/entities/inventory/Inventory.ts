import { Entity, EntityId } from "../../../core/src/index.ts";
import Product from "../product/index.ts";
import InventoryParams from './Inventory.params.ts';

export default class Inventory extends Entity<InventoryParams> {
    readonly products: Product[];

    constructor(params: InventoryParams, id?: EntityId) {
        const { products, createdOn, updatedOn, deletedOn } = params;
        super(params, { id, createdOn, updatedOn, deletedOn });
        this.products = products;
    }

    public static create(props: InventoryParams, id?: EntityId): Inventory {
        const { products, createdOn, updatedOn, deletedOn } = props;
        return new Inventory(
            {
                products,
                createdOn: createdOn || new Date(),
                updatedOn: updatedOn || new Date(),
                deletedOn,
            },
            id || new EntityId(),
        );
    }

}