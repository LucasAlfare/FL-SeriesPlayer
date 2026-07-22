import { Favorite, FavoriteId } from "../entities/Favorite";
import { VideoId } from "../entities/Video";

export interface FavoriteRepository {
  findById(id: FavoriteId): Promise<Favorite | null>;
  findByVideoId(videoId: VideoId): Promise<Favorite | null>;
  findAll(): Promise<ReadonlyArray<Favorite>>;
  add(favorite: Favorite): Promise<void>;
  remove(videoId: VideoId): Promise<void>;
  exists(videoId: VideoId): Promise<boolean>;
}
