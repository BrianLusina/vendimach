export default interface Repository<T> {
    create(e: T): Promise<unknown>;

    findById(e: string): Promise<T | null>;

    findAll(e: unknown): Promise<T[]>;

    exists(e: T): Promise<boolean>;
    
    update(e: T): Promise<T>;

    delete(e: T): Promise<unknown>;
}