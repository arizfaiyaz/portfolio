import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-grid text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-[960px] px-4">{children}</main>
      <Footer />
    </div>
  );
}
