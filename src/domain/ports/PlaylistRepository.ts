import { Playlist, PlaylistId } from "../entities/Playlist";

export interface PlaylistRepository {
  findById(id: PlaylistId): Promise<Playlist | null>;
  findAll(): Promise<ReadonlyArray<Playlist>>;
  save(playlist: Playlist): Promise<void>;
  delete(id: PlaylistId): Promise<void>;
}
