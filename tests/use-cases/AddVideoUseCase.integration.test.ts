import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  EntityId,
  IdGenerator,
  VideoRepository,
} from "../../src/domain";
import { SqliteVideoRepository, openInMemorySqliteDatabase } from "../../src/infrastructure/sqlite";
import { AddVideoUseCase } from "../../src/use-cases";

describe("AddVideoUseCase with SQLite persistence", () => {
  const databases: Array<{ close: () => void }> = [];

  afterEach(() => {
    while (databases.length > 0) {
      databases.pop()?.close();
    }
  });

  it("persists a new video and can read it back from SQLite", async () => {
    const database = openInMemorySqliteDatabase();
    databases.push(database);
    const videoRepository: VideoRepository = new SqliteVideoRepository(database);
    const idGenerator: IdGenerator = {
      next() {
        return "video-10";
      },
    };
    const useCase = new AddVideoUseCase({
      videoRepository,
      idGenerator,
    });

    const created = await useCase.execute({
      filePath: "C:/videos/clip.mp4",
      durationSeconds: 88,
      fileSizeBytes: 4096,
    });

    const persisted = await videoRepository.findById(EntityId.create("video", created.id));

    assert.equal(created.id, "video-10");
    assert.equal(created.title, "clip");
    assert.equal(persisted?.id.value, "video-10");
    assert.equal(persisted?.filePath.value, "C:/videos/clip.mp4");
    assert.equal(persisted?.duration?.value, 88);
  });
});
