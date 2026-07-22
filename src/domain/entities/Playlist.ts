import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { TextValue } from "../value-objects/TextValue";
import { PlaylistItem } from "./PlaylistItem";
import { VideoId } from "./Video";

export type PlaylistId = EntityId<"playlist">;

export interface PlaylistProps {
  readonly id: PlaylistId;
  readonly name: TextValue;
  readonly description: TextValue | null;
  readonly items: PlaylistItem[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class Playlist extends Entity<PlaylistId> {
  private props: PlaylistProps;

  private constructor(props: PlaylistProps) {
    super(props.id);
    this.props = {
      ...props,
      items: [...props.items],
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    };
  }

  static create(props: PlaylistProps): Playlist {
    return new Playlist(props);
  }

  get name(): TextValue {
    return this.props.name;
  }

  get description(): TextValue | null {
    return this.props.description;
  }

  get items(): readonly PlaylistItem[] {
    return [...this.props.items].sort((left, right) => left.order - right.order);
  }

  get createdAt(): Date {
    return new Date(this.props.createdAt);
  }

  get updatedAt(): Date {
    return new Date(this.props.updatedAt);
  }

  rename(name: TextValue): void {
    this.props = {
      ...this.props,
      name,
      updatedAt: new Date(),
    };
  }

  updateDescription(description: TextValue | null): void {
    this.props = {
      ...this.props,
      description,
      updatedAt: new Date(),
    };
  }

  addVideo(videoId: VideoId): void {
    const alreadyExists = this.props.items.some((item) => item.videoId.equals(videoId));

    if (alreadyExists) {
      return;
    }

    const nextOrder = this.props.items.length + 1;
    const item = PlaylistItem.create({
      id: EntityId.create("playlistItem", `${this.id.value}-${nextOrder}`),
      videoId,
      order: nextOrder,
      addedAt: new Date(),
    });

    this.props = {
      ...this.props,
      items: [...this.props.items, item],
      updatedAt: new Date(),
    };
  }

  removeVideo(videoId: VideoId): void {
    const nextItems = this.props.items.filter((item) => !item.videoId.equals(videoId));

    if (nextItems.length === this.props.items.length) {
      return;
    }

    this.props = {
      ...this.props,
      items: nextItems.map((item, index) =>
        PlaylistItem.create({
          id: item.id,
          videoId: item.videoId,
          order: index + 1,
          addedAt: item.addedAt,
        }),
      ),
      updatedAt: new Date(),
    };
  }
}
