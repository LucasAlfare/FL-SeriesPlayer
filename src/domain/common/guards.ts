import { InvalidDomainValueError } from "../errors/InvalidDomainValueError";

export function ensureString(value: string, fieldName: string): string {
  if (typeof value !== "string") {
    throw new InvalidDomainValueError(fieldName, "must be a string");
  }

  return value;
}

export function ensureTrimmedNonEmptyString(value: string, fieldName: string): string {
  const normalized = ensureString(value, fieldName).trim();

  if (normalized.length === 0) {
    throw new InvalidDomainValueError(fieldName, "must not be empty");
  }

  return normalized;
}

export function ensureFiniteNumber(value: number, fieldName: string): number {
  if (!Number.isFinite(value)) {
    throw new InvalidDomainValueError(fieldName, "must be a finite number");
  }

  return value;
}

export function ensureInteger(value: number, fieldName: string): number {
  const normalized = ensureFiniteNumber(value, fieldName);

  if (!Number.isInteger(normalized)) {
    throw new InvalidDomainValueError(fieldName, "must be an integer");
  }

  return normalized;
}

export function ensureNonNegativeNumber(value: number, fieldName: string): number {
  const normalized = ensureFiniteNumber(value, fieldName);

  if (normalized < 0) {
    throw new InvalidDomainValueError(fieldName, "must be greater than or equal to zero");
  }

  return normalized;
}

export function ensurePositiveNumber(value: number, fieldName: string): number {
  const normalized = ensureFiniteNumber(value, fieldName);

  if (normalized <= 0) {
    throw new InvalidDomainValueError(fieldName, "must be greater than zero");
  }

  return normalized;
}
