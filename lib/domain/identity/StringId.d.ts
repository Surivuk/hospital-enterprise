import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";
import UniqueEntityID from "./UniqueEntityID";
export default abstract class StringId extends UniqueEntityID<string> {
    constructor(id: string | StringValue | NotEmptyString);
}
