import type { ReactNode } from "react";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

interface AppShellProps {
  readonly children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-page text-textPrimary">
      <AppHeader />
      <div className="grid min-h-[calc(100vh-9rem)] lg:grid-cols-[18rem_minmax(0,1fr)]">
        <AppSidebar />
        <main className="px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
      <AppFooter />
    </div>
  );
}
