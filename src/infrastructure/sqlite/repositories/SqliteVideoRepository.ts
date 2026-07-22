import { DatabaseSync } from "node:sqlite";
import { FilePath, Video, VideoId, VideoRepository } from "../../../domain";
import { toVideoEntity, toVideoInsertRow, VideoRow } from "../mappers/videoRowMapper";

export class SqliteVideoRepository implements VideoRepository {
  constructor(private readonly database: DatabaseSync) {}

  async findById(id: VideoId): Promise<Video | null> {
    const row = this.database
      .prepare("SELECT * FROM videos WHERE id = ?")
      .get(id.value) as unknown as VideoRow | undefined;

    return row ? toVideoEntity(row) : null;
  }

  async findByFilePath(filePath: FilePath): Promise<Video | null> {
    const row = this.database
      .prepare("SELECT * FROM videos WHERE file_path = ?")
      .get(filePath.value) as unknown as VideoRow | undefined;

    return row ? toVideoEntity(row) : null;
  }

  async findAll(): Promise<ReadonlyArray<Video>> {
    const rows = this.database
      .prepare("SELECT * FROM videos ORDER BY created_at DESC, title ASC")
      .all() as unknown as VideoRow[];

    return rows.map(toVideoEntity);
  }

  async save(video: Video): Promise<void> {
    const row = toVideoInsertRow(video);

    this.database
      .prepare(
        `
          INSERT INTO videos (
            id,
            title,
            file_path,
            duration_seconds,
            status,
            created_at,
            updated_at,
            thumbnail_path,
            file_size_bytes
          ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
          )
          ON CONFLICT(id) DO UPDATE SET
            title = excluded.title,
            file_path = excluded.file_path,
            duration_seconds = excluded.duration_seconds,
            status = excluded.status,
            created_at = excluded.created_at,
            updated_at = excluded.updated_at,
            thumbnail_path = excluded.thumbnail_path,
            file_size_bytes = excluded.file_size_bytes
        `,
      )
      .run(
        row.id,
        row.title,
        row.file_path,
        row.duration_seconds,
        row.status,
        row.created_at,
        row.updated_at,
        row.thumbnail_path,
        row.file_size_bytes,
      );
  }

  async delete(id: VideoId): Promise<void> {
    this.database.prepare("DELETE FROM videos WHERE id = ?").run(id.value);
  }
}
