"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotEmptyString_1 = __importDefault(require("../types/NotEmptyString"));
const UniqueEntityID_1 = __importDefault(require("./UniqueEntityID"));
class StringId extends UniqueEntityID_1.default {
    constructor(id) {
        let newValue;
        if (typeof id === "string")
            newValue = id;
        else
            newValue = id.value;
        super(new NotEmptyString_1.default(newValue, "STRING_ID").value);
    }
}
exports.default = StringId;
//# sourceMappingURL=StringId.js.map