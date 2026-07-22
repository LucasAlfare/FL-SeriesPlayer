import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { PlaybackPosition } from "../value-objects/PlaybackPosition";
import { VideoId } from "./Video";

export type HistoryEntryId = EntityId<"historyEntry">;

export interface HistoryEntryProps {
  readonly id: HistoryEntryId;
  readonly videoId: VideoId;
  readonly lastPosition: PlaybackPosition;
  readonly watchedAt: Date;
}

export class HistoryEntry extends Entity<HistoryEntryId> {
  private readonly props: HistoryEntryProps;

  private constructor(props: HistoryEntryProps) {
    super(props.id);
    this.props = {
      ...props,
      watchedAt: new Date(props.watchedAt),
    };
  }

  static create(props: HistoryEntryProps): HistoryEntry {
    return new HistoryEntry(props);
  }

  get videoId(): VideoId {
    return this.props.videoId;
  }

  get lastPosition(): PlaybackPosition {
    return this.props.lastPosition;
  }

  get watchedAt(): Date {
    return new Date(this.props.watchedAt);
  }
}
