export abstract class ValueObject<TValue> {
  protected constructor(private readonly innerValue: TValue) {}

  get value(): TValue {
    return this.innerValue;
  }

  equals(other: ValueObject<TValue>): boolean {
    return JSON.stringify(this.innerValue) === JSON.stringify(other.value);
  }
}
