export function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

export function deriveTitleFromFilePath(filePath: string): string {
  const trimmedPath = filePath.trim();
  const segments = trimmedPath.split(/[\\/]/);
  const fileName = segments[segments.length - 1] ?? "";
  const withoutExtension = fileName.replace(/\.[^.]+$/, "");
  return withoutExtension.trim();
}
