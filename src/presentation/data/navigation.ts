export interface NavigationItem {
  readonly label: string;
  readonly description: string;
  readonly active?: boolean;
}

export const navigationItems: readonly NavigationItem[] = [
  {
    label: "Painel",
    description: "Resumo visual do estado atual da aplicação.",
    active: true,
  },
  {
    label: "Biblioteca",
    description: "Espaço reservado para a coleção de vídeos.",
  },
  {
    label: "Playlists",
    description: "Agrupamento de vídeos em listas organizadas.",
  },
  {
    label: "Histórico",
    description: "Acesso rápido ao que foi assistido recentemente.",
  },
  {
    label: "Favoritos",
    description: "Vídeos destacados pelo usuário.",
  },
  {
    label: "Categorias",
    description: "Organização por temas e coleções.",
  },
];
