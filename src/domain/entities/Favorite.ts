import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { VideoId } from "./Video";

export type FavoriteId = EntityId<"favorite">;

export interface FavoriteProps {
  readonly id: FavoriteId;
  readonly videoId: VideoId;
  readonly createdAt: Date;
}

export class Favorite extends Entity<FavoriteId> {
  private readonly props: FavoriteProps;

  private constructor(props: FavoriteProps) {
    super(props.id);
    this.props = {
      ...props,
      createdAt: new Date(props.createdAt),
    };
  }

  static create(props: FavoriteProps): Favorite {
    return new Favorite(props);
  }

  get videoId(): VideoId {
    return this.props.videoId;
  }

  get createdAt(): Date {
    return new Date(this.props.createdAt);
  }
}
