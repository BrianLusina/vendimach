import { VendingMachineParams } from "./VendingMachine.params.ts";
import { Entity, EntityId } from "../../../core/src/index.ts";
import Rack from "../rack/Rack.entity.ts"
import VendingState from "../state/VendingState.ts";

export default class VendingMachine extends Entity<VendingMachineParams> {
    private readonly allRacks: Rack[];
    private readonly currentState: VendingState;

    private constructor(props: VendingMachineParams, id?: EntityId) {
        const { racks, currentState, createdOn, updatedOn, deletedOn } = props;
        super(props, { id, createdOn, updatedOn, deletedOn });
        this.allRacks = racks;
        this.currentState = currentState;
    }

    public static create(props: VendingMachineParams, id?: EntityId): VendingMachine {
        const { currentState, amount, racks, createdOn, updatedOn, deletedOn } = props;
        return new VendingMachine(
            {
                currentState,
                racks,
                amount,
                createdOn: createdOn || new Date(),
                updatedOn: updatedOn || new Date(),
                deletedOn,
            },
            id || new EntityId(),
        );
    }

    get numberOfRacks(): number {
        return this.allRacks.length;
    }

    get racks(): Rack[] {
        return this.allRacks;
    }

}