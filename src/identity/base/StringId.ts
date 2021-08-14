import NotEmptyString from "@domain/types/NotEmptyString";
import StringValue from "@domain/types/StringValue";
import UniqueEntityID from "./UniqueEntityID";

export default class StringId extends UniqueEntityID<string> {
    constructor(id: string | StringValue | NotEmptyString) {
        let newValue: string
        if (typeof id === "string")
            newValue = id;
        else
            newValue = id.value;
        super(new NotEmptyString(newValue, "STRING_ID").value)
    }
}