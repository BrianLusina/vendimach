import { Entity, EntityId } from "../../../core/src/index.ts";
import { RackParams } from './Rack.params.ts';


export default class Rack extends Entity<RackParams> {
    protected readonly rackNumber: number;
    protected readonly productIds: EntityId[];

    constructor(params: RackParams, id?: EntityId) {
        const { rackNumber, productIds, createdOn, updatedOn, deletedOn } = params;
        super(params, { id, createdOn, updatedOn, deletedOn });
        this.rackNumber = rackNumber;
        this.productIds = productIds;
    }

    public static create(props: RackParams, id?: EntityId): Rack {
        const { rackNumber, productIds, createdOn, updatedOn, deletedOn } = props;
        return new Rack(
            {
                rackNumber,
                productIds,
                createdOn: createdOn || new Date(),
                updatedOn: updatedOn || new Date(),
                deletedOn,
            },
            id || new EntityId(),
        );
    }

    get products(): EntityId[] {
        return this.productIds
    }

    get isEmpty(): boolean {
        return this.productIds.length === 0;
    }

    get number(): number {
        return this.rackNumber;
    }

}
