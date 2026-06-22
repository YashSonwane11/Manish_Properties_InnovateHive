"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SavedPropertiesProvider } from "@/lib/saved-properties-context";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ToastContainer } from "../ui/toast";

const DASHBOARD_PREFIXES = ["/admin", "/agent", "/user", "/super-admin"];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboard = DASHBOARD_PREFIXES.some((prefix) => pathname?.startsWith(prefix));
  const hideFooter = pathname?.startsWith("/auth") || isDashboard;
  const hideNavbar = isDashboard;

  return (
    <SavedPropertiesProvider>
      <div className="min-h-screen bg-estate-bg">
        {!hideNavbar && <Navbar />}
        <main className="animate-fade-up">{children}</main>
        {!hideFooter && <Footer />}
        <ToastContainer />
      </div>
    </SavedPropertiesProvider>
  );
}
