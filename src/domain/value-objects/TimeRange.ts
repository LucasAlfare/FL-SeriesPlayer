import { ValueObject } from "../common/ValueObject";
import {
  ensureNonNegativeNumber,
  ensurePositiveNumber,
} from "../common/guards";

export interface TimeRangeProps {
  readonly startSeconds: number;
  readonly endSeconds: number;
}

export class TimeRange extends ValueObject<TimeRangeProps> {
  private constructor(props: TimeRangeProps) {
    const startSeconds = ensureNonNegativeNumber(props.startSeconds, "startSeconds");
    const endSeconds = ensurePositiveNumber(props.endSeconds, "endSeconds");

    if (endSeconds <= startSeconds) {
      throw new Error("endSeconds must be greater than startSeconds.");
    }

    super({
      startSeconds,
      endSeconds,
    });
  }

  static create(props: TimeRangeProps): TimeRange {
    return new TimeRange(props);
  }

  get startSeconds(): number {
    return this.value.startSeconds;
  }

  get endSeconds(): number {
    return this.value.endSeconds;
  }

  get durationSeconds(): number {
    return this.endSeconds - this.startSeconds;
  }

  contains(positionSeconds: number): boolean {
    return positionSeconds >= this.startSeconds && positionSeconds < this.endSeconds;
  }
}
