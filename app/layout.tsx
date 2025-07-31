
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Sales-Enablement Platform Demo",
  description: "Intelligent sales insights powered by AI - demonstration platform showcasing transcript analysis, CRM integration, and continuous learning capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          <Navigation />
          <main className="flex-1 ml-64 overflow-auto">
            <div className="max-w-7xl mx-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
