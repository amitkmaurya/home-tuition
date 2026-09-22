import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tutorsacademy.example"),
  title: { default: "ANANYA ARUN TUITION | Expert Tuition", template: "%s | ANANYA ARUN TUITION" },
  description: "Professional tuition and personalized learning support from ANANYA ARUN TUITION.",
  openGraph: { title: "ANANYA ARUN TUITION | Expert Tuition", description: "Personalized tuition for better learning and better results.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
