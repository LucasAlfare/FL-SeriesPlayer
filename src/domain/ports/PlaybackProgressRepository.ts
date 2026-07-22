import { PlaybackProgress, PlaybackProgressId } from "../entities/PlaybackProgress";
import { VideoId } from "../entities/Video";

export interface PlaybackProgressRepository {
  findById(id: PlaybackProgressId): Promise<PlaybackProgress | null>;
  findByVideoId(videoId: VideoId): Promise<PlaybackProgress | null>;
  findAll(): Promise<ReadonlyArray<PlaybackProgress>>;
  save(progress: PlaybackProgress): Promise<void>;
  delete(id: PlaybackProgressId): Promise<void>;
  deleteByVideoId(videoId: VideoId): Promise<void>;
}
