import { Entity, EntityId } from "../../../core/src/index.ts";
import { ProductParams, ProductType } from './Product.params.ts';
import { Amount } from "../shared/index.ts";

export default class Product extends Entity<ProductParams> {
    private constructor(props: ProductParams, id?: EntityId) {
        const { createdOn, updatedOn, deletedOn } = props;
        super(props, { id, createdOn, updatedOn, deletedOn });
    }

    public static create(props: ProductParams, id?: EntityId): Product {
        const { name, price, type, createdOn, updatedOn, deletedOn } = props;
        return new Product(
            {
                name,
                price,
                type,
                createdOn: createdOn || new Date(),
                updatedOn: updatedOn || new Date(),
                deletedOn,
            },
            id || new EntityId(),
        );
    }

    get id(): string {
        return this._id.toValue();
    }

    get name(): string {
        return this.entity.name;
    }

    get price(): Amount {
        return this.entity.price;
    }

    get type(): ProductType {
        return this.entity.type;
    }

    get createdOn(): Date | undefined {
        return this.entity.createdOn;
    }

    get updatedOn(): Date | undefined {
        return this.entity.updatedOn;
    }

    get deletedOn(): Date | undefined {
        return this.entity.deletedOn;
    }
}
