import { FilePath } from "../value-objects/FilePath";
import { Video, VideoId } from "../entities/Video";

export interface VideoRepository {
  findById(id: VideoId): Promise<Video | null>;
  findByFilePath(filePath: FilePath): Promise<Video | null>;
  findAll(): Promise<ReadonlyArray<Video>>;
  save(video: Video): Promise<void>;
  delete(id: VideoId): Promise<void>;
}
