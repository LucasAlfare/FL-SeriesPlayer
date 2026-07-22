import { DatabaseSync } from "node:sqlite";

export interface SqliteMigration {
  readonly version: number;
  readonly name: string;
  readonly apply: (database: DatabaseSync) => void;
}

const CREATE_MIGRATIONS_TABLE = `
  CREATE TABLE IF NOT EXISTS schema_migrations (
    version INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    applied_at TEXT NOT NULL
  );
`;

const CREATE_VIDEOS_TABLE = `
  CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    file_path TEXT NOT NULL UNIQUE,
    duration_seconds REAL NULL,
    status TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    thumbnail_path TEXT NULL,
    file_size_bytes INTEGER NULL
  );
`;

const CREATE_VIDEOS_FILE_PATH_INDEX = `
  CREATE UNIQUE INDEX IF NOT EXISTS idx_videos_file_path
  ON videos(file_path);
`;

const MIGRATIONS: readonly SqliteMigration[] = [
  {
    version: 1,
    name: "create_videos_table",
    apply(database: DatabaseSync) {
      database.exec(CREATE_VIDEOS_TABLE);
      database.exec(CREATE_VIDEOS_FILE_PATH_INDEX);
    },
  },
];

export function migrateDatabase(database: DatabaseSync): void {
  database.exec(CREATE_MIGRATIONS_TABLE);

  const appliedVersions = new Set<number>(
    database
      .prepare("SELECT version FROM schema_migrations")
      .all()
      .map((row) => (row as { version: number }).version),
  );

  const insertMigration = database.prepare(
    "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?, ?, ?)",
  );

  for (const migration of MIGRATIONS) {
    if (appliedVersions.has(migration.version)) {
      continue;
    }

    database.exec("BEGIN");

    try {
      migration.apply(database);
      insertMigration.run(migration.version, migration.name, new Date().toISOString());
      database.exec("COMMIT");
    } catch (error) {
      database.exec("ROLLBACK");
      throw error;
    }
  }
}
