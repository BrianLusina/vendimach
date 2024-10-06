import EntityId from './EntityId.ts';

const isEntity = (v: unknown): v is Entity<unknown> => {
    return v instanceof Entity;
};

type EntityParams = {
    id?: EntityId;
} & CommonParams

/**
 * Entity is a base class for all domain entities.
 * This is an abstact class and cannot be instantiated directly, it can be inherited from to create a new entity.
 *
 * it provides and id property that is readonly, this is a design decision to ensure that once an entity is created, the id can remain unique
 * and immutable. note, that the ID is optional, this is by choice and the reason is to allow for creation and reconstitution.
 * Well, when the id is known (because we've already created it), we can pass it in. When we don't know the id (because we haven't created it yet),
 * we create a new one. This allows us to address both the Creation and Reconstitution events in the entity lifecycle
 *
 * The props for the class are stored in this.props.
 * The reason for that is because we want to leave the decision to the subclass on which properties getters and setters should be defined.
 *
 * We're using the equals(object?: Entity<T>) method to determine if an entity is referentially equivalent to another entity.
 * If referential equality doesn't determine that they're the same, we compare the id of this entity vs. the one we'recomparing it to.
 */
export default abstract class Entity<T> {
    protected readonly _id: EntityId;
    protected entity: T;
    protected _createdOn: Date | undefined;
    protected _updatedOn: Date | undefined;
    protected _deletedOn: Date | undefined;

    constructor(entity: T, params: EntityParams) {
        const { id, createdOn, updatedOn, deletedOn } = params;
        this._id = id ? id : new EntityId();
        this.entity = entity;
        this._createdOn = createdOn || new Date();
        this._updatedOn = updatedOn || new Date();
        this._deletedOn = deletedOn;
    }

    public equals(other?: Entity<T>): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        if (this === other) {
            return true;
        }
        if (!isEntity(other)) {
            return false;
        }

        return this._id.equals(other._id);
    }
}