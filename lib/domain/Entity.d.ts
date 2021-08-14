import UniqueEntityID from "./identity/UniqueEntityID";
declare type EntityId = UniqueEntityID<string | number>;
export declare abstract class Entity<T> {
    protected readonly _id: EntityId;
    protected props: T;
    constructor(id: EntityId, props: T);
    equals(object?: Entity<T>): boolean;
}
export {};
