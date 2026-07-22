export interface WorkspaceSection {
  readonly title: string;
  readonly description: string;
  readonly note: string;
}

export const workspaceSections: readonly WorkspaceSection[] = [
  {
    title: "Área principal",
    description:
      "Bloco central destinado às páginas e às informações mais importantes do fluxo atual.",
    note: "Pronto para receber as telas das próximas etapas.",
  },
  {
    title: "Navegação",
    description:
      "Estrutura lateral preparada para crescer com novas áreas sem perder clareza.",
    note: "A navegação ainda é apenas visual nesta etapa.",
  },
  {
    title: "Rodapé",
    description:
      "Espaço para contexto da aplicação, status e informações auxiliares.",
    note: "Mantido simples para preservar a separação de responsabilidades.",
  },
];
