import { StatusPill } from "../ui/StatusPill";

export function AppHeader() {
  return (
    <header className="border-b border-white/10 bg-surface/70 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <StatusPill label="Etapa 5" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
              FL Series Player
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-textMuted md:text-base">
              Interface estrutural inicial para organizar vídeos locais com uma arquitetura
              limpa e pronta para crescer.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-textMuted">Arquitetura</p>
            <p className="mt-1 text-sm font-medium text-textPrimary">Modular</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-textMuted">Foco</p>
            <p className="mt-1 text-sm font-medium text-textPrimary">Vídeos locais</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-textMuted">Status</p>
            <p className="mt-1 text-sm font-medium text-textPrimary">Shell visual pronto</p>
          </div>
        </div>
      </div>
    </header>
  );
}
