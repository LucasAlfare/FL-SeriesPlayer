import { VideoStatus } from "../../domain";

export interface VideoView {
  readonly id: string;
  readonly title: string;
  readonly filePath: string;
  readonly durationSeconds: number | null;
  readonly status: VideoStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly thumbnailPath: string | null;
  readonly fileSizeBytes: number | null;
}
