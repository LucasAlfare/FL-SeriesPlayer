import type { ReactNode } from "react";

interface SurfaceCardProps {
  readonly title: string;
  readonly description: string;
  readonly note?: string;
  readonly children?: ReactNode;
  readonly className?: string;
}

export function SurfaceCard({
  title,
  description,
  note,
  children,
  className = "",
}: SurfaceCardProps) {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-surfaceSoft/80 p-5 shadow-glow backdrop-blur ${className}`}
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
        <p className="text-sm leading-6 text-textMuted">{description}</p>
      </div>
      {note ? (
        <p className="mt-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-textPrimary/90">
          {note}
        </p>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}
