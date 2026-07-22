import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { FilePath } from "../value-objects/FilePath";
import { TextValue } from "../value-objects/TextValue";
import { Duration } from "../value-objects/Duration";
import { VideoStatus } from "../enums/VideoStatus";

export type VideoId = EntityId<"video">;

export interface VideoProps {
  readonly id: VideoId;
  readonly title: TextValue;
  readonly filePath: FilePath;
  readonly duration: Duration | null;
  readonly status: VideoStatus;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly thumbnailPath: FilePath | null;
  readonly fileSizeBytes: number | null;
}

export class Video extends Entity<VideoId> {
  private props: VideoProps;

  private constructor(props: VideoProps) {
    super(props.id);
    this.props = {
      ...props,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    };
  }

  static create(props: VideoProps): Video {
    return new Video(props);
  }

  get title(): TextValue {
    return this.props.title;
  }

  get filePath(): FilePath {
    return this.props.filePath;
  }

  get duration(): Duration | null {
    return this.props.duration;
  }

  get status(): VideoStatus {
    return this.props.status;
  }

  get createdAt(): Date {
    return new Date(this.props.createdAt);
  }

  get updatedAt(): Date {
    return new Date(this.props.updatedAt);
  }

  get thumbnailPath(): FilePath | null {
    return this.props.thumbnailPath;
  }

  get fileSizeBytes(): number | null {
    return this.props.fileSizeBytes;
  }

  rename(title: TextValue): void {
    this.props = {
      ...this.props,
      title,
      updatedAt: new Date(),
    };
  }

  setDuration(duration: Duration | null): void {
    this.props = {
      ...this.props,
      duration,
      updatedAt: new Date(),
    };
  }

  setThumbnailPath(thumbnailPath: FilePath | null): void {
    this.props = {
      ...this.props,
      thumbnailPath,
      updatedAt: new Date(),
    };
  }

  setFileSizeBytes(fileSizeBytes: number | null): void {
    this.props = {
      ...this.props,
      fileSizeBytes,
      updatedAt: new Date(),
    };
  }

  markAvailable(): void {
    this.props = {
      ...this.props,
      status: VideoStatus.Available,
      updatedAt: new Date(),
    };
  }

  markUnavailable(): void {
    this.props = {
      ...this.props,
      status: VideoStatus.Unavailable,
      updatedAt: new Date(),
    };
  }
}
