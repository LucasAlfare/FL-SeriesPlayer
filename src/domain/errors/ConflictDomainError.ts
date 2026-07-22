import { DomainError } from "../common/DomainError";

export class ConflictDomainError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
