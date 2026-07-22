import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { VideoId } from "./Video";

export type PlaylistItemId = EntityId<"playlistItem">;

export interface PlaylistItemProps {
  readonly id: PlaylistItemId;
  readonly videoId: VideoId;
  readonly order: number;
  readonly addedAt: Date;
}

export class PlaylistItem extends Entity<PlaylistItemId> {
  private readonly props: PlaylistItemProps;

  private constructor(props: PlaylistItemProps) {
    super(props.id);
    this.props = {
      ...props,
      addedAt: new Date(props.addedAt),
    };
  }

  static create(props: PlaylistItemProps): PlaylistItem {
    return new PlaylistItem(props);
  }

  get videoId(): VideoId {
    return this.props.videoId;
  }

  get order(): number {
    return this.props.order;
  }

  get addedAt(): Date {
    return new Date(this.props.addedAt);
  }
}
