import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.descriptor}`,
  description: SITE.summary,
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} font-sans ${geist.variable} h-full antialiased`}
      style={{ backgroundColor: "#000" }}
    >
      <body
        className="min-h-full text-zinc-50"
        style={{ backgroundColor: "#000" }}
      >
        <a
          href="#main"
          className="sr-only rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:ring-2 focus:ring-zinc-400"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
