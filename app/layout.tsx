import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synthpedia — Chronologie des synthétiseurs",
  description: "Explorez plus de 1 600 synthétiseurs, boîtes à rythmes et instruments électroniques sur une frise chronologique interactive.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
