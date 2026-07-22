interface StatusPillProps {
  readonly label: string;
}

export function StatusPill({ label }: StatusPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-accent">
      {label}
    </span>
  );
}
