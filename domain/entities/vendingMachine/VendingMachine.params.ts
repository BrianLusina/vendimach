import { Amount } from "../shared/index.ts";
import Rack from "../rack/index.ts";
import VendingState from "../state/VendingState.ts";

export type VendingMachineParams = {
    currentState: VendingState;
    racks: Rack[];
    amount: Amount;
} & CommonParams;
