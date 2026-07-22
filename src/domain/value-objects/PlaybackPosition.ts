import { ValueObject } from "../common/ValueObject";
import { ensureNonNegativeNumber } from "../common/guards";

export class PlaybackPosition extends ValueObject<number> {
  private constructor(value: number) {
    super(ensureNonNegativeNumber(value, "playbackPositionSeconds"));
  }

  static create(value: number): PlaybackPosition {
    return new PlaybackPosition(value);
  }

  get value(): number {
    return super.value;
  }

  isAtStart(): boolean {
    return this.value === 0;
  }
}
