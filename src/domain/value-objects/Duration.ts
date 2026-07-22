import { ValueObject } from "../common/ValueObject";
import { ensureNonNegativeNumber } from "../common/guards";

export class Duration extends ValueObject<number> {
  private constructor(value: number) {
    super(ensureNonNegativeNumber(value, "durationSeconds"));
  }

  static create(value: number): Duration {
    return new Duration(value);
  }

  get value(): number {
    return super.value;
  }

  isZero(): boolean {
    return this.value === 0;
  }
}
