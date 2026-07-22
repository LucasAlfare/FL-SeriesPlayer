import { ValueObject } from "./ValueObject";
import { ensureTrimmedNonEmptyString } from "./guards";

export class EntityId<TKind extends string> extends ValueObject<string> {
  private constructor(
    private readonly kind: TKind,
    value: string,
  ) {
    super(ensureTrimmedNonEmptyString(value, `${kind}Id`));
  }

  static create<TKind extends string>(kind: TKind, value: string): EntityId<TKind> {
    return new EntityId(kind, value);
  }

  get value(): string {
    return super.value;
  }

  get entityKind(): TKind {
    return this.kind;
  }
}
