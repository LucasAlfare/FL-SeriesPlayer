import { DatabaseSync } from "node:sqlite";
import { migrateDatabase } from "../../src/infrastructure/sqlite";

export function createSqliteTestDatabase(): DatabaseSync {
  const database = new DatabaseSync(":memory:");
  migrateDatabase(database);
  return database;
}
