import { ValueObject } from "../common/ValueObject";
import { ensureTrimmedNonEmptyString } from "../common/guards";

export class TextValue extends ValueObject<string> {
  private constructor(value: string) {
    super(ensureTrimmedNonEmptyString(value, "text"));
  }

  static create(value: string): TextValue {
    return new TextValue(value);
  }

  get value(): string {
    return super.value;
  }
}
