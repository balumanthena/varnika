import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { Metadata } from "next"; // ✅ ADD THIS

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

// ✅ FIX: Apply Metadata type
export const metadata: Metadata = {
  title: "Varnika Boutique — Soft Luxury Couture",
  description: "Crafted with heritage refinement and premium couture finishing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body bg-[#faf6ef] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
