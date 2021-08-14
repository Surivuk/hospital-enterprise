"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const isEntity = (v) => {
    return v instanceof Entity;
};
class Entity {
    constructor(id, props) {
        this._id = id;
        this.props = props;
    }
    equals(object) {
        if (object == null || object == undefined)
            return false;
        if (this === object)
            return true;
        if (!isEntity(object))
            return false;
        return this._id.equals(object._id);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map