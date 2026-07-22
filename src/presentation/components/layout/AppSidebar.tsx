import { navigationItems } from "../../data/navigation";

export function AppSidebar() {
  return (
    <aside className="border-r border-white/10 bg-page/80 px-4 py-6 md:px-5">
      <nav aria-label="Navegação principal" className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-textMuted">Navegação</p>
          <div className="mt-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`w-full rounded-2xl border px-4 py-3 text-left transition-colors ${
                  item.active
                    ? "border-accent/30 bg-accent/10 text-textPrimary"
                    : "border-white/8 bg-white/5 text-textMuted hover:border-white/20 hover:text-textPrimary"
                }`}
              >
                <span className="block text-sm font-medium">{item.label}</span>
                <span className="mt-1 block text-xs leading-5">{item.description}</span>
              </button>
            ))}
          </div>
        </div>

        <section className="rounded-3xl border border-white/10 bg-surfaceSoft/70 p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-textMuted">Estrutura</p>
          <p className="mt-3 text-sm leading-6 text-textPrimary">
            Layout preparado para receber páginas maiores sem perder a separação de
            responsabilidades.
          </p>
        </section>
      </nav>
    </aside>
  );
}
