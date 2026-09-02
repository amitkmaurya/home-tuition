import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tutorsacademy.example"),
  title: { default: "TUTORS ACADEMY | Expert Home Tuition", template: "%s | TUTORS ACADEMY" },
  description: "Professional home tuition and personalized learning support from TUTORS ACADEMY.",
  openGraph: { title: "TUTORS ACADEMY | Expert Home Tuition", description: "Personalized home tuition for better learning and better results.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
