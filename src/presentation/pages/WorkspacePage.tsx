import { AppShell } from "../components/layout/AppShell";
import { StatusPill } from "../components/ui/StatusPill";
import { SurfaceCard } from "../components/ui/SurfaceCard";
import { workspaceSections } from "../data/workspaceSections";

const featureNotes = [
  "Layout modular, com camadas visuais independentes.",
  "Navegação lateral preparada para crescimento futuro.",
  "Área principal reservada para as próximas páginas.",
];

export function WorkspacePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <section className="rounded-[2rem] border border-white/10 bg-surface/85 p-6 shadow-glow md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <StatusPill label="Estrutura inicial" />
              <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-5xl">
                Um shell visual limpo para receber as próximas etapas do produto.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-textMuted md:text-lg">
                Nesta fase, a interface mostra apenas a estrutura principal da aplicação.
                O objetivo é organizar o espaço e deixar preparado o terreno para a
                biblioteca, o player e os demais fluxos.
              </p>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:w-[22rem] lg:grid-cols-1">
              {featureNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-textPrimary"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          {workspaceSections.map((section) => (
            <SurfaceCard
              key={section.title}
              title={section.title}
              description={section.description}
              note={section.note}
            />
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <SurfaceCard
            title="Área principal"
            description="Espaço reservado para as páginas futuras, com foco em leitura rápida e organização clara."
            note="Ainda sem player, sem biblioteca e sem fluxos interativos."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-textMuted">Layout</p>
                <p className="mt-2 text-sm text-textPrimary">Responsivo e modular</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-textMuted">Dependências</p>
                <p className="mt-2 text-sm text-textPrimary">Separadas por camada</p>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard
            title="Linha do tempo"
            description="Resumo do ponto atual do projeto, sem antecipar funcionalidades futuras."
          >
            <ol className="space-y-3 text-sm text-textMuted">
              <li>1. Base inicial do projeto pronta.</li>
              <li>2. Domínio modelado.</li>
              <li>3. Casos de uso de vídeo implementados.</li>
              <li>4. Persistência SQLite validada com testes.</li>
              <li>5. Shell visual inicial em andamento.</li>
            </ol>
          </SurfaceCard>
        </section>
      </div>
    </AppShell>
  );
}
