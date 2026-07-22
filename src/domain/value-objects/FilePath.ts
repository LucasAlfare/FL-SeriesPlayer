import { ValueObject } from "../common/ValueObject";
import { ensureTrimmedNonEmptyString } from "../common/guards";

export class FilePath extends ValueObject<string> {
  private constructor(value: string) {
    super(ensureTrimmedNonEmptyString(value, "filePath"));
  }

  static create(value: string): FilePath {
    return new FilePath(value);
  }

  get value(): string {
    return super.value;
  }
}
