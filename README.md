# FL Series Player

Aplicativo local para organizar e reproduzir vídeos armazenados no dispositivo do usuário.

O objetivo do projeto é oferecer uma experiência parecida com plataformas como Netflix ou YouTube, mas mantendo tudo no computador do usuário. Os arquivos de vídeo não são enviados para nenhum servidor.

## Propósito

Este repositório está sendo desenvolvido de forma incremental, com foco em arquitetura limpa e crescimento seguro. A ideia é construir uma base sólida para evoluir o sistema sem refatorações grandes a cada nova funcionalidade.

## Stack

- React
- TypeScript
- TailwindCSS
- SQLite
- Vite
- pnpm

## Arquitetura

O projeto segue a separação em camadas:

- `Domain`: núcleo do sistema, com entidades, value objects, regras e contratos
- `Use Cases`: ações do sistema, independentes de infraestrutura
- `Infrastructure`: implementações concretas, como SQLite e repositórios
- `Presentation`: interface em React

## Status atual

As primeiras etapas já estão prontas:

1. Estrutura inicial do projeto
2. Modelagem do domínio
3. Primeiros casos de uso para vídeos
4. Persistência com SQLite e testes automatizados
5. Shell visual inicial da interface

## O que já funciona

- Estrutura do projeto configurada
- Modelagem do núcleo do sistema
- Casos de uso para adicionar, listar, buscar e remover vídeos
- Persistência real com SQLite
- Testes automatizados para validar o repositório e um fluxo de caso de uso com banco real
- Estrutura visual modular com header, sidebar, área principal e footer

## Desenvolvimento

Instalação:

```bash
pnpm install
```

Modo de desenvolvimento:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Testes:

```bash
pnpm test
```

## Observação

O projeto ainda não está completo. A interface funcional, o player e os demais recursos serão implementados nas próximas etapas, mantendo a mesma abordagem incremental.
