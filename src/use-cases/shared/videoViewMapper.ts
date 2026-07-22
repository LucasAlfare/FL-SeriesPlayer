import { Video } from "../../domain";
import { VideoView } from "./VideoView";

export function toVideoView(video: Video): VideoView {
  return {
    id: video.id.value,
    title: video.title.value,
    filePath: video.filePath.value,
    durationSeconds: video.duration?.value ?? null,
    status: video.status,
    createdAt: video.createdAt.toISOString(),
    updatedAt: video.updatedAt.toISOString(),
    thumbnailPath: video.thumbnailPath?.value ?? null,
    fileSizeBytes: video.fileSizeBytes,
  };
}
