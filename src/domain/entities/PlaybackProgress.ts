import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { PlaybackPosition } from "../value-objects/PlaybackPosition";
import { Duration } from "../value-objects/Duration";
import { VideoId } from "./Video";

export type PlaybackProgressId = EntityId<"playbackProgress">;

export interface PlaybackProgressProps {
  readonly id: PlaybackProgressId;
  readonly videoId: VideoId;
  readonly position: PlaybackPosition;
  readonly duration: Duration | null;
  readonly completed: boolean;
  readonly updatedAt: Date;
}

export class PlaybackProgress extends Entity<PlaybackProgressId> {
  private props: PlaybackProgressProps;

  private constructor(props: PlaybackProgressProps) {
    super(props.id);
    this.props = {
      ...props,
      updatedAt: new Date(props.updatedAt),
    };
  }

  static create(props: PlaybackProgressProps): PlaybackProgress {
    return new PlaybackProgress(props);
  }

  get videoId(): VideoId {
    return this.props.videoId;
  }

  get position(): PlaybackPosition {
    return this.props.position;
  }

  get duration(): Duration | null {
    return this.props.duration;
  }

  get completed(): boolean {
    return this.props.completed;
  }

  get updatedAt(): Date {
    return new Date(this.props.updatedAt);
  }

  updatePosition(position: PlaybackPosition): void {
    this.props = {
      ...this.props,
      position,
      updatedAt: new Date(),
    };
  }

  markCompleted(): void {
    this.props = {
      ...this.props,
      completed: true,
      updatedAt: new Date(),
    };
  }
}
