import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  Duration,
  EntityId,
  FilePath,
  TextValue,
  Video,
  VideoStatus,
} from "../../../src/domain";
import { SqliteVideoRepository } from "../../../src/infrastructure/sqlite";
import { createSqliteTestDatabase } from "../../helpers/sqliteTestDatabase";

describe("SqliteVideoRepository", () => {
  const databases: Array<{ close: () => void }> = [];

  afterEach(() => {
    while (databases.length > 0) {
      databases.pop()?.close();
    }
  });

  it("persists and loads a video", async () => {
    const database = createSqliteTestDatabase();
    databases.push(database);
    const repository = new SqliteVideoRepository(database);
    const now = new Date("2026-07-22T10:00:00.000Z");
    const video = Video.create({
      id: EntityId.create("video", "video-1"),
      title: TextValue.create("Episode 1"),
      filePath: FilePath.create("C:/videos/episode-1.mp4"),
      duration: Duration.create(123.45),
      status: VideoStatus.Available,
      createdAt: now,
      updatedAt: now,
      thumbnailPath: FilePath.create("C:/thumbs/episode-1.jpg"),
      fileSizeBytes: 1_048_576,
    });

    await repository.save(video);

    const byId = await repository.findById(EntityId.create("video", "video-1"));
    const byFilePath = await repository.findByFilePath(
      FilePath.create("C:/videos/episode-1.mp4"),
    );
    const all = await repository.findAll();

    assert.equal(byId?.id.value, "video-1");
    assert.equal(byId?.title.value, "Episode 1");
    assert.equal(byId?.filePath.value, "C:/videos/episode-1.mp4");
    assert.equal(byId?.duration?.value, 123.45);
    assert.equal(byId?.thumbnailPath?.value, "C:/thumbs/episode-1.jpg");
    assert.equal(byId?.fileSizeBytes, 1_048_576);
    assert.equal(byFilePath?.id.value, "video-1");
    assert.equal(all.length, 1);
  });

  it("deletes a persisted video", async () => {
    const database = createSqliteTestDatabase();
    databases.push(database);
    const repository = new SqliteVideoRepository(database);
    const now = new Date("2026-07-22T10:00:00.000Z");
    const video = Video.create({
      id: EntityId.create("video", "video-2"),
      title: TextValue.create("Episode 2"),
      filePath: FilePath.create("C:/videos/episode-2.mp4"),
      duration: null,
      status: VideoStatus.Available,
      createdAt: now,
      updatedAt: now,
      thumbnailPath: null,
      fileSizeBytes: null,
    });

    await repository.save(video);
    await repository.delete(EntityId.create("video", "video-2"));

    const result = await repository.findById(EntityId.create("video", "video-2"));

    assert.equal(result, null);
  });
});
