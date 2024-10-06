import EntityId from "../../../core/src/lib/entities/EntityId.ts";

export type RackParams = {
    productIds: EntityId[];
    rackNumber: number;
} & CommonParams;
