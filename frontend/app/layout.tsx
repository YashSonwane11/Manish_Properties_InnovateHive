import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import { ComparisonGlobalWrapper } from "@/components/property/ComparisonGlobalWrapper";
import { SiteShell } from "@/components/layout/site-shell";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Manish Properties | Premium Real Estate",
  description: "Premium real estate marketplace built with Next.js.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <ComparisonGlobalWrapper>
            <SiteShell>{children}</SiteShell>
            <Toaster position="top-right" richColors closeButton />
          </ComparisonGlobalWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
