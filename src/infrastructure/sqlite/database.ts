import { DatabaseSync } from "node:sqlite";
import { migrateDatabase } from "./migrate";

export const DEFAULT_SQLITE_DATABASE_PATH = "series-player.sqlite";

export function openSqliteDatabase(filePath = DEFAULT_SQLITE_DATABASE_PATH): DatabaseSync {
  const database = new DatabaseSync(filePath);
  migrateDatabase(database);
  return database;
}

export function openInMemorySqliteDatabase(): DatabaseSync {
  const database = new DatabaseSync(":memory:");
  migrateDatabase(database);
  return database;
}
