import { Entity, EntityId } from "../../../core/src/index.ts";
import { UserParams } from './User.params.ts';

export default class User extends Entity<UserParams> {

    constructor(params: UserParams, id?: EntityId) {
        const { createdOn, updatedOn, deletedOn } = params;
        super(params, { id, createdOn, updatedOn, deletedOn });
    }

    public static create(params: UserParams, id?: EntityId): User {
        const user = new User(
            {
                ...params,
                createdOn: params.createdOn ? params.createdOn : new Date(),
                updatedOn: params.updatedOn ? params.updatedOn : new Date(),
                deletedOn: params.deletedOn ? params.deletedOn : new Date(),
            },
            id,
        );

        return user;
    }
}