import { HistoryEntry, HistoryEntryId } from "../entities/HistoryEntry";
import { HistorySortOrder } from "../enums/HistorySortOrder";
import { VideoId } from "../entities/Video";

export interface HistoryRepository {
  findById(id: HistoryEntryId): Promise<HistoryEntry | null>;
  findByVideoId(videoId: VideoId): Promise<ReadonlyArray<HistoryEntry>>;
  findAll(sortOrder?: HistorySortOrder): Promise<ReadonlyArray<HistoryEntry>>;
  append(entry: HistoryEntry): Promise<void>;
  clear(): Promise<void>;
}
