"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniqueEntityID {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    equals(id) {
        return this._value === id._value;
    }
}
exports.default = UniqueEntityID;
//# sourceMappingURL=UniqueEntityID.js.map