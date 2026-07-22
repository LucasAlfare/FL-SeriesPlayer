import { DomainError } from "../common/DomainError";

export class NotFoundDomainError extends DomainError {
  constructor(entityName: string, identifier: string) {
    super(`${entityName} with identifier ${identifier} was not found.`);
  }
}
