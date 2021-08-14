import UniqueEntityID from "./identity/base/UniqueEntityID";

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

type EntityId = UniqueEntityID<string | number>;

export abstract class Entity<T> {
    protected readonly _id: EntityId;
    protected props: T;

    constructor(id: EntityId, props: T) {
        this._id = id;
        this.props = props;
    }

    public equals(object?: Entity<T>): boolean {
        if (object == null || object == undefined) return false;
        if (this === object) return true;
        if (!isEntity(object)) return false;
        return this._id.equals(object._id);
    }
}