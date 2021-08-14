import NotEmptyString from "../types/NotEmptyString";
import StringValue from "../types/StringValue";
import UniqueEntityID from "./UniqueEntityID";
export default abstract class StringId extends UniqueEntityID<string> {
    constructor(id: string | StringValue | NotEmptyString);
}
