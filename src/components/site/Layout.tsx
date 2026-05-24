import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
