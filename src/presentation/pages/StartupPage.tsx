const foundationItems = [
  "Domain",
  "Use Cases",
  "Infrastructure",
  "Presentation"
];

export function StartupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-glow backdrop-blur md:p-12">
        <div className="mb-8 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          Etapa 1 concluída
        </div>

        <div className="space-y-4">
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-textPrimary md:text-5xl">
            Base inicial do gerenciador de vídeos locais preparada para crescer.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-textMuted md:text-lg">
            A arquitetura está separada em camadas e pronta para receber os próximos
            blocos do sistema sem misturar responsabilidades.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {foundationItems.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-surfaceSoft px-4 py-5 text-sm font-medium text-textPrimary"
            >
              {item}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
