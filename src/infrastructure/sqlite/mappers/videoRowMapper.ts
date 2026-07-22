import {
  Duration,
  EntityId,
  FilePath,
  TextValue,
  Video,
  VideoStatus,
} from "../../../domain";

export interface VideoRow {
  readonly id: string;
  readonly title: string;
  readonly file_path: string;
  readonly duration_seconds: number | null;
  readonly status: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly thumbnail_path: string | null;
  readonly file_size_bytes: number | null;
}

export interface VideoInsertRow {
  readonly id: string;
  readonly title: string;
  readonly file_path: string;
  readonly duration_seconds: number | null;
  readonly status: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly thumbnail_path: string | null;
  readonly file_size_bytes: number | null;
}

export function toVideoInsertRow(video: Video): VideoInsertRow {
  return {
    id: video.id.value,
    title: video.title.value,
    file_path: video.filePath.value,
    duration_seconds: video.duration?.value ?? null,
    status: video.status,
    created_at: video.createdAt.toISOString(),
    updated_at: video.updatedAt.toISOString(),
    thumbnail_path: video.thumbnailPath?.value ?? null,
    file_size_bytes: video.fileSizeBytes,
  };
}

export function toVideoEntity(row: VideoRow): Video {
  const duration =
    row.duration_seconds == null ? null : Duration.create(row.duration_seconds);
  const thumbnailPath =
    row.thumbnail_path == null ? null : FilePath.create(row.thumbnail_path);

  return Video.create({
    id: EntityId.create("video", row.id),
    title: TextValue.create(row.title),
    filePath: FilePath.create(row.file_path),
    duration,
    status: toVideoStatus(row.status),
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
    thumbnailPath,
    fileSizeBytes: row.file_size_bytes,
  });
}

function toVideoStatus(value: string): VideoStatus {
  if (value === VideoStatus.Available) {
    return VideoStatus.Available;
  }

  if (value === VideoStatus.Unavailable) {
    return VideoStatus.Unavailable;
  }

  throw new Error(`Unsupported video status: ${value}`);
}
