import { DomainError } from "../common/DomainError";

export class InvalidDomainValueError extends DomainError {
  constructor(
    fieldName: string,
    reason: string,
  ) {
    super(`Invalid value for ${fieldName}: ${reason}.`);
  }
}
